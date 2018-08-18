import React from 'react'
// import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
      </div>
      <div className='navbarmenu'>
        <button className='button'>home</button>
        <button className='button'>about</button>
        <button className='button'>what is an ally?</button>
        <button className='button'>ally platform</button>
        <button className='button'>resources</button>
        <button className='button'>news</button>
      </div>
    </nav>
  )
}

export default Nav
