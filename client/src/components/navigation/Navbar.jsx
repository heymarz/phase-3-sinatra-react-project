import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">My travel Wish list</Link></li>
          <li><Link to="/locations">States to visit</Link></li>
          <li><Link to="/attractions">Attractions by state</Link></li>
          <li><Link to="/restaurants">Restaurants by state</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;