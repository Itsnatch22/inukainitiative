export {};

interface EnvConfig {
  RESEND_API_KEY: string;
  UPSTASH_REDIS_REST_URL?: string;
  UPSTASH_REDIS_REST_TOKEN?: string;
  CONTACT_EMAIL_FROM?: string;
  CONTACT_EMAIL_TO?: string;
}

class EnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvironmentError";
  }
}

export function validateEnv(): EnvConfig {
  const errors: string[] = [];
  if (typeof window === "undefined") {
    if (process.env.UPSTASH_REDIS_REST_URL && !isValidUrl(process.env.UPSTASH_REDIS_REST_URL)) {
      errors.push("UPSTASH_REDIS_REST_URL is not a valid URL");
    }
  }

  if (!process.env.RESEND_API_KEY) {
    errors.push("RESEND_API_KEY is not defined");
  }

  if (errors.length > 0) {
    throw new EnvironmentError(
      `Environment validation failed:\n${errors.map((error) => `  - ${error}`).join("\n")}`
    );
  }

  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "",
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM ?? "inuka34initiative@gmail.com",
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO ?? "inuka34initiative@gmail.com",
  };
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

let cachedEnv: EnvConfig | null = null;

export function getEnv(): EnvConfig {
  if (!cachedEnv) {
    cachedEnv = validateEnv();
  }
  return cachedEnv;
}
