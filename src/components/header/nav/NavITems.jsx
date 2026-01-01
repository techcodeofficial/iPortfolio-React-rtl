import React from "react";
import NavItem from "./NavItem";
import navItems from "../../../constants/navItems";
const NavItems = () => {
  return (
    <ul>
      {navItems.map((item, i) => (
        <NavItem icon={item.icon} hash={item.hash} text={item.text} key={i} />
      ))}
    </ul>
  );
};
export default NavItems;
