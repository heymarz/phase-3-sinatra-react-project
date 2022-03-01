import React from 'react'
import { baseUrl } from '../Global';
import './styling.css';

function LocationCard({ location, handleDelete }) {
  
  const {state, id, attractions, restaurants} = location;
  const displayAttractions = attractions.map((attr)=><li key= {attr.id} >{attr.attractionName}</li>);
  const displayRestaurants = restaurants.map((restaurant)=><li key= {restaurant.id} >{restaurant.restaurantName}</li>);
  
  function handleDeleteClick(){
    fetch(baseUrl + `/locations/${id}`,{
      method: "DELETE"
    });
    handleDelete(id)
  }
  
  return (
    <div className="card">
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