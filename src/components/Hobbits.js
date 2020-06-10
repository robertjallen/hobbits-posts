import React from 'react'
import Hobbit from './Hobbit'

export default function Hobbits(props) {
  return (
    <div>
      {props.hobbits.map(hobbit => {
        return <Hobbit hobbit={hobbit}/>
      })}
    </div>
  )
}
