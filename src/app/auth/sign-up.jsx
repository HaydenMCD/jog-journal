import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/sign-up')({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <>
      <h2>Sign Up</h2>
    </>
  );
}
