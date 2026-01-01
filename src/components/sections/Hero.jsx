import React from "react";
import heroBgImage from "../../assets/images/hero-bg.jpg";
const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBgImage} alt="" data-aos="fade-in" className="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>محمد افروزه</h2>
        <p>
          من یک
          <span
            className="typed"
            data-typed-items="فول استک, توسعه دهنده, فریلنسر, برنامه نویس"
          >
            فول استک
          </span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
          هستم
        </p>
      </div>
    </section>
  );
};
export default Hero;
