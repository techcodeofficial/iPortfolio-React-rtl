const SectionHeader = ({ title, body }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
export default SectionHeader;
