import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { fixUserDevise } from 'utils/userDevice';

import './styles/styles.scss';

import App from './App';

const startApp = () => {
  fixUserDevise();

  const container = document.getElementById('root');
  const root = container ? createRoot(container) : null;

  root?.render(<App />);
};

startApp();
