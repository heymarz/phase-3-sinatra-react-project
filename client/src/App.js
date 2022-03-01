import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from './components/Home'
import TravelForm from './components/TravelForm';
import ErrorPage from './components/ErrorPage';
import LocationCard from './components/LocationCard';
import { baseUrl } from './Global';
 
function App() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(baseUrl + '/locations')
  .then(resp => resp.json())
  .then (data => setLocations(data))
  }
  ,[])
  
  function handleDelete(id){
    const newLocationsArray = locations.filter((location)=>location.id !== id);
    setLocations(newLocationsArray)
  }

  const filterLocations = locations.filter((loc)=>{
    return loc.state.toLowerCase().includes(search.toLowerCase())
  })

  const renderLocations = filterLocations.map((location)=>{
    return <LocationCard 
      key={location.id}
      location={location}
      handleDelete={handleDelete}
    />
  })

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home 
          search={search}
          setSearch={setSearch}
          renderLocations={renderLocations}
          />} />
          <Route path="/locations/new" element={<TravelForm />} />
          <Route  path="*" element={ <ErrorPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
