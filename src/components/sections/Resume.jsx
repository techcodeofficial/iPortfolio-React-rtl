import React from "react";
import SectionHeader from "../common/SectionHeader";
import ResumeBox from "../resume/ResumeBox";
const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="سوابق کاری"
          body="      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه"
        />
      </div>
      <div className="container">
        <ResumeBox />
      </div>
    </section>
  );
};
export default Resume;
