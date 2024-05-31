import React from 'react'
import "../index.scss";

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full bg-violet-500 text-white text-sm text-center font-bold p-3 '>
      © {new Date().getFullYear()}  All Rights Reserved.
    </div>
  )
}

export default Footer
