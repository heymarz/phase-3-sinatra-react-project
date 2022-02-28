import React,{ useEffect, useRef } from 'react'
import LocationCard from './LocationCard'
import Search from './Search';
import { baseUrl } from '../Global'

function Home({ locations, setLocations, search, setSearch }) {
  const tempFunction = useRef();

  const fetchFunction = () =>{
  fetch(baseUrl + '/locations')
  .then(resp => resp.json())
  .then (data => setLocations(data))
  }
  tempFunction.current = fetchFunction 

  useEffect(() => {
    tempFunction.current()
  },[])

  function handleDelete(id){
    const newLocationsArray = locations.filter((location)=>location.id !== id);
    setLocations(newLocationsArray)
  }
  
  function locationsToRender(){

  const displayWishList = locations.map((locations)=> {
    return <LocationCard 
    key={locations.id}
    locations = {locations}
    handleDelete={handleDelete}
    />})
    
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
      <h1 className="header">
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