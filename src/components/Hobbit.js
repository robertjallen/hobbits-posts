import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

export default function Hobbit(props) {

  

  return (
    <Link to={{
      pathname: '/posts',
      state: {props}
    }}>

      <div className="card">
        name: {props.hobbit.name}
      </div>
    </Link>
    
  )
}
