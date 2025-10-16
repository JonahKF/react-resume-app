import { useState } from "react";
import "../styles/ExpInfo.css";

function ExpInfo({ experienceData, onSave }) {
  const [company, setCompany] = useState(experienceData.company);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = {
      company,
    };

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <form className="info-form" onSubmit={onSubmit}>
      <div className="inner-header">
        <h3>{experienceData.company}</h3>
        <button>
          <i class="fa-solid fa-trash"></i>
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
    </form>
  );
}

export default ExpInfo;
