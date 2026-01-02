import React from "react";
import { col1, col2 } from "../../constants/skkillsData";
import SkillsItem from "./SkillsItem";
const SkillsBox = () => {
  return (
    <div className="row skills-content skills-animation">
      <div className="col-lg-6">
        {col1.map((item) => (
          <SkillsItem {...item} />
        ))}
      </div>
      <div className="col-lg-6"></div>
      {col2.map((item) => (
        <SkillsItem {...item} />
      ))}
    </div>
  );
};
export default SkillsBox;
