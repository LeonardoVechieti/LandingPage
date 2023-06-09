import React from 'react'

const Button = (props) => {
  return (
    <button className='secondary-button' onClick={props.onChange} >{props.name}</button>
  )
}

export default Button