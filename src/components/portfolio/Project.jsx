import { Link } from "react-router";
import { confirmAlert } from "react-confirm-alert";
const Project = ({ title, subTitle, image, id }) => {
  const zoomingPicture = () => {
    confirmAlert({
      customUI: () => {
        return (
          <div>
            <img src={image} className="img-fluid" alt="" />
          </div>
        );
      },
    });
  };
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
      <div className="portfolio-content h-100">
        <img src={image} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <a
            onClick={zoomingPicture}
            title={title}
            data-gallery="portfolio-gallery-app"
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
          <Link
            to={`/portfolio-detail/${id}`}
            title="More Details"
            className="details-link"
          >
            <i className="bi bi-link-45deg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Project;
