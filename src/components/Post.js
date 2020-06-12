import React from 'react'

export default function Post(props) {

  
  return (
    <div className="card">
      <p>{props.post.text}</p>
      <button onClick={() => props.handleDelete(props.post.id)}>Delete</button>
    </div>
  )
}
