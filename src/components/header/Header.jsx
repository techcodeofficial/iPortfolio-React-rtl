import React, { useState } from "react";
import FabDrawer from "./FabDrawer";
import ImageProfile from "./ImageProfile";
import SocialNetworks from "./SocialNetworks";
import Nav from "./nav/Nav";
const Header = () => {
  let [showHeader, setShowHeader] = useState(false);
  const toggleHeader = () => {
    setShowHeader((prevState) => !prevState);
  };
  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        showHeader ? "header-show" : ""
      }`}
    >
      <FabDrawer toggleHeader={toggleHeader} showHeader={showHeader} />
      <ImageProfile />
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">محمد افروزه</h1>
      </a>
      <SocialNetworks />
      <Nav />
    </header>
  );
};
export default Header;
