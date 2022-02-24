import React,{ useEffect, useState } from 'react'
import LocationCard from './LocationCard'
import Search from './Search';
import { baseUrl } from '../Global'

function Home() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(baseUrl + '/locations')
    .then(resp => resp.json())
    .then (data => setLocations(data))
  },[])

  function onSearch(newSearch){
    setSearch(newSearch)
  }

  function handleDelete(id){
    const newLocationsArray = locations.filter((location)=>location.id !== id);
    setLocations(newLocationsArray)
  }
  
  const displayWishList = locations.map((locations)=> {
    return <LocationCard 
    key={locations.id}
    locations = {locations}
    handleDelete={handleDelete}
    />})
    
      const locationsToRender = () => {
        if(!search){
          return displayWishList
        } else {
          return locations.filter((location)=>{
            return location.state.toLowerCase().includes(search.toLowerCase())
        }) 
      }
    }

  return (
    <div>
      <h1>
        My Travel Wish List
      </h1>
      <Search 
      onSearch = {onSearch} 
      search={search}
      />
      <div>
       {locationsToRender()}
      </div>
    </div>
  )
}

export default Home