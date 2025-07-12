import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
});

// check and redirect if user is signed in

function AuthLayout() {
  return (
    <section>
      test
      <Outlet />
    </section>
  );
}
