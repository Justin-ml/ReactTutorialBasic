import React from 'react'
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <nav className='nav'>
        <img src={logo} alt="Reactlogo" className='logo'/>
        <h3 className='nav-logotext'>ReactFacts</h3>
        <h4 className='nav-rightheader'>React Course - Project 1</h4>
    </nav>
  )
}
