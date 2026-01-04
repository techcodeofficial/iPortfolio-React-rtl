import portfolioTabsData from "../../constants/portfolioTabsData";
const Tabs = ({ filterId, setFilterId }) => {
  return (
    <ul
      className="portfolio-filters isotope-filters"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {portfolioTabsData.map((item, i) => (
        <li
          key={i}
          data-filter="*"
          className={filterId === item.filterId ? "filter-active" : ""}
        >
          <a onClick={() => setFilterId(item.filterId)}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
