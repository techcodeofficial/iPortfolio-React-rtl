import SectionHeader from "../common/SectionHeader";
import ContactContainer from "../contact/ContactContainer";
const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="تماس بگیرید"
          body="عواقب نیازهای او در واقع فرار از چیزی است او می خواهد دنبال شود"
        />
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <ContactContainer />
      </div>
    </section>
  );
};
export default Contact;
