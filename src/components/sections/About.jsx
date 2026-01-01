import React from "react";
import myProfileImage from "../../assets/images/my-profile-img.jpg";
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>درباره</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
        </p>
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
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>تولد:</strong> <span>6 خرداد سال 1385</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>وبسایت:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>شماره:</strong> <span>989910000342</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>شهر:</strong>
                    <span>آذربایجان غربی شهرستان بوکان</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>سن:</strong>
                    <span>20</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>سطح:</strong> <span>جونیور</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>ایمیل:</strong> <span>example@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>فریلنسر:</strong> <span>دردسترس</span>
                  </li>
                </ul>
              </div>
            </div>
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
