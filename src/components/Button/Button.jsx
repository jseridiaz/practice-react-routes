import React from 'react'

const Button = ({ text, funcion }) => {
  return <button onClick={funcion}>{text}</button>
}

export default Button
