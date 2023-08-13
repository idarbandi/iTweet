import React from "react";
import { useEffect, useState } from "react";

export function ActionBtn(props) {
  const { tweet, action } = props;
  const className = props.className
    ? props.className
    : "btn btn-primary btn-sm";
  return action.type === "like" ? (
    <button className={className}> {tweet.likes} Likes</button>
  ) : null;
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
        <ActionBtn tweet={tweet} action={{ type: "like" }} />
      </div>
    </div>
  );
}

function loadTweets(callback) {
    const xhr = new XMLHttpRequest()
    const method = 'GET' // "POST"
    const url = "http://127.0.0.1:8000/api/tweets/"
    const responseType = "json"
    xhr.responseType = responseType
    xhr.open(method, url)
    xhr.onload = function() {
      callback(xhr.response, xhr.status)
    }
    xhr.onerror = function (e) {
      console.log(e)
      callback({"message": "The request was an error"}, 400)
    }
    xhr.send()
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
  