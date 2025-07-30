import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

interface ImportMetaEnv {
  [key: string]: string | boolean | undefined;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const EnvSchema = z.object({
  VITE_USER_SIGNED_IN: z.coerce.boolean(),
});

const parsedEnv = EnvSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(
    'Invalid local dev environment variables:',
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error('Invalid local environment variables');
}

export const ENV_LOCAL = parsedEnv.data;
