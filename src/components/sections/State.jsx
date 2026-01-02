import React from "react";
import statesData from "../../constants/statesData";
import StateItem from "../state/StateItem";
const State = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statesData.map((item) => (
            <StateItem {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default State;
