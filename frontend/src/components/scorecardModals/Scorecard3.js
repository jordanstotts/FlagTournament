import React from "react";
import scorecard3 from "../scorecardModals/scorecard2015.jpg";
import "./Scorecard.css";


const Scorecard3 = ({closeModal3}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard3} alt="2015 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal3(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard3;