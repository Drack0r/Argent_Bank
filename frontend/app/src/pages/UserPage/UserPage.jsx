import { Button, AccountCard } from "../../components/ui";
import usePageClass from "../../hooks/usePageClass";

function UserPage() {
  usePageClass("bg-dark");

  return (
    <>
      <div className="title">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>

        <Button
          isButton={true}
          className={"edit-button"}
          children={"Edit Name"}
        />
      </div>

      <AccountCard
        accountTitle={"Argent Bank Checking (x8349)"}
        accountAmount={"2,082.79"}
        accountAmountDescription={"Available Balance"}
      />

      <AccountCard
        accountTitle={"Argent Bank Savings (x6712)"}
        accountAmount={"10,928.42"}
        accountAmountDescription={"Available Balance"}
      />

      <AccountCard
        accountTitle={"Argent Bank Credit Card (x8349)"}
        accountAmount={"184.30"}
        accountAmountDescription={"Current Balance"}
      />
    </>
  );
}

export default UserPage;
