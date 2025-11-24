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
