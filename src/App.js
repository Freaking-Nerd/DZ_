import React, { useState } from 'react'
import './index.css'

const ColorToggleSquare = () => {
  const [isRed, setRed] = useState(true)

  const changeColor = () => {
    setRed(!isRed);
  }

  return (
    <div>
      <div
        className={`square ${isRed ? 'square-red' : 'square-blue'}`}
        onClick={changeColor}
      ></div>
      <div
        className={`square ${isRed ? 'square-blue' : 'square-red'}`}
        onClick={changeColor}
      ></div>
    </div>
  )
}

export default ColorToggleSquare
