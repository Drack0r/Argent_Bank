import { FeatureItem } from "../../ui";

/**
 * Features component that displays a section with three feature items highlighting the main benefits of the service
 */
function Features() {
  return (
    <section className="features">
      {/* Screen reader only heading for accessibility */}
      <h2 className="sr-only">Features</h2>

      {/* Customer support feature */}
      <FeatureItem
        iconSrc={"/images/icon-chat.png"}
        iconAlt={"Chat Icon"}
        title={"You are our #1 priority"}
        textContent={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />

      {/* Savings and interest rates feature */}
      <FeatureItem
        iconSrc={"/images/icon-money.png"}
        iconAlt={"Money Icon"}
        title={"More savings means higher rates"}
        textContent={
          "The more you save with us, the higher your interest rate will be!"
        }
      />

      {/* Security feature */}
      <FeatureItem
        iconSrc={"/images/icon-security.png"}
        iconAlt={"Security Icon"}
        title={"Security you can trust"}
        textContent={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
      />
    </section>
  );
}

export default Features;
