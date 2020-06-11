import React from 'react'

export default function Post(props) {
  return (
    <div className="card">
      {props.post.text}
    </div>
  )
}
