import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">iPortfolio</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by
          <a href="https://github.com/techcodeofficial">techcodeofficial</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
