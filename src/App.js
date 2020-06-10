import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Hobbits from './components/Hobbits'

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
      <Hobbits hobbits={hobbits}/>
    </div>
  );
}

export default App;
