function Checkbox({ id, className, label }) {
  return (
    <div className={className}>
      <input type="checkbox" id={id} />

      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
