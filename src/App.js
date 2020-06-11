import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Hobbits from './components/Hobbits'
import HobbitPosts from './components/HobbitPosts';
import {Route} from 'react-router-dom';

function App() {

  const [hobbits, setHobbits] = useState([])

  useEffect(() => {
    axios.get('https://hobbits-posts.herokuapp.com/api/users')
    .then(res => {
      console.log(res.data)
      setHobbits(res.data)
    })
  }, [])
  return (
    <div className="App">
      <Route exact path="/">
          <Hobbits hobbits={hobbits}/>
      </Route>
      <Route path='/posts' component={HobbitPosts} />
      
    </div>
  );
}

export default App;
