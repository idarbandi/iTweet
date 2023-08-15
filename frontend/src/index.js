import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TweetsComponent } from './tweets';
import reportWebVitals from './reportWebVitals';

const TweetsEl = document.getElementById('iTweet')
const root = ReactDOM.createRoot(document.getElementById('root'));
const tweetsRoot = ReactDOM.createRoot(TweetsEl);

if (tweetsRoot) {
  tweetsRoot.render(
    <React.StrictMode>
      <TweetsComponent dataset={TweetsEl.dataset}/>
    </React.StrictMode>
  );
} else if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


reportWebVitals();

