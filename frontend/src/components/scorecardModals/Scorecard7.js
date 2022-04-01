import React from "react";
import scorecard7 from "../scorecardModals/scorecard2019.jpg";
import "./Scorecard.css";


const Scorecard7 = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard7} alt="2019 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal7(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard7;