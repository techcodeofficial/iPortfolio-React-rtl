import React from "react";
import addresItemData from "../../constants/addresItemData";
import AddresItem from "./AddresItem";

export const Addres = () => {
  return (
    <div className="col-lg-5">
      <div className="info-wrap">
        {addresItemData.map((item, i) => (
          <AddresItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Addres;
