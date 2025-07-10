import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '../css/App.css';

import Header from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <main className='app'>
        <Header />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
