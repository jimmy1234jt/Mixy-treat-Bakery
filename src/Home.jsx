import CardList from './Components/CardList'
import redline from './assets/redline.svg'
import twitter from "./assets/twitter.svg"
import gmail from "./assets/gmail.svg"
import instagram from "./assets/instagram.svg"
import snapchat from "./assets/snapchat.svg"
import { Element } from "react-scroll"



function Home() {
    const selectedCardIds = [1,2,3,4,5];
  return (
    <>
        <div className ="home" >
        <div className="intro">
          <div className="intro-img"></div>
          <div className="intro-text">
            <div className='intro-header'>
              <h1>Welcome</h1>
              <h1><span>To</span></h1>
              <h1>Mixy Treats</h1>
            </div>
            <div className='time-wrapper'>
              <h4>We are opened from :</h4>
              <div className='time-content'>
                <div className='time'>
                  <p>Monday - Thursday</p>
                  <p>8am - 5pm</p>
                </div>
                <div className='time'>
                  <p>Saturday</p>
                  <p>11am - 4pm</p>
                </div>
              </div>
            </div>
            <div className='intro-btn'>
              <button>Book Now !!</button>
              <button>Order Now !!</button>
            </div>
          </div>
        </div>
        <Element name='service'>
          <div id='services' className="services">
            <div className="service-wrapper" >
              <div className='service-header'>
                <h2>Our services</h2>
                <img className='redline' src={redline} alt=''/>
              </div>
              <div className ="card-container">
                <CardList selectedCardIds={selectedCardIds} />
              </div>
            </div>
          </div>
        </Element>
        <Element name='contact'>
          <div id='contact' className='contact-container'>
            <div className='contact'> 
              <div className='contact-header'>
                <h2>Contact Us</h2>
                <img className='redline' src={redline} alt=''/>
              </div>
              <div className='contact-wrapper'>
                <div className='social-wrapper'>
                  <h3>Social Media</h3>
                  <div className='social'>
                    <div className='account'>
                      <img src={twitter} />
                      <a href="#">@mixy_treats</a>
                    </div>
                    <div className='account'>
                      <img src={gmail} />
                      <a href="#">mixytreats@gmail.com</a>
                    </div>
                    <div className='account'>
                      <img src={instagram} />
                      <a href="#">@mixy_treats</a>
                    </div>
                    <div className='account'>
                      <img src={snapchat} />
                      <a href="#">@mixy_treats</a>
                    </div>
                  </div>
                </div>
                <div className='contact-content'>
                  <h3>Send a message</h3>
                  <div className='form'>
                    <div className='form-input'>
                      <label htmlFor='name'>Name</label>
                      <input type='text' name='name' id='name'  required/>
                    </div>
                    <div className='form-input'>
                      <label htmlFor='name'>Email Address</label>
                      <input type='text' name='email' id='email'  required/>
                    </div>
                    <div className='form-input'>
                      <label htmlFor='name'>Message</label>
                      <textarea />
                    </div>
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </>
  )
}

export default Home