function Input({ id, className, label, inputType }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input type={inputType} id={id} />
    </div>
  );
}

export default Input;
