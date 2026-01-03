import React from "react";
import { col1, col2 } from "../../constants/resumeData";
import ResumeItem from "./ResumeItem";
const ResumeBox = () => {
  return (
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        {col1.map((item, i) => (
          <ResumeItem key={i} {...item} />
        ))}
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        {col2.map((item, i) => (
          <ResumeItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
export default ResumeBox;
