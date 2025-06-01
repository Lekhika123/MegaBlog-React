import React from 'react'
import logo from '../assets/logo.png'; 

 
function Logo({width = '50px'}) {
  return (
    <div>
      <img className={` rounded-4xl max-h-10 ${width}`} src={logo} alt="LOGO" />
    </div>
  )
}

export default Logo