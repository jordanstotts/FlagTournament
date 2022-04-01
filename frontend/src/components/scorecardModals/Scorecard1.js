import React from "react";
import scorecard1 from "../scorecardModals/scorecard2013.jpg";
import "./Scorecard.css";

const Scorecard1 = ({closeModal1}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard1} alt="2013 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal1(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard1;
