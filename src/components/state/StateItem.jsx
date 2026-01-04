const StateItem = ({ type, body, icon }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item">
        <i className={`bi  ${icon}`}></i>
        <span className="purecounter"></span>
        <p>
          <strong>{type} </strong> <span>{body}</span>
        </p>
      </div>
    </div>
  );
};
export default StateItem;
