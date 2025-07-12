import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/auth/forgot-password')({
  component: PasswordResetPage,
});

function PasswordResetPage() {
  return (
    <>
      <h2>Password Reset</h2>
    </>
  );
}
