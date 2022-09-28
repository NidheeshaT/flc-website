import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className='bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-300 duration-500'>
      {props.children}
    </button>
  )
}

export default Button