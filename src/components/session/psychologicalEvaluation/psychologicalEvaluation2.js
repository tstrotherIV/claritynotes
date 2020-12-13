import React, { useState, useEffect, useRef } from "react"


const MAX_MESSAGE_LENGTH = 200

export default function NewPost({ takeFocus, date, showAvatar }) {
  const storageKey = makeNewPostKey(date)
  const [message, setMessage] = useState(getLocalStorageValue(storageKey) || "")
  const messageTooLong = message.length > MAX_MESSAGE_LENGTH

  function handleMessageChange(event) {
    setMessage(event.target.value)
  }

  // Save the message for this date as its value changes.
  useEffect(() => {
    setLocalStorage(storageKey, message)
  }, [storageKey, message])

  const messageRef = useRef()

  // Automatically focus the <textarea> if it should take focus.
  useEffect(() => {
    if (takeFocus) messageRef.current.focus()
  }, [takeFocus, message])

  return (
    <div className={"NewPost" + (messageTooLong ? " NewPost_error" : "")}>
      <form className="NewPost_form">
        <textarea
          ref={messageRef}
          className="NewPost_input"
          placeholder="Tell us about your workout!"
          value={message}
          onChange={handleMessageChange}
        />
          <div className="NewPost_char_count">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </div>
          <div>
            <button type="submit" className="icon_button cta">
              <span>Post</span>
            </button>
          </div>
      </form>
        </div>
  )
}

function makeNewPostKey(date) {
  return `newPost:${date}`
}

function getLocalStorageValue(key) {
  const val = localStorage.getItem(key)
  if (!val) return null
  try {
    return JSON.parse(val)
  } catch (e) {
    return null
  }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}