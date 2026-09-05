import { createClient, type RedisClientType } from "redis";

import { getEnv } from "@/env";

let redisClient: RedisClientType | null = null;
let redisConnection: Promise<RedisClientType> | null = null;

async function getRedisClient(): Promise<RedisClientType | null> {
  const env = getEnv();
  const url = env.UPSTASH_REDIS_REST_URL;

  if (!url || (!url.startsWith("redis://") && !url.startsWith("rediss://"))) {
    return null;
  }

  if (!redisClient) {
    redisClient = createClient({
      url,
    });

    redisClient.on("error", (error) => {
      console.error("Redis rate-limit error:", error);
    });

    redisConnection = redisClient.connect().then(() => redisClient as RedisClientType);
  }

  return redisConnection;
}

export type RateLimitOptions = {
  limit: number;
  windowSeconds: number;
};

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

export async function rateLimit(
  identifier: string,
  { limit, windowSeconds }: RateLimitOptions = { limit: 5, windowSeconds: 60 }
): Promise<RateLimitResult> {
  const client = await getRedisClient();

  if (!client) {
    return {
      success: true,
      limit,
      remaining: limit,
      reset: Date.now() + windowSeconds * 1000,
    };
  }

  const key = `rate-limit:${identifier}`;
  const count = await client.incr(key);

  if (count === 1) {
    await client.expire(key, windowSeconds);
  }

  const ttl = await client.ttl(key);

  return {
    success: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    reset: Date.now() + Math.max(0, ttl) * 1000,
  };
}
