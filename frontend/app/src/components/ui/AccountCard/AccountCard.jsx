import { Button } from "../";

function AccountCard({
  accountTitle,
  accountAmount,
  accountAmountDescription,
}) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>

        <p className="account-amount">${accountAmount}</p>

        <p className="account-amount-description">{accountAmountDescription}</p>
      </div>

      <div className="account-content-wrapper cta">
        <Button
          className={"transaction-button"}
          isButton={true}
          children={"View transactions"}
        />
      </div>
    </section>
  );
}

export default AccountCard;
