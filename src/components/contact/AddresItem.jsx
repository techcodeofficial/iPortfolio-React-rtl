import React from "react";

export const AddresItem = ({ title, body, icon }) => {
  return (
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <i className={`bi ${icon} flex-shrink-0`}></i>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default AddresItem;
