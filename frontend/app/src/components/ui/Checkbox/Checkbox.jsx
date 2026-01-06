/**
 * Checkbox component - renders a checkbox input with an associated label
 * @param {string} id - Unique identifier for the checkbox input
 * @param {string} className - CSS class name for the container div
 * @param {string} label - Text to display as the checkbox label
 * @param {boolean} checked - Whether the checkbox is checked or not
 * @returns {JSX.Element} A div containing a checkbox input and label
 */
function Checkbox({ id, className, label, checked }) {
  return (
    <div className={className}>
      {/* Checkbox input element */}
      <input type="checkbox" id={id} checked={checked} />

      {/* Label associated with the checkbox */}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
