import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../components/Header';

export const Route = createRootRouteWithContext({
  component: () => (
    <>
      <Header />
      <main className='app'>
        <Outlet />
      </main>
      {/* footer goes here */}
      <TanStackRouterDevtools />
    </>
  ),
});
