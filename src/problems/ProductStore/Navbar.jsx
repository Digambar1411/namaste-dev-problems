import React from 'react';
import './style.css';
import { NavLink as Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
    </div>
  )
}

export default Navbar