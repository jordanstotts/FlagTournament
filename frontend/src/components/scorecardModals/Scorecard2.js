import React from "react";
import scorecard2 from "../scorecardModals/scorecard2014.jpg";
import "./Scorecard.css";

const Scorecard2 = ({closeModal2}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard2} alt="2014 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal2(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard2;