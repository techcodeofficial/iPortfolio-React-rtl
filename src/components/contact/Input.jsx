const Input = (props) => {
  return (
    <div className="col-md-6">
      <label htmlFor="name-field" className="pb-2">
        {props.label}
      </label>
      <input {...props} className="form-control" required="" />
    </div>
  );
};
export default Input;
