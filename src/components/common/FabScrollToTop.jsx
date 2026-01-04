const FabScrollToTop = ({ showScrollToTop }) => {
  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${
        showScrollToTop ? "active" : ""
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};
export default FabScrollToTop;
