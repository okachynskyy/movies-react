import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './components/root';
import configureStore from './configure-store';

import './app.scss';

const store = configureStore(window.PRELOADED_STATE);


hydrate(
  <Root store={store} Router={BrowserRouter} />,
  document.getElementById('app'),
);
