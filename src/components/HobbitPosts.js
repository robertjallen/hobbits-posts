import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Post from './Post'


export default function HobbitPosts(props) {
  console.log("posts", props.history.location.state.props.hobbit.id)
  
  const [posts, setPosts] = useState([])
  const [text, setText] = useState({})
  
  useEffect(() => {
    axios.get(`https://hobbits-posts.herokuapp.com/api/users/${props.history.location.state.props.hobbit.id}/posts`)
    .then(res => {
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleChange = event => {
    setText({
      ...text,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!text) {
      alert("Please fill out both fields!");
    } else {
      // console.log(text)
        axios.post(`https://hobbits-posts.herokuapp.com/api/users/${props.history.location.state.props.hobbit.id}/posts`, text)
        .then(res => {
          // console.log(res.data)
          setPosts([...posts, res.data])
        })
        .catch(err => {
          console.log(err)
        })
      // resetForm();
    }
  };

  console.log(posts)
  return (
    <div>
      {posts.map(post => {
        return <Post post={post}/>
      })}

      <form onSubmit={handleSubmit}>
        <input name="text" type="text" placeholder="new post" onChange={handleChange}/>
        <button>submit</button>
      </form>
    </div>
  )
}
