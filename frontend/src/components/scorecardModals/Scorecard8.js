import React from "react";
import scorecard8 from "../scorecardModals/scorecard2020.jpg";
import "./Scorecard.css";


const Scorecard8 = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard8} alt="2020 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal8(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard8;