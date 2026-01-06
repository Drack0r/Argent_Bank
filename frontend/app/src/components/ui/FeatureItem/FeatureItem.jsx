/**
 * FeatureItem component displays a feature with an icon, title, and description text.
 *
 * @param {string} iconSrc - The source URL for the feature icon image
 * @param {string} iconAlt - The alt text for the feature icon image
 * @param {string} title - The title text for the feature
 * @param {string} textContent - The descriptive text content for the feature
 * @returns {JSX.Element} A feature item component with icon, title, and description
 */
function FeatureItem({ iconSrc, iconAlt, title, textContent }) {
  return (
    <div className="feature__item">
      <img src={iconSrc} alt={iconAlt} className="feature__icon" />

      <h3 className="feature__title">{title}</h3>

      <p className="feature__text">{textContent}</p>
    </div>
  );
}

export default FeatureItem;
