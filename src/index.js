import React from 'react';
import ReactDOM from 'react-dom/client';

import { persistor, store } from './redux/store';

import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

