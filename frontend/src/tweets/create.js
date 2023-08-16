import React, { createRef } from 'react';
import { apiTweetCreate } from './lookup';

export function TweetCreate(props) {
    const {didTweet} = props;
    const textAreaRef = createRef();
    const handleBackendUpdate = (response, status) => {
      if (status === 201) {
        didTweet(response);
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
        </div>
      </div>
    );
  }
  