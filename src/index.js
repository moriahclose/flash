import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-slate-900 text-slate-300'>
      <h1 className='font-bold text-6xl'>Just a Test</h1>

      <p className='text-5xl'>
      I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Checkmate... Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!
     </p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
