import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
});

// check and redirect to user dashboard if user is signed in

function AuthLayout() {
  return (
    <section>
      <Outlet />
    </section>
  );
}
