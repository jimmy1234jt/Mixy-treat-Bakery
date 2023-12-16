import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Link as Scroll } from "react-scroll"
import menu from "../assets/menu.svg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">
        <div className="left-side">
            <Link to="/" >
                <h1>Mixy Treats</h1>
            </Link>
        </div>
        <div className="right-side">
            <Scroll to="service" spy={true} smooth={true} offset={-70} duration={500} ><Link to="/">Service</Link></Scroll>
            <Link to="/menu" >Menu</Link>
            <Scroll to="contact" spy={true} smooth={true} offset={-70} duration={500} ><Link to="/">Contact Us</Link></Scroll>
        </div>
        <div className="menu">
          <button onClick={toggleNavbar} ><img src={menu} alt=""/></button>
          <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <Scroll to="service" spy={true} smooth={true} offset={-70} duration={500} onClick={closeNavbar} ><Link to="/">Service</Link></Scroll>
            <Link to="/menu" onClick={closeNavbar} >Menu</Link>
            <Scroll to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeNavbar} ><Link to="/">Contact Us</Link></Scroll>
          </div>
        </div>
    </div>
  )
}

export default Navbar