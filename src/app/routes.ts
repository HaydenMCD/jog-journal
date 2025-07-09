import { type RouteConfig, route, prefix } from '@react-router/dev/routes';

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route('/', 'App.jsx'),
  //   route('*?', 'catchall.jsx'),
] satisfies RouteConfig;
