import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">My travel Wish list</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/locations/new">Add to Travel Wish List</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;