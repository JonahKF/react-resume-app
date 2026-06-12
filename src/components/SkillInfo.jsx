import { useState } from "react";

function SkillInfo({ skillData, onSave, onRemove, index }) {
  const [skill, setSkill] = useState(skillData);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = skill;

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <>
      <form className="info-form skills-form" onSubmit={onSubmit}>
        <div className="form-row">
          <input
            id="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>

        <button className="form-btn" type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>

        <button type="button" onClick={() => onRemove(skill)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </form>

      <hr className="form-break" />
    </>
  );
}

export default SkillInfo;
