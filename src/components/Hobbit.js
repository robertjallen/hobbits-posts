import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Hobbit(props) {

  const [posts, setPosts] = useState([])
  
  // useEffect(() => {
  //   axios.get(`https://hobbits-posts.herokuapp.com/api/users/${props.hobbit.id}`)
  //   .then(res => {
  //     console.log(res.data)
  //     setPosts(res.data)
  //   })
  // }, [])

  return (
    <div className="card">
      name: {props.hobbit.name}
    </div>
  )
}
