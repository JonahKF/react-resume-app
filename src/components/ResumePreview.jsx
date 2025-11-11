// import { useState } from "react";
import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
  return (
    <div className="a4-container">
      <div className="resume-header">
        <h2>
          {personData.generalInfo.firstName} {personData.generalInfo.lastName}
        </h2>
        <div className="job-title">{personData.generalInfo.jobTitle}</div>
        <div className="contact-info">
          {personData.generalInfo.phone}・{personData.generalInfo.email}
          {"・"}
          {personData.generalInfo.location}
        </div>
      </div>

      <div className="resume-body">
        <section className="summary">
          <h3>Summary</h3>
          <div className="summary-text">{personData.generalInfo.summary}</div>
        </section>

        <section className="skills">
          <h3>Skills</h3>
          {/* Add skills */}
        </section>

        <section className="experience">
          <h3>Experience</h3>
        </section>

        <section className="education">
          <h3>Education</h3>
        </section>
      </div>
    </div>
  );
}

export default ResumePreview;
