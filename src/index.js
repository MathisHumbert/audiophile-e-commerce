import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './styles/reset.css';
import './styles/index.scss';
import App from './App';
import store from './redux/app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// MENU
// OPACITY TO BODY
// TEXT_TRANSFORM CLASS
// HOVER
// RESPONSIVE IMAGE
// TABLET
// DESKTOP
// PRIVATE ROUTE FOR CHECKOUT
