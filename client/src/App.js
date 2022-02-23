import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from './components/Home'
import TravelForm from './components/TravelForm';
import Search from './components/Search'
import ErrorPage from './components/ErrorPage';
 
function App() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/locations')
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

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home locations= {locations} handleDelete={handleDelete} />} 
          />
          <Route path=":id" element= {<Search setSearch={setSearch} onSearch={onSearch} search={search} locations={locations}/>} 
          />
          <Route path="/locations/new" element={<TravelForm 
            setLocations={setLocations} />} 
          />
          <Route  path="*" element={ <ErrorPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
