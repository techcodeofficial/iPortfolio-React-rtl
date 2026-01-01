import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>مهارت ها</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <ProgressBar
                  dir="rtl"
                  completed={95}
                  customLabel={`HTML ${95}`}
                  animateOnRender
                  transitionDuration="1s"
                  bgColor="#149ddd"
                />
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <ProgressBar
                  dir="rtl"
                  completed={90}
                  customLabel={`CSS ${90}`}
                  animateOnRender
                  transitionDuration="1s"
                  bgColor=" #149ddd"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
