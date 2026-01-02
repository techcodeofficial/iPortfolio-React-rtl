import React from "react";
import SkillsBox from "../skills/SkillsBox";
import SectionHeader from "../common/SectionHeader";
const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="مهارت ها"
          body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و"
        />
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <SkillsBox />
        </div>
      </div>
    </section>
  );
};
export default Skills;
