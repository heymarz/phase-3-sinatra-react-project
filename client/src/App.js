import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from './components/Home'
import AddNew from './components/AddNew';
import LocationCard from './components/LocationCard'
import ErrorPage from './components/ErrorPage';
 
function App() {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/locations')
    .then(resp => resp.json())
    .then (data => setStates(data))
  },[])


  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home 
            states={states}/>} 
          />
          <Route path=":id" element= {<LocationCard      
            states={states} />} 
          />
          <Route path="/locations/new" element={<AddNew 
            setStates={setStates} />} 
          />
          <Route  path="*" element={ <ErrorPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
