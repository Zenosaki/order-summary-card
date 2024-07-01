import './Sass/Index.scss'


export default function App() {

  return (
    <div className="container">
      <main>
        <div className="Main-Img"></div>
        <div className="Card-Content">
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className="plan-Selection">
            <div>
              <img src="" alt="icon" />
              <div className="icon-Text">
                <h5>Annual Plan</h5>
                <h5>$59.99/year</h5>
              </div>
            </div>
            <a href="#">Change</a>
          </div>
          <button className="proceed-btn">Proceed to Payment</button>
          <button className="cancel-btn">Cancel Order Change</button>
        </div>
      </main>
    </div>
  )
}
