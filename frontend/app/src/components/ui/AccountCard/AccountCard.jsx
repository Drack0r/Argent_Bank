import { Button } from "../";

/**
 * AccountCard component displays account information and a transaction button
 * @param {string} accountTitle - The title/name of the account
 * @param {string|number} accountAmount - The account balance amount
 * @param {string} accountAmountDescription - Description of the account balance
 */
function AccountCard({
  accountTitle,
  accountAmount,
  accountAmountDescription,
}) {
  return (
    <section className="account">
      {/* Main account information wrapper */}
      <div className="account-content-wrapper">
        {/* Display account title */}
        <h3 className="account-title">{accountTitle}</h3>

        {/* Display account balance with dollar sign */}
        <p className="account-amount">${accountAmount}</p>

        {/* Display account balance description */}
        <p className="account-amount-description">{accountAmountDescription}</p>
      </div>

      {/* Call-to-action wrapper for the transaction button */}
      <div className="account-content-wrapper cta">
        <Button className={"transaction-button"} isButton={true}>
          View transactions
        </Button>
      </div>
    </section>
  );
}

export default AccountCard;
