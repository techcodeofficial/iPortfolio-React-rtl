const ResumeItem = ({ title, subTitle, body, list }) => {
  return (
    <>
      <h3 className="resume-title">{title}</h3>
      <div className="resume-item pb-0">
        <h4>{subTitle}</h4>
        <p>
          <em>{body}</em>
        </p>
        {list?.length > 0 && (
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default ResumeItem;
