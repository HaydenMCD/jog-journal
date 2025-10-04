import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import type { AuthContextType } from '../context/useAuth';
import type { DistanceContextType } from '../context/useDistance';

import Header from '../components/Header';

export type RouterContext = {
  auth: AuthContextType;
  distance: DistanceContextType;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <main className='app'>
        <Outlet />
      </main>
      {/* footer goes here */}
      <TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
    </>
  ),
});
