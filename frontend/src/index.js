import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TweetsComponent } from './tweets';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tweetsRoot = ReactDOM.createRoot(document.getElementById('iTweet'));
if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (tweetsRoot) {
  tweetsRoot.render(
    <React.StrictMode>
      <TweetsComponent />
    </React.StrictMode>
  );
}


reportWebVitals();

