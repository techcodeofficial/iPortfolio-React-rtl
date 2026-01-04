import React from "react";
import serviceData from "../../constants/serviceData";
import ServiceItem from "./ServiceItem";
const ServiceBox = () => {
  return (
    <div className="row gy-4">
      {serviceData.map((item, i) => (
        <ServiceItem {...item} key={i} />
      ))}
    </div>
  );
};
export default ServiceBox;
