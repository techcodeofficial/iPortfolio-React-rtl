import React from "react";
import SectionHeader from "../common/SectionHeader";
import myProfileImage from "../../assets/images/my-profile-img.jpg";
import AboutBox from "../about/AboutBox";
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="درباره"
          body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
        "
        />
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={myProfileImage} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>فول استک&amp; توسعه دهنده ی وب</h2>
            <p className="fst-italic py-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و
            </p>

            <AboutBox />
            <p className="py-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
