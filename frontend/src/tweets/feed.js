import React from 'react';
import { Tweet } from './detail';
import { useEffect, useState } from 'react';
import { apiTweetFeed } from './lookup';


export function FeedList(props) {
    const [tweetsInit, setTweetsInit] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
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
            setNextUrl(response.next)
            setTweetsInit(response.results);
            setTweeetsDidSet(true);
          }
        };
        apiTweetFeed(myCallback);
      }
    }, [tweetsInit, tweetsDidSet, setTweeetsDidSet, props.dataset.username]);

  
    const handleDidRetweet = (newTweet) => {
      const updateTweetsInit = [...tweetsInit];
      updateTweetsInit.unshift(newTweet);
      setTweetsInit(updateTweetsInit);
      const updateFinalTweets = [...tweets];
      updateFinalTweets.unshift(tweets);
      setTweets(updateFinalTweets);
    };

    const handleloadNext = (event)  => {
      event.preventDefault();
      if (nextUrl) {
        const handleLoadNextResponse = (response, status) => {
          if (status === 200) {
            setNextUrl(response.next)
            setTweetsInit(response.results);
            setTweets(response.results)
          }
        }
        apiTweetFeed(handleLoadNextResponse, nextUrl)
      }
    }
  
    return <React.Fragment>
      {tweets.map((item, index) => {
      return <Tweet didretweet={handleDidRetweet} key={`${index}-{item.id}`} tweet={item} />;
      })}
      {nextUrl !== null && <button className='btn btn-outline-primary' onClick={handleloadNext} >Next</button>}
    </React.Fragment>;
  }