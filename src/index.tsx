import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';

const startApp = () => {
  const container = document.getElementById('root');
  const root = container ? createRoot(container) : null;

  root?.render(<App />);
};

startApp();
