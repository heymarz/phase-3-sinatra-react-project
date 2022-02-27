import {useState} from 'react'

function Search ({ onSearch }) {
  const [search, setSearch] = useState("")

  function handleSeach(e){
    e.preventDefault();
    onSearch(search)
  }
  
  return (
    <div class="searchContainer">
    <form onSubmit={handleSeach}>
    <label htmlFor='search'>Search:</label>
    <input
      type="text"
      id="search"
      placeholder='Search by City or State'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
    />
    <button type="submit">submit</button>
    </form>
   
    </div>
  )
}

export default Search