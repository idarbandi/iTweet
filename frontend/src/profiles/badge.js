import React, {useState, useEffect} from 'react'
import { apiProfileDetail } from './lookup';

export function ProfileBadgeComponent (props) {
    const {username} = props.dataset;
    const [didlookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)
    const handleBackendLookup = (response, status) => {
      if (status === 200) {
        setProfile(response)
      }
    }
    useEffect(() => {
      if (didlookup === false) {
        apiProfileDetail(username, handleBackendLookup)
        setDidLookup(true)
      }
    },[username, didlookup, setDidLookup])
    return didlookup === false ? "... Loading" : <span>{profile.first_name}</span>
}