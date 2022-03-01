function Search ({ search, setSearch }) {

  function handleSeach(e){
    e.preventDefault();
    setSearch(search)
  }

  return (
    <div className="searchContainer">
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