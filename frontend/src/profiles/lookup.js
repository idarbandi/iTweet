import { backendLookup } from '../lookup';

export function apiProfileDetail(tweetId, callback) {
    backendLookup('GET', `/profiles/${tweetId}`, callback);
  }
  