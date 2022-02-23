import React from 'react'
import LocationCard from './LocationCard'

function Home({ locations, handleDelete }) {
  const displayWishList = locations.map((locations)=> {
    return <LocationCard 
      key={locations.id}
      locations = {locations}
      handleDelete={handleDelete}
    />})

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