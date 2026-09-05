import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactConfirmationProps = {
  name: string;
  subject: string;
};

export function ContactConfirmation({
  name,
  subject,
}: ContactConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your message for the Inuka 034 Initiative team.</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={eyebrow}>Inuka 034 Initiative</Text>
          <Heading style={heading}>Thanks for reaching out, {name}.</Heading>
          <Text style={paragraph}>
            Your message has been sent to the relevant team members. We&apos;ll
            review it and get back to you as soon as possible.
          </Text>
          <Section style={summary}>
            <Text style={summaryLabel}>Subject</Text>
            <Text style={summaryValue}>{subject}</Text>
          </Section>
          <Hr style={rule} />
          <Text style={footer}>
            If you need to add anything to your message, reply to this email or
            write to{" "}
            <Link href="mailto:inuka34initiative@gmail.com" style={link}>
              inuka34initiative@gmail.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f7f8f4",
  fontFamily: "Arial, sans-serif",
  margin: "0",
  padding: "32px 16px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7e2",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
};

const eyebrow = {
  color: "#166534",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "2px",
  margin: "0 0 20px",
  textTransform: "uppercase" as const,
};

const heading = {
  color: "#17221b",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 20px",
};

const paragraph = {
  color: "#647067",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 24px",
};

const summary = {
  backgroundColor: "#edf3ee",
  borderRadius: "10px",
  padding: "16px 20px",
};

const summaryLabel = {
  color: "#166534",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
};

const summaryValue = {
  color: "#17221b",
  fontSize: "15px",
  margin: "0",
};

const rule = {
  borderColor: "#e5e7e2",
  margin: "28px 0",
};

const footer = {
  color: "#647067",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0",
};

const link = {
  color: "#166534",
};
