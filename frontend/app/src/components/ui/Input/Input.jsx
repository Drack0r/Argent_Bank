/**
 * Input component that renders a labeled input field
 * @param {string} inputType - Type of input (default: "text")
 * @param {string} id - Unique identifier for the input
 * @param {string} label - Text label for the input
 * @param {string} value - Current value of the input
 * @param {Function} onChange - Handler for input value changes
 * @param {Function} onBlur - Handler for input blur events
 * @param {Object} props - Additional props (className, required, disabled, autoFocus, etc.)
 */
function Input({
  inputType = "text",
  id,
  label,
  value,
  onChange,
  onBlur,
  ...props
}) {
  return (
    <div className={props.className}>
      {/* Label associated with the input field */}
      <label htmlFor={id}>{label}</label>

      {/* Input field with dynamic type and event handlers */}
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
