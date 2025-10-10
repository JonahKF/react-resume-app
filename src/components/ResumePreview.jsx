// import { useState } from "react";
import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
  return (
    <div className="a4-container">
      <h2>
        {personData.generalInfo.firstName} {personData.generalInfo.lastName}
      </h2>
    </div>
  );
}

export default ResumePreview;
