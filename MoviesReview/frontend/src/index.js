import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
