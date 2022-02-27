import React,{ useEffect } from 'react'
import LocationCard from './LocationCard'
import Search from './Search';
import { baseUrl } from '../Global'

function Home({ locations, setLocations, search, setSearch }) {

  useEffect(() => {
    fetch(baseUrl + '/locations')
    .then(resp => resp.json())
    .then (data => setLocations(data))
  },[])

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
          return displayWishList.filter((location)=>{
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
        onSearch = {setSearch}
      />
      <div>
       {locationsToRender()}
      </div>
    </div>
  )
}

export default Home