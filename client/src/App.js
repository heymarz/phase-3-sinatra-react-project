import {useState} from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from './components/Home'
import TravelForm from './components/TravelForm';
import ErrorPage from './components/ErrorPage';
 
function App() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("")

  function handleAddTravelPlace(newPlace) {
    setLocations([...locations, newPlace]);
  }
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home 
          locations= {locations}
          setLocations={setLocations}
          search={search}
          setSearch={setSearch}
          />} />
          <Route path="/locations/new" element={<TravelForm onNewTravelPlace ={handleAddTravelPlace}
          />} />
          <Route  path="*" element={ <ErrorPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
