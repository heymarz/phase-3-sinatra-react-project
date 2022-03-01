import React from 'react';
import Search from './Search';

function Home({ renderLocations, search, setSearch}) {

  return (
    <div>
      <h1 className="header">
        My Travel Wish List
      </h1>
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <div>
        {renderLocations}
      </div>
    </div>
  )
}

export default Home