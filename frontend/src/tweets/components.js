import React from "react";
import { useEffect, useState } from "react";
import { loadTweets } from "../lookup";

export function ActionBtn(props) {
  const { tweet, action } = props;
  const className = props.className ? props.className : "btn btn-primary btn-sm";
  let [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0)
  const [userLike, setUserLike] = useState(tweet.userLike === true ? true: false)
  const actionDisplay = action.display ? action.display : 'action';
  const display  = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
  const handleClick = (event) => {
    event.preventDefault();
    if (action.type === 'like') {
        if (userLike === true){
            setLikes(likes - 1)
            setUserLike(false)
        }else {
            setLikes(likes + 1)
            setUserLike(true)
            }
        }
    }
    return <button className={className} onClick={handleClick}>{display}</button>   
}

function Tweet(props) {
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";
  const { tweet } = props;
  return (
    <div className={className}>
      <p>{tweet.content}</p>
      <div className="btn btn-group">
        <ActionBtn tweet={tweet} action={{ type: "like", display:'like'}} />
        <ActionBtn tweet={tweet} action={{ type: "unlike", display:'Unlike'}} />
        <ActionBtn tweet={tweet} action={{ type: "Retweet", display:'Retweet'}} />
      </div>
    </div>
  );
}


export function TweetsList(props) {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
      const myCallback = (response, status) => {
        if (status === 200) {
          setTweets(response)
        }
        else {
          alert("Error")
        }
      }
      loadTweets(myCallback)
    }, []) ;return tweets.map((item, index) => {
      return <Tweet key={`${index}-{item.id}`} tweet={item}/>
    })
  }
  