import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div>
      <nav>
        <div>
          <Link to="/">My travel Wish list</Link>
          <br />
          <Link to="/locations/new">Add to Travel Wish List</Link>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;