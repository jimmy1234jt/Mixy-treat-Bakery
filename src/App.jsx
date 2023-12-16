import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Home';
import Menu from './Menu';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' exact Component={Menu}/>
        </Routes>
        <Footer/>
      </Router>
      
      
    </>
  )
}

export default App
