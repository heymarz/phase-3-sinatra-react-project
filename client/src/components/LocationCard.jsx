import React from 'react'

function LocationCard({ locations, handleDelete }) {
  const {state, id, attractions, restaurants} = locations

  const displayAttractions = attractions.map((attr)=><li key= {attr.id} >{attr.name}</li>)
  const displayRestaurants = restaurants.map((restaurant)=><li key= {restaurant.id} >{restaurant.name}</li>)
  
  function handleDeleteClick(){
    fetch(`http://localhost:9292/locations/${id}`,{
      method: "DELETE"
    });
    handleDelete(id)
  }
  return (
    <div>
      <h3>{state}</h3>
      <h4><em>Attractions:</em></h4>
      <ol>{displayAttractions}</ol>
      <h4><em>Restaurants:</em></h4>
      <ol>{displayRestaurants}</ol>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default LocationCard