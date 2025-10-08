// import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
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
          <GeneralInfo />
          <ExpInfo />
          <EduInfo />
        </section>

        <aside className="preview-panel">
          <ResumePreview />
        </aside>
      </main>
    </>
  );
}

export default App;
