export const FabDrawer = ({ toggleHeader, showHeader }) => {
  return (
    <i
      className={`header-toggle d-xl-none bi ${
        showHeader ? "bi-x" : "bi-list"
      }`}
      onClick={toggleHeader}
    ></i>
  );
};
export default FabDrawer;
