import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartStateContext } from './Static-Pages/Context/CartContext';
import {Provider} from 'react-redux'
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <BrowserRouter>
      <CartStateContext>
<Provider store={store}>
  <App />
</Provider>
     
      </CartStateContext>
   </BrowserRouter>
    

      
   
   
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
