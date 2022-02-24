import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from './components/Home'
import TravelForm from './components/TravelForm';
import ErrorPage from './components/ErrorPage';
 
function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/locations/new" element={<TravelForm />} />
          <Route  path="*" element={ <ErrorPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
