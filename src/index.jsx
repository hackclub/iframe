/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import logoIcon from './assets/logoIcon.jpeg';

logoIcon = "https://github.com/hackclub/iframe/blob/4ece928982c376cb11e01016b5b4e92d92187c05/src/assets/logoIcon.jpeg"

const root = document.getElementById('root');

const setFavicon = () => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = logoIcon;
  link.type = 'image/jpeg';

  // Remove any existing favicon
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (existingFavicon) {
    document.head.removeChild(existingFavicon);
  }

  // Add the new favicon
  document.head.appendChild(link);
};

// Set the favicon
setFavicon();


if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root);
