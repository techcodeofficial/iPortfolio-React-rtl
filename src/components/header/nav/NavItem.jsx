import React from "react";

const NavItem = ({ icon, hash, text }) => {
  return (
    <li>
      <a href={hash}>
        <i className={`bi ${icon} navicon`}></i>
        {text}
      </a>
    </li>
  );
};
export default NavItem;
