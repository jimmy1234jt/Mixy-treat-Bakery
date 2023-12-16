import  './Footer.css'
import { Link } from "react-router-dom"
import { Link as Scroll } from "react-scroll"
import footerimg from "../assets/Mixy Treats.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import snapchat from "../assets/snapchat.svg"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img src={footerimg} alt="Footer Image"/>
        </div>
        <div className='footer-text'>
            <div className='follow'>
                <h4>Follow Us</h4>
                <div className='footer-icons'>
                    <img src={twitter} alt=''/>
                    <img src={instagram} alt=''/>
                    <img src={snapchat} alt=''/>
                </div>
                <div className='newsletter'>
                    <h5>Sign up for our newsletter!</h5>
                    <div className='input-news'>
                        <input type='text' name='email' />
                        <button>✓</button>
                    </div>
                </div>
            </div>
            <div className='links'>
            <h4>Quick Links</h4>
            <Scroll to="service" spy={true} smooth={true} offset={-70} duration={500} ><Link to="/">Service</Link></Scroll>
            <Link to="/menu" >Menu</Link>
            <Scroll to="contact" spy={true} smooth={true} offset={-70} duration={500} ><Link to="/">Contact Us</Link></Scroll>
            </div>
        </div>
    </div>
  )
}

export default Footer