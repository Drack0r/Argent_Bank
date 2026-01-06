/**
 * Hero component - displays the main promotional banner section
 * Features the bank's key selling points and call-to-action
 */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        {/* Screen reader only heading for accessibility */}
        <h2 className="sr-only">Promoted Content</h2>

        {/* Key selling points displayed as subtitles */}
        <p className="hero__subtitle">No fees.</p>

        <p className="hero__subtitle">No minimum deposit.</p>

        <p className="hero__subtitle">High interest rates.</p>

        {/* Call-to-action text */}
        <p className="hero__text">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </section>
  );
}

export default Hero;
