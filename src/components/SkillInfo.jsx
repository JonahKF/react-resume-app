import { useState } from "react";

function SkillInfo({ skillData, onSave, onRemove, index }) {
  const [name, setName] = useState(skillData.name);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedInfo = {
      id: skillData.id,
      name,
    };

    console.log(updatedInfo);

    onSave(updatedInfo);
  };

  return (
    <>
      <form className="info-form skills-form" onSubmit={onSubmit}>
        <div className="form-row">
          <input
            id="skill"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button className="form-btn" type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>

        <button type="button" onClick={() => onRemove(skillData.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </form>

      <hr className="form-break" />
    </>
  );
}

export default SkillInfo;
