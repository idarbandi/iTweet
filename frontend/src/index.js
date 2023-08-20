import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TweetsComponent } from './tweets';
import { FeedComponent } from './tweets';
import reportWebVitals from './reportWebVitals';
import { TweetDetailComponent } from './tweets';

const TweetsEl = document.getElementById('iTweet')
const TweetsFeedEl = document.getElementById('iTweet-Feed')
const TweetDetailEl = document.querySelectorAll('.iTweet-detail')
const root = ReactDOM.createRoot(document.getElementById('root'));
const tweetsRoot = ReactDOM.createRoot(TweetsEl);
const tweetsFeedRoot = ReactDOM.createRoot(TweetsFeedEl);
 
  if (tweetsFeedRoot) {
  tweetsFeedRoot.render(
    <React.StrictMode>
      <FeedComponent dataset={TweetsFeedEl.dataset}/>
    </React.StrictMode>
  );
}
else if (tweetsRoot) {
  tweetsRoot.render(
    <React.StrictMode>
      <TweetsComponent dataset={TweetsEl.dataset}/>
    </React.StrictMode>
  );
} 
else if (root) {
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}

TweetDetailEl.forEach(container => {
  const TweetDetailRoot = ReactDOM.createRoot(container);
  TweetDetailRoot.render(
    <React.StrictMode>
      <TweetDetailComponent dataset={container.dataset}
       />
    </React.StrictMode>
  )
})
reportWebVitals();

