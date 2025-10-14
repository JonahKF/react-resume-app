import { useState } from "react";
import "../styles/ExpInfo.css";

function ExpInfo({ experienceData, onSave }) {
  return (
    <div className="inner-container">
      <div className="inner-header">
        <h3>{experienceData.company}</h3>
        <button>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default ExpInfo;
