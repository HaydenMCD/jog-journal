import './css/App.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './lib/tanstack/router/route-tree.gen';

import { AuthContextProvider, useAuthContext } from './context/useAuth';
import { DistanceProvider, useDistanceContext } from './context/useDistance';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: undefined!,
    distance: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InitApp() {
  const auth = useAuthContext();
  const distance = useDistanceContext();
  if (auth.isInitialLoading) {
    return;
  }
  return <RouterProvider router={router} context={{ auth, distance }} />;
}

function App() {
  return (
    <AuthContextProvider>
      <DistanceProvider>
        <InitApp />
      </DistanceProvider>
    </AuthContextProvider>
  );
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
