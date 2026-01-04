import AboutItem from "./AboutItem";
import { col1, col2 } from "../../constants/personalAboutItemData";
const AboutBox = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ul>
          {col1.map((item, key) => (
            <AboutItem {...item} key={key} />
          ))}
        </ul>
      </div>
      <div className="col-lg-6">
        <ul>
          {" "}
          {col2.map((item, key) => (
            <AboutItem {...item} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AboutBox;
