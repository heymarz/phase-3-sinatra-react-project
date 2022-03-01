import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, headers } from '../Global'

function TravelForm() {
const [state, setState] = useState("");
const [attraction, setAttraction] = useState("");
const [restaurant, setRestaurant] = useState("");
let navigate = useNavigate();


function handleSubmit(e){
  e.preventDefault();
  const formData = {
    state: state,
    attractionName: attraction,
    restaurantName: restaurant
  }
  fetch(baseUrl + '/locations',{
    method: "POST",
    headers: headers,
    body: JSON.stringify(formData),
  })
  .then(resp => resp.json())
  .then((travelPlace)=> {
    navigate('/')
    });
}
  

  return (
    <div>
      <h1 className="header">Add New Location to Travel Wish List</h1>
      <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="state">Name:
          <input type="text"
            placeholder='City, State'
            value={state}
            onChange={(e)=>setState(e.target.value)}
            required={true}
          />
        </label>
        <br />
        <label htmlFor="attractions">Attraction(s):
          <input type="text"
            placeholder='place 1, place 2 ...'
            value={attraction}
            onChange={(e)=>setAttraction(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="restaurants">Restaurant(s):
          <input type="text"
            placeholder='Restaurant 1, Restaurant 2 ...'
            value={restaurant}
            onChange = {(e)=>setRestaurant(e.target.value)}
          />
        </label>
        <br />
        <button type="sumbit">Submit</button>
      </form>
      </section>
    </div>
  )
}

export default TravelForm;