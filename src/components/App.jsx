import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import SkillInfo from "./SkillInfo.jsx";
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
        position: "Full Stack Developer",
        startDate: "2018-10-01",
        stillWorking: true,
        endDate: null,
        description:
          "Developed and maintained web applications using React and Node.js.",
      },
      {
        id: crypto.randomUUID(),
        company: "Test Inc.",
        position: "Junior Developer",
        startDate: "2014-10-01",
        stillWorking: false,
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
        startDate: "2010-09-01",
        endDate: "2014-09-30",
        description: "Graduated with Honors",
      },
    ],

    skills: [
      { id: crypto.randomUUID(), name: "JavaScript" },
      { id: crypto.randomUUID(), name: "React" },
      { id: crypto.randomUUID(), name: "Vite" },
      { id: crypto.randomUUID(), name: "SQL" },
      { id: crypto.randomUUID(), name: "node.js" },
    ],
  });

  const saveGeneralInfo = (updatedGeneralInfo) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      generalInfo: updatedGeneralInfo,
    }));
  };

  const saveExperience = (updatedExpInfo) => {
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

  const saveEducation = (updatedEduInfo) => {
    setPerson((prevPerson) => {
      const newEduInfo = prevPerson.eduInfo.map((education) => {
        if (education.id === updatedEduInfo.id) {
          return updatedEduInfo;
        }
        return education;
      });

      return {
        ...prevPerson,
        eduInfo: newEduInfo,
      };
    });
  };

  const saveSkill = (updatedSkillInfo) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      skills: prevPerson.skills.map((skill) =>
        skill.id === updatedSkillInfo.id ? updatedSkillInfo : skill,
      ),
    }));
  };

  const addNewExperience = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      expInfo: [
        ...prevPerson.expInfo,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          startDate: "",
          stillWorking: false,
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const addNewEducation = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      eduInfo: [
        ...prevPerson.eduInfo,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          startDate: "",
          stillWorking: false,
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const addNewSkill = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      skills: [...prevPerson.skills, { id: crypto.randomUUID(), name: "" }],
    }));
  };

  const removeExperience = (id) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      expInfo: prevPerson.expInfo.filter((experience) => experience.id !== id),
    }));
  };

  const removeEducation = (id) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      eduInfo: prevPerson.eduInfo.filter((education) => education.id !== id),
    }));
  };

  const removeSkill = (id) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      skills: prevPerson.skills.filter((skill) => skill.id !== id),
    }));
  };

  return (
    <>
      <div id="stripe-container">
        <div id="stripe-pattern"></div>
      </div>

      <header>
        <div className="header-text">
          <h1>
            <i className="fa-regular fa-file"></i>
            Resume Builder
          </h1>
          <div className="intro-text">
            built for{" "}
            <a href="https://www.theodinproject.com">
              The Odin Project <i class="fa-solid fa-link"></i>
            </a>
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
              onSave={saveGeneralInfo}
            />
          </div>

          <div className="form-card">
            <h2>Work Experience</h2>
            {person.expInfo.map((experience, index) => (
              <ExpInfo
                key={experience.id}
                experienceData={experience}
                onSave={saveExperience}
                onRemove={removeExperience}
                index={index}
              />
            ))}

            <button
              className="form-btn add-btn"
              type="button"
              onClick={addNewExperience}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="form-card">
            <h2>Education</h2>
            {person.eduInfo.map((education, index) => (
              <EduInfo
                key={education.id}
                educationData={education}
                onSave={saveEducation}
                onRemove={removeEducation}
                index={index}
              />
            ))}

            <button
              className="form-btn add-btn"
              type="button"
              onClick={addNewEducation}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="form-card">
            <h2>Skills</h2>
            {person.skills.map((skill, index) => (
              <SkillInfo
                key={skill.id}
                skillData={skill}
                onSave={saveSkill}
                onRemove={removeSkill}
                index={index}
              />
            ))}

            <button
              className="form-btn add-btn"
              type="button"
              onClick={addNewSkill}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
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
