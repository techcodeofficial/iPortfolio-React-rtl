import { col1, col2 } from "../../constants/skkillsData";
import SkillsItem from "./SkillsItem";
const SkillsBox = () => {
  return (
    <div className="row skills-content skills-animation">
      <div className="col-lg-6">
        {col1.map((item, i) => (
          <SkillsItem key={i} {...item} />
        ))}
      </div>
      <div className="col-lg-6">
        {col2.map((item, i) => (
          <SkillsItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
export default SkillsBox;
