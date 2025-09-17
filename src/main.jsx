import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './css/App.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
