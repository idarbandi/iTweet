import React, { createRef } from "react";
import { useEffect, useState } from "react";
import { loadTweets, createTweet } from "../lookup";

export function TweetsComponent(props) {
  const textAreaRef = createRef()
  const [newTweets, setnewTweets] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVal =  textAreaRef.current.value
    let tempNewTweets = [...newTweets]
    createTweet(newVal, (response, status) => {
      if (status === 201){
        tempNewTweets.unshift(response)
      } else {
        console.log(response)
        alert ('an error occured during the tweet creation')
      }
    } )
    setnewTweets(tempNewTweets)
    textAreaRef.current.value= ''
  }
  return (
  <div className={props.className}>
    <div className="col-12 mb-3">
    <form onSubmit={handleSubmit}>
    <textarea ref={textAreaRef} required={true} className="form-control" name="tweet"></textarea>
    <button  type="submit" className="btn btn-control my-3 bg-info">Tweet</button>
  </form>
  <TweetsList newTweets={newTweets}/>
  </div>
  </div>
  )
}

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
    const [tweetsInit, setTweetsInit] = useState([])
    const [tweets, setTweets] = useState([])
    const [tweetsDidSet, setTweeetsDidSet] = useState(false)
    useEffect(() => {
      const final = [...props.newTweets].concat(tweetsInit)
      if (final.length !== tweets.length) {
        setTweets(final)
      }
    }, [props.newTweets, tweets, tweetsInit])
    useEffect(() => {
      if (tweetsDidSet === false) {
        const myCallback = (response, status) => {
          if (status === 200) {
            setTweetsInit(response)
            setTweeetsDidSet(true)
          }
          else {
            alert("Error")
          }
        }
        loadTweets(myCallback)
      }
    }, [tweetsInit,tweetsDidSet, setTweeetsDidSet]) ;return tweets.map((item, index) => {
      return <Tweet key={`${index}-{item.id}`} tweet={item}/>
    })
  }
  