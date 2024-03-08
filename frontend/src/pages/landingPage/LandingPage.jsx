import React from 'react'
import { Link } from 'react-router-dom'
import './landingpage.css'
const LandingPage = () => {
  return (
    <div className='landingpagecontainer'>
      <div className="landingpagebox">

      <p>
        Landing page
      </p>
      <Link to={`/data`}>
      <button className='enteringbutton'>enter</button>
      </Link>
      </div>
    </div>
  )
}

export default LandingPage
