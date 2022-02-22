import React from 'react'

function TravelForm({ setLocations }) {
  return (
    <div>
      <h1>Add New Location to Travel Wish List</h1>
      <section>
      <form>
        <label htmlFor="state">Name:
          <input type="text"
            placeholder='City, State'
          />
        </label>
        <br />
        <label htmlFor="attractions">Attraction(s):
          <input type="text"
            placeholder='place 1, place 2 ...'
          />
        </label>
        <br />
        <label htmlFor="restaurants">Restaurant(s):
          <input type="text"
            placeholder='Restaurant 1, Restaurant 2 ...'
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      </section>
    </div>
  )
}

export default TravelForm;