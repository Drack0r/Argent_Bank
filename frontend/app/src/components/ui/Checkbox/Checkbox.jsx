function Checkbox({ id, className, label, checked }) {
  return (
    <div className={className}>
      <input type="checkbox" id={id} checked={checked} />

      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
