import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import Tabs from "../portfolio/Tabs";
import Projects from "../portfolio/Projects";
const Portfolio = () => {
  let [filterId, setFilterId] = useState(0);
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <SectionHeader
          title="نمونه کار  ها"
          body="
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و"
        />
        <p></p>
      </div>
      <div className="container">
        <Tabs filterId={filterId} setFilterId={setFilterId} />
        <Projects filterId={filterId} />
      </div>
    </section>
  );
};
export default Portfolio;
