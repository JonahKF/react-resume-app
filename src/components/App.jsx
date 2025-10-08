import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
  const [person, setPerson] = useState({
    generalInfo: "placeholder",
    expInfo: "placeholder",
    eduInfo: "placeholder",
  });

  const saveData = () => {};

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
          <GeneralInfo personData={person} onSave={saveData} />
          <ExpInfo personData={person} onSave={saveData} />
          <EduInfo personData={person} onSave={saveData} />
        </section>

        <aside className="preview-panel">
          <ResumePreview personData={person} />
        </aside>
      </main>
    </>
  );
}

export default App;
