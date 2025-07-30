import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

import { ZodError, z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'preview', 'testing', 'production'])
    .default('development')
    .readonly(),
  FIREBASE_API_KEY: z.string().min(10).readonly(),
  FIREBASE_AUTH_DOMAIN: z.string().min(10).readonly(),
  FIREBASE_PROJECT_ID: z.string().min(10).readonly(),
  FIREBASE_STORAGE_BUCKET: z.string().min(10).readonly(),
  FIREBASE_MESSAGING_SENDER_ID: z.string().min(10).readonly(),
  FIREBASE_APP_ID: z.string().min(10).readonly(),
});

export type TEnv = z.infer<typeof EnvSchema>;

expand(config());

try {
  EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = 'Missing required values in .env:\n';
    error.issues.forEach((issue) => {
      message += issue.path[0] + '\n';
    });
    const e = new Error(message);
    e.stack = '';
    throw e;
  } else {
    console.error(error);
  }
}

const ENV = EnvSchema.parse(process.env);

export default ENV;
