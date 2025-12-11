import { useSelector, useDispatch } from "react-redux";
import usePageClass from "../../hooks/usePageClass";
import { Button, AccountCard } from "../../components/ui";

function UserPage() {
  usePageClass("bg-dark");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="title">
        <h1>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName}!
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
