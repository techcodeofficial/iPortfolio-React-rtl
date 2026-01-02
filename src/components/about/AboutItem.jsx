import React from "react";
const AboutItem = ({ lable, text }) => {
  return (
    <li>
      <i className="bi bi-chevron-right"></i>
      <strong>{lable}:</strong> <span>{text}</span>
    </li>
  );
};
export default AboutItem;
