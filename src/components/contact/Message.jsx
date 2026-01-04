import Input from "./Input";

const Message = () => {
  return (
    <div className="col-lg-7">
      <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">
          <Input name="name" id="name-field" type="text" label="نام شما " />
          <Input name="email" id="emil-field" type="email" label="ایمیل شما " />
          <Input name="subject" id="subject-field" type="text" label="عنوان" />
          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">
              پیام
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              id="message-field"
              required=""
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <button type="submit">ارسال پیام</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Message;
