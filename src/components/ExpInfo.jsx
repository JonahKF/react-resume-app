import { useState } from "react";
import "../styles/ExpInfo.css";

function ExpInfo({ experienceData, onSave, index }) {
  const [company, setCompany] = useState(experienceData.company);
  const [position, setPosition] = useState(experienceData.position);
  const [startDate, setStartDate] = useState(experienceData.startDate);
  const [stillWorking, setStillWorking] = useState(experienceData.stillWorking);
  const [endDate, setEndDate] = useState(experienceData.endDate);
  const [description, setDescription] = useState(experienceData.description);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = {
      id: experienceData.id,
      company,
      position,
      startDate,
      stillWorking,
      endDate,
      description,
    };

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <>
      {index != 0 ? <hr className="form-break" /> : null}

      <form className="info-form" onSubmit={onSubmit}>
        <div className="inner-header">
          <h3>{experienceData.company}</h3>
          <button type="button">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="form-row">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position</label>
          <input
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
          <label htmlFor="stillWorking">Current Employer</label>
          <input
            id="stillWorking"
            type="checkbox"
            checked={stillWorking}
            onChange={(e) => setStillWorking(e.target.checked)}
          />
        </div>
        {!stillWorking ? (
          <div className="form-row">
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        ) : null}
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default ExpInfo;
