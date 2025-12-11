function Input({ id, className, label, value, inputType, onChange, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        required={props.required}
      />
    </div>
  );
}

export default Input;
