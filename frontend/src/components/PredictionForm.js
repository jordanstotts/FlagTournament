import React from "react";

const PredictionForm = () => {
  return (
    <div>
      <h3>Let us know where you think everyone will place!</h3>
      <form>
        <div>
          <label>Boot</label>
          <input type="text" required />
        </div>
        <div>
          <label>Second</label>
          <input type="text" required />
        </div>
        <div>
          <label>Third</label>
          <input type="text" required />
        </div>
        <div>
          <label>Fourth</label>
          <input type="text" required />
        </div>
        <div>
          <label>Fifth</label>
          <input type="text" required />
        </div>
        <div>
          <label>Flag</label>
          <input type="text" required />
        </div>
        <div>
          <input type="submit" value="Submit Prediction" />
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
