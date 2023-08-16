import React from 'react';
import { useState } from 'react';
import { TweetsList } from './list';
import { TweetCreate } from './create';

export function TweetsComponent(props) {
  const {canTweet} = props.dataset.canTweet === 'false' ? false : true;
  const [newTweets, setnewTweets] = useState([]);
  const handleNewTweet = (newTweet) => {
    // Backend api Response Handler
    let tempNewTweets = [...newTweets];
    tempNewTweets.unshift(newTweet)
    setnewTweets(tempNewTweets)
  };
  return (
    <div className={props.className}>
      { canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' /> }
      <TweetsList newTweets={newTweets} {...props} />
      </div>
  );
}