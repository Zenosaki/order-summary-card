import './Sass/Index.scss'
import icon from './assets/images/icon-music.svg'

export default function App() {

  return (
    <div className="container">
      <main>
        <div className="Main-Img"></div>
        <div className="Card-Content">
          <h2>Order Summary</h2>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device  anywhere you like!</p>
          <div className="plan-Selection">
            <div className='P1'>
              <img src={icon} alt="icon" />
              <div className="icon-Text">
                <h4>Annual Plan</h4>
                <h4 className='Price'>$59.99/year</h4>
              </div>
            </div>
            <a href="#">Change</a>
          </div>
          <button className="proceed-btn">Proceed to Payment</button>
          <button className="cancel-btn">Cancel Order</button>
        </div>
      </main>
    </div>
  )
}
