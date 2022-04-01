import React from "react";
import scorecard9 from "../scorecardModals/scorecard2021.jpg";
import "./Scorecard.css";


const Scorecard9 = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard9} alt="2021 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal9(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard9;