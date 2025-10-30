import { useState } from "react";
import "../styles/EduInfo.css";

function EduInfo({ educationData, onSave, index }) {
  return (
    <>
      <form className="info-form" onSubmit={onSave}></form>
    </>
  );
}

export default EduInfo;
