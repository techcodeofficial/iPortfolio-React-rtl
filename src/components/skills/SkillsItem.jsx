import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const SkillsItem = ({ name, value }) => {
  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <ProgressBar
          dir="rtl"
          completed={value}
          customLabel={`${name} ${value}`}
          animateOnRender
          transitionDuration="1s"
          bgColor="#149ddd"
        />
      </div>
    </div>
  );
};
export default SkillsItem;
