import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <>
    <div className="navbarcontainer">
      <div className="logodiv">
        <p className='navbarlogo'>logo</p>
      </div>
      <div className="logodiv">
      <Link to="/">
        <p className='navbarlogo'>Home</p>
        </Link>
      </div>
      <div className="logoutbuttondiv">
        <Link to="/">
        <button className='logoutbutton'>logout</button>
        </Link>
      </div>
    </div>
  </>
  )
}

export default NavbarComponent
