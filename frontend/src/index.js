import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TweetsComponent } from './tweets';
import { FeedComponent } from './tweets';
import reportWebVitals from './reportWebVitals';
import { TweetDetailComponent } from './tweets';

const TweetsEl = document.getElementById('iTweet')
const TweetsFeedEl = document.getElementById('iTweet-Feed')
const TweetDetailEl = document.querySelectorAll('.iTweet-detail')
 
  if (TweetsFeedEl) {
  const tweetsFeedRoot = ReactDOM.createRoot(TweetsFeedEl);
  tweetsFeedRoot.render(
    <React.StrictMode>
      <FeedComponent dataset={TweetsFeedEl.dataset}/>
    </React.StrictMode>
  );
}
 if (TweetsEl) {
  const tweetsRoot = ReactDOM.createRoot(TweetsEl);
  tweetsRoot.render(
    <React.StrictMode>
      <TweetsComponent dataset={TweetsEl.dataset}/>
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

