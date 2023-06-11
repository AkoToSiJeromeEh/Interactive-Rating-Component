
import '../Css/General.css'
 import PropTypes from 'prop-types';
import '../Css/Main.css'
function Greet(props) {
  return (
    <div className="animation">
    <section className='greet-component'>
    <div className="greet-Wrapper">
        <div className="greet-img-container">
        <img src="illustration-thank-you.svg" alt="" />
        </div>
        <div className="greet-text-cont">
          <h2>You selected {props.rating} out of 5</h2>
          <h1>Thank You!</h1>
        </div>
        <div className="greet-p-cont">
            <p>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Greet
Greet.propTypes = {
    rating: PropTypes.string.isRequired,
};