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
    expInfo: [
      {
        id: crypto.randomUUID(),
        company: "Company Inc.",
        position: "Junior Developer",
        startDate: "2018-10-01",
        endDate: "Present",
        description:
          "Developed and maintained web applications using React and Node.js.",
      },
      {
        id: crypto.randomUUID(),
        company: "Test Inc.",
        position: "Junior Developer",
        startDate: "2014-10-01",
        endDate: "2018-09-30",
        description:
          "Developed and maintained web applications using React and Node.js.",
      },
    ],
    eduInfo: [
      {
        id: crypto.randomUUID(),
        university: "State University",
        degree: "B.S. in Computer Science",
        startDate: "2014-09-01",
        endDate: "2018-09-30",
      },
    ],
  });

  const handleGeneralInfoSave = (updatedGeneralInfo) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      generalInfo: updatedGeneralInfo,
    }));
  };

  const handleExpInfoSave = (updatedExpInfo) => {
    setPerson((prevPerson) => {
      const newExpInfo = prevPerson.expInfo.map((experience) => {
        if (experience.id === updatedExpInfo.id) {
          return updatedExpInfo;
        }
        return experience;
      });

      return {
        ...prevPerson,
        expInfo: newExpInfo,
      };
    });
  };

  const handleEduInfoSave = (updatedEduInfo) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      eduInfo: updatedEduInfo,
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
          <div className="form-card">
            <h2>General Information</h2>
            <GeneralInfo
              personData={person.generalInfo}
              onSave={handleGeneralInfoSave}
            />
          </div>

          <div className="form-card">
            <h2>Work Experience</h2>
            {person.expInfo.map((experience) => (
              <ExpInfo
                key={experience.id}
                experienceData={experience}
                onSave={handleExpInfoSave}
              />
            ))}
            {/* Add new exp btn */}
          </div>

          <div className="form-card">
            <h2>Education</h2>
            {person.eduInfo.map((education) => (
              <EduInfo
                key={education.id}
                educationData={education}
                onSave={handleEduInfoSave}
              />
            ))}
            {/* Add new edu btn */}
          </div>
        </section>

        <aside className="preview-panel">
          <ResumePreview personData={person} />
        </aside>
      </main>
    </>
  );
}

export default App;
