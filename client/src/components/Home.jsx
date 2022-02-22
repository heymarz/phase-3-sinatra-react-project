import React from 'react'
import LocationCard from './LocationCard'

function Home({locations}) {
  const displayWishList = locations
  // .filter((locations)=>
    // locations.toLowerCase().includes(search.toLowerCase())
    // )
  .map((locations)=> <LocationCard 
      key={locations.id}
      locations = {locations}
      />)

  return (
    <div>
      <h1>
        My Travel Wish List
      </h1>
      <div>
       {displayWishList}
      </div>
    </div>
  )
}

export default Home