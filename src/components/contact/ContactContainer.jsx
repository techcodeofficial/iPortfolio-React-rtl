import Addres from "./Addres";
import Message from "./Message";
const ContactContainer = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4">
        <Addres />
        <Message />
      </div>
    </div>
  );
};
export default ContactContainer;
