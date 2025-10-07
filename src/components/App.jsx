// import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";

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
        <div className="left-pane">
          <GeneralInfo />
          {/* Components for General Info, Edu Experience, Practical Experience */}
        </div>
        <div className="right-pane">{/* Component for Resume Preview */}</div>
      </main>
    </>
  );
}

export default App;
