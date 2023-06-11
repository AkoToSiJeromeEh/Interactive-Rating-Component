import React from "react";
import "../Css/General.css";
import "../Css/Main.css";
import GreetComponents from "./Greet";
function RatingComp() {

  const [rating, selectedRating] = React.useState(null);
  const [showThanks, setThanks] = React.useState(false);
  
  function RatingValue(value) {
    selectedRating(value);
  }
  function HandleClicks() {

    if (rating !== null) {
      setThanks(true);
    }
    else{
      setThanks(false);
    }

  }
  return (
    <div className="animation">
      <section
        className={showThanks ? "Rating-Section hide" : "Rating-Section"}
      >
        <div className="Rating-Wrapper">
          <div className="img-container">
            <img src="icon-star.svg" alt="" />
          </div>
          <div className="text-cont">
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="button-cont">
            {/* Alternative way to create a 5 Buttons */}
            {/* {[1, 2, 3, 4, 5].map((btnValue) => (
              <button key={btnValue} onClick={() => RatingValue(btnValue)}>
                {btnValue}
              </button>
            ))} */}
            <button onClick={() => RatingValue(1)}>1</button>
            <button onClick={() => RatingValue(2)}>2</button>
            <button onClick={() => RatingValue(3)}>3</button>
            <button onClick={() => RatingValue(4)}>4</button>
            <button onClick={() => RatingValue(5)}>5</button>
          </div>
          <div className="btn-submit-cont">
            <button onClick={HandleClicks}>Submit</button>
          </div>
        </div>
      </section>
      {showThanks && <GreetComponents rating={rating} />}
    </div>
  );
}

export default RatingComp;
