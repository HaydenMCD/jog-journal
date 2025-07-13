import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(protected)')({
  component: ProtectedRouteLayout,
});

function ProtectedRouteLayout() {
  return (
    <section className='wrapper'>
      <Outlet />
    </section>
  );
}
