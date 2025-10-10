import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
  const [person, setPerson] = useState({
    generalInfo: {
      firstName: "Jane",
      lastName: "Doe",
      jobTitle: "Tech Lead",
      email: "example@email.com",
      phone: "123-456-7890",
      location: "White Plains, NY",
      summary:
        "Full Stack Developer with over 10 years experience in JavaScript, React, Vite, SQL and node.js.",
    },
    expInfo: "placeholder",
    eduInfo: "placeholder",
  });

  const handleGeneralInfoSave = (updatedGeneralInfo) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      generalInfo: updatedGeneralInfo,
    }));
  };

  return (
    <>
      <header>
        <div className="header-text">
          <h1>
            <i className="fa-regular fa-file"></i>
            Resume Builder
          </h1>
          <div className="intro-text">
            Resume tool built for The Odin Project
          </div>
        </div>

        <button className="light-mode-toggle">
          <i className="fa-solid fa-sun"></i>
        </button>
      </header>

      <main>
        <section className="form-panel">
          <GeneralInfo
            personData={person.generalInfo}
            onSave={handleGeneralInfoSave}
          />
          <ExpInfo personData={person.expInfo} />
          <EduInfo personData={person.eduInfo} />
        </section>

        <aside className="preview-panel">
          <ResumePreview personData={person} />
        </aside>
      </main>
    </>
  );
}

export default App;
