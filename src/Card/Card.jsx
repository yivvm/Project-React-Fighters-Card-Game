import './card.css'
import { useState } from 'react'

export default function Card(props) {
    const [clicked, setClicked] = useState("")

    function handleClick(e) {
        console.log(e.target)
        setClicked("clicked")
    }

  return (
    <div 
        className={`Card ${clicked}`} 
        onClick={() => {
            props.handleSelected(props.id);
        }}
    >
      <h1>{props.name}</h1>
      <h3>Attack: {props.attack}</h3>
      <h3>Health: {props.health}</h3>
    </div>
  )
}
