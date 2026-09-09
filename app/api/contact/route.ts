import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { ContactConfirmation } from "@/emails/ContactConfirmation";
import { getEnv } from "@/env";
import { rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const parsedResult = contactSchema.safeParse(body);

    if (!parsedResult.success) {
      const issue = parsedResult.error.issues[0];
      return NextResponse.json(
        { error: issue?.message ?? "Invalid request data" },
        { status: 400 }
      );
    }

    const env = getEnv();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rateLimitEnabled = Boolean(
      env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN
    );

    if (rateLimitEnabled) {
      const rateLimitResult = await rateLimit(ip, { limit: 5, windowSeconds: 60 });

      if (!rateLimitResult.success) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
    }

    const payload = parsedResult.data;
    const contactEmailFrom = env.CONTACT_EMAIL_FROM ?? "info@inukainitiative.org";
    const contactEmailTo = env.CONTACT_EMAIL_TO ?? "info@inukainitiative.org";
    const resend = new Resend(env.RESEND_API_KEY);
    const submittedAt = new Date().toISOString();

    await resend.emails.send({
      from: contactEmailFrom,
      to: [contactEmailTo],
      replyTo: payload.email,
      subject: payload.subject,
      text: `${payload.message}\n\nFrom: ${payload.name} <${payload.email}>\nSubmitted at: ${submittedAt}`,
    });

    await resend.emails.send({
      from: contactEmailFrom,
      to: [payload.email],
      subject: "We received your message",
      react: ContactConfirmation({
        name: payload.name,
        subject: payload.subject,
      }),
      text: `Hi ${payload.name},\n\nYour message has been sent to the relevant Inuka 034 Initiative team members. We will get back to you as soon as possible.\n\nSubject: ${payload.subject}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! Your message has been sent. A confirmation email is on its way.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
