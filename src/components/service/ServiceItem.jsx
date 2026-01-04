const ServiceItem = ({ title, body, icon }) => {
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="icon flex-shrink-0">
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {title}
          </a>
        </h4>
        <p className="description">{body}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
