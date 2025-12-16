function Input({
  inputType = "text",
  id,
  className,
  label,
  value,
  onChange,
  onBlur,
  ...props
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={props.required}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
      />
    </div>
  );
}

export default Input;
