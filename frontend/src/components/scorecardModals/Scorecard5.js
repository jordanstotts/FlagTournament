import React from "react";
import scorecard5 from "../scorecardModals/scorecard2017.jpg";
import "./Scorecard.css";


const Scorecard5 = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard5} alt="2015 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal5(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard5;