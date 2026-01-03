import React from "react";

const Project = ({ title, subTitle, image }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
      <div className="portfolio-content h-100">
        <img src={image} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <a
            href={image}
            title="App 1"
            data-gallery="portfolio-gallery-app"
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
          <a
            href="portfolio-details.html"
            title="More Details"
            className="details-link"
          >
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
