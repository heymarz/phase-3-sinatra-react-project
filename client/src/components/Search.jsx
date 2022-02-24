import React from 'react'

function Search ({ onSearch, search }) {

  function handleSearch(e){
   e.preventDefault();
   onSearch(e.target.value)
  }
  
  return (
    <div>
    <h1>Search</h1>
    <form onSubmit={handleSearch}>
    <label htmlFor='search'>Search:</label>
    <input
      type="text"
      id="search"
      placeholder='Search by City or State'
      value={search}
      onChange={(e)=>onSearch(e.target.value)}
    />
    <button>submit</button>
    </form>
   
    </div>
  )
}

export default Search