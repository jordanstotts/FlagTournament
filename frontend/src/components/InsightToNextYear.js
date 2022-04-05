import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/InsightToNextYear.css";
import SiteNavBar from "./SiteNavBar";
import PredictionForm from "./PredictionForm";

const InsightToNextYear = () => {
  return (
    <div className="predictionPage">
      <SiteNavBar />
      <h1 className="predictionsHeader">Insight To Next Year</h1>
      <div className="predictionsLayout">
        <div className="ourPredictions">
          <p id="predictionName">Austin's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Connor's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Derrick's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Grant's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Jordan's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Ryan's prediction:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
      </div>
      {/* <PredictionForm /> */}
      {/* <h3>Let us know where you think everyone will place!</h3>
      <form onSubmit={handleSubmit} className="predictionForm">
        <div className="formInputGorup">
          <div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="formInput"
            />
            <select value={boot} onChange={(e) => setBoot(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <select value={second} onChange={(e) => setSecond(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <select value={third} onChange={(e) => setThird(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <select value={fourth} onChange={(e) => setFourth(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <select value={fifth} onChange={(e) => setFifth(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <select value={flag} onChange={(e) => setFlag(e.target.value)}>
              <option value="empty"></option>
              <option value="austin">Austin</option>
              <option value="connor">Connor</option>
              <option value="derrick">Derrick</option>
              <option value="grant">Grant</option>
              <option value="jordan">Jordan</option>
              <option value="ryan">Ryan</option>
            </select>
            <button>Submit Prediction</button>
          </div>
        </div>
      </form>
      <br />
      <div>This is where predictions go</div> */}
    </div>
  );
};

export default InsightToNextYear;

// create  function that pushes input of form as object into an array that is being displayed in the return/html
