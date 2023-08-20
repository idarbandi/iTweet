import React from 'react';
import { useState, useEffect } from 'react';
import { TweetsList } from './list';
import { TweetCreate } from './create';
import { apiTweetDetail } from './lookup';
import {FeedList} from './feed'
import { Tweet } from './detail';

export function FeedComponent(props) {
  const canTweet = props.dataset.canTweet === 'false' ? false : true;
  const [newTweets, setnewTweets] = useState([]);
  const handleNewTweet = (newTweet) => {
    // Backend api Response Handler
    let tempNewTweets = [...newTweets];
    tempNewTweets.unshift(newTweet)
    setnewTweets(tempNewTweets)
  };
 return <div className={props.className}>
  {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
<FeedList newTweets={newTweets} {...props} />
</div>
}

export function TweetsComponent(props) {
  const canTweet = props.dataset.canTweet === 'false' ? false : true;
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


export function TweetDetailComponent(props) {
  const {id} = props.dataset;
  const [didlookup, setDidLookup] = useState(false)
  const [tweet, setTweet] = useState(null)
  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setTweet(response)
    } else {
      alert("an error occured during the detail get info")
    }
  }
  useEffect(() => {
    if (didlookup === false) {
      apiTweetDetail(id, handleBackendLookup)
      setDidLookup(true)
    }
  },[id, didlookup, setDidLookup])
  return tweet === null ? null : <Tweet tweet={tweet} className={props.dataset.className} />
}