import React, { createRef } from 'react';
import { useEffect, useState } from 'react';
import { apiTweetList, apiTweetCreate, apiTweetAction } from './lookup';

export function TweetsComponent(props) {
  const textAreaRef = createRef();
  const [newTweets, setnewTweets] = useState([]);
  const handleBackendUpdate = (response, status) => {
    // Backend api Response Handler
    let tempNewTweets = [...newTweets];
    if (status === 201) {
      tempNewTweets.unshift(response);
      setnewTweets(tempNewTweets);
    } else {
      console.log(response);
      alert('an error occured during the tweet creation');
    }
  };
  const handleSubmit = (event) => {
    // Backend api Request Handler
    event.preventDefault();
    const newVal = textAreaRef.current.value;
    apiTweetCreate(newVal, handleBackendUpdate);
    textAreaRef.current.value = '';
  };
  return (
    <div className={props.className}>
      <div className="col-12 mb-3">
        <form onSubmit={handleSubmit}>
          <textarea ref={textAreaRef} required={true} className="form-control" name="tweet"></textarea>
          <button type="submit" className="btn btn-control my-3 bg-info">
            Tweet
          </button>
        </form>
        <TweetsList newTweets={newTweets} />
      </div>
    </div>
  );
}

export function ActionBtn(props) {
  const { tweet, action, didPerformAction } = props;
  const className = props.className ? props.className : 'btn btn-primary btn-sm';
  const likes = tweet.likes ? tweet.likes : 0;
  const actionDisplay = action.display ? action.display : 'action';
  const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay;
  const handleActionBackendEvent = (response, status) => {
    if ((status === 200) | (status === 201) && didPerformAction) {
      didPerformAction(response, status);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    apiTweetAction(tweet.id, action.type, handleActionBackendEvent);
  };
  return (
    <button className={className} onClick={handleClick}>
      {display}
    </button>
  );
}

export function ParentTweet(props) {
  const { tweet } = props;
  return tweet.parent ? (
    <div className="row">
      <div className="col-11 mx-auto p-3 border rounded">
        <p className="mb-0 text-muted small">Shared</p>
        <Tweet hideActions className={' '} tweet={tweet.parent} />
      </div>
    </div>
  ) : null;
}

export function Tweet(props) {
  const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null);
  const className = props.className ? props.className : 'col-10 mx-auto col-md-6';
  const { tweet, didRetweet, hideActions } = props;
  const handlePerformAction = (newActionTweet, status) => {
    if (status === 200) {
      setActionTweet(newActionTweet);
    } else if (status === 201) {
      // Update Tweet List
      if (didRetweet) {
        didRetweet(newActionTweet);
      }
    }
  };
  return (
    <div className={className}>
      <div>
        <p>
          {tweet.id} - {tweet.content}
        </p>
        <ParentTweet tweet={tweet} />
      </div>
      {(actionTweet && hideActions !== true) && (
        <div className="btn btn-group">
          <ActionBtn
            tweet={actionTweet}
            didPerformAction={handlePerformAction}
            action={{ type: 'like', display: 'like' }}
          />
          <ActionBtn
            tweet={actionTweet}
            didPerformAction={handlePerformAction}
            action={{ type: 'unlike', display: 'Unlike' }}
          />
          <ActionBtn
            tweet={actionTweet}
            didPerformAction={handlePerformAction}
            action={{ type: 'retweet', display: 'Retweet' }}
          />
        </div>
      )}
    </div>
  );
}

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
      apiTweetList(myCallback);
    }
  }, [tweetsInit, tweetsDidSet, setTweeetsDidSet]);

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
