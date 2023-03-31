/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';
import { HopeProvider, HopeThemeConfig } from '@hope-ui/solid';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}
const config: HopeThemeConfig = {
  initialColorMode: 'system', // 2. Add your color mode
  // rest of the config...
};

render(
  () => (
    <HopeProvider config={config}>
      <Router>
        <App />
      </Router>
    </HopeProvider>
  ),
  root!
);