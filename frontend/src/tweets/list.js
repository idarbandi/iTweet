import React from 'react';
import { Tweet } from './detail';
import { useEffect, useState } from 'react';
import { apiTweetList } from './lookup';


export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [tweetsDidSet, setTweeetsDidSet] = useState(false);
    useEffect(() => {
      const final = [...props.newTweets].concat(tweetsInit);
      if (final.length !== tweets.length) {
        setTweets(final);
      }
    }, [props.newTweets, tweets, tweetsInit]);
    useEffect(() => {
      if (tweetsDidSet === false) {
        const myCallback = (response, status) => {
          if (status === 200) {
            setTweetsInit(response);
            setTweeetsDidSet(true);
          } else {
            alert('Error');
          }
        };
        apiTweetList(props.username, myCallback);
      }
    }, [tweetsInit, tweetsDidSet, setTweeetsDidSet, props.username]);
  
    const handleDidRetweet = (newTweet) => {
      const updateTweetsInit = [...tweetsInit];
      updateTweetsInit.unshift(newTweet);
      setTweetsInit(updateTweetsInit);
      const updateFinalTweets = [...tweets];
      updateFinalTweets.unshift(tweets);
      setTweets(updateFinalTweets);
    };
  
    return tweets.map((item, index) => {
      return <Tweet didretweet={handleDidRetweet} key={`${index}-{item.id}`} tweet={item} />;
    });
  }