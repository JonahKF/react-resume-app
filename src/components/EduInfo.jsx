import { useState } from "react";
import "../styles/EduInfo.css";

function EduInfo({ educationData, onSave, index }) {
  const [university, setUniversity] = useState(educationData.university);
  const [degree, setDegree] = useState(educationData.degree);
  const [startDate, setStartDate] = useState(educationData.startDate);
  const [endDate, setEndDate] = useState(educationData.endDate);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = {
      id: educationData.id,
      university,
      degree,
      startDate,
      endDate,
    };

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <>
      {index != 0 ? <hr className="form-break" /> : null}

      <form className="info-form" onSubmit={onSubmit}>
        <div className="inner-header">
          <h3>{educationData.university}</h3>
          <button type="button">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="form-row">
          <label htmlFor="university">University</label>
          <input
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="form-btn" type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
          <span>Save</span>
        </button>
      </form>
    </>
  );
}

export default EduInfo;
