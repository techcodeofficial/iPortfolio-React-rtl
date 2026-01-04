import React from "react";
import SectionHeader from "../common/SectionHeader";
import ServiceBox from "../service/ServiceBox";
const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="خدمات
        "
          body="برای سود بردن، دردسرهای زیادی می طلبد. ناشی از نیازهای اوست در واقع،
          برخی از او فرار می کنند. بگذار همان چیزی باشند که می خواهند. هر کسی که
          کسی که میل دارد و کسی که مانع می شود دیگران را نمی پذیرد. چون اجازه
          دهید او را در این دفتر راحتی فرار کند"
        />
      </div>
      <div className="container">
        <ServiceBox />
      </div>
    </section>
  );
};
export default Services;
