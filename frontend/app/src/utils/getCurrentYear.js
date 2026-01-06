/**
 * Gets the current year from the system date
 * @returns {number} The current year as a four-digit number
 */
function getCurrentYear() {
  const date = new Date();

  return date.getFullYear();
}

export default getCurrentYear;
