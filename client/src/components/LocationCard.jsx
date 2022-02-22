import React from 'react'

function LocationCard({ locations }) {
  const displayAttractions = locations.attractions.map((attr)=><li>{attr.name}</li>)
  return (
    <div>{locations.state}
    <ol>{displayAttractions}</ol></div>
  )
}

export default LocationCard