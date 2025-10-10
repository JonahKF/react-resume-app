import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo({ personData, onSave }) {
  const [firstName, setFirstName] = useState(personData.firstName);
  const [lastName, setLastName] = useState(personData.lastName);
  const [jobTitle, setJobTitle] = useState(personData.jobTitle);
  const [email, setEmail] = useState(personData.email);
  const [phone, setPhone] = useState(personData.phone);
  const [location, setLocation] = useState(personData.location);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = {
      firstName,
      lastName,
      jobTitle,
      email,
      phone,
      location,
    };

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <div className="form-card">
      <h2>General Information</h2>
      <form className="info-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="form-btn" type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
          <span>Save</span>
        </button>
      </form>
    </div>
  );
}

export default GeneralInfo;
