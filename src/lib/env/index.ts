import { z } from 'zod';

const EnvSchema = z.object({
  VITE_APP_NAME: z.string().min(6),
  VITE_NODE_ENV: z.enum(['development', 'test', 'production']),
  VITE_FIREBASE_API_KEY: z.string().min(10),
  VITE_FIREBASE_AUTH_DOMAIN: z.string().min(10),
  VITE_FIREBASE_PROJECT_ID: z.string().min(10),
  VITE_FIREBASE_STORAGE_BUCKET: z.string().min(10),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string().min(10),
  VITE_FIREBASE_APP_ID: z.string().min(10),
  VITE_USER_SIGNED_IN: z.coerce.boolean(),
});

// const mode = import.meta.env.MODE;
const parsedEnv = EnvSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error('Invalid environment variables');
}

const ENV = parsedEnv.data;

export default ENV;
