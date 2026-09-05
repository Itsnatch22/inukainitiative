'use client';

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const nextErrors: FormErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    nextErrors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Please enter a message.";
  }

  return nextErrors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Please review the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => ({ message: "Request failed" }))) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(payload.error ?? payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setFeedback(payload.message ?? "Thanks for your message. We will be in touch soon.");
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unable to send your message right now. Please try again later."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
            className={cn(errors.name && "border-destructive focus-visible:ring-destructive/30")}
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
            className={cn(errors.email && "border-destructive focus-visible:ring-destructive/30")}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          placeholder="How can we help?"
          className={cn(errors.subject && "border-destructive focus-visible:ring-destructive/30")}
        />
        {errors.subject ? (
          <p id="subject-error" className="text-sm text-destructive">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us a little about your question or idea."
          className={cn(errors.message && "border-destructive focus-visible:ring-destructive/30")}
          rows={6}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {feedback ? (
        <p
          className={cn(
            "rounded-lg border px-3 py-2 text-sm",
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-amber-200 bg-amber-50 text-amber-700"
          )}
        >
          {feedback}
        </p>
      ) : null}

      <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
