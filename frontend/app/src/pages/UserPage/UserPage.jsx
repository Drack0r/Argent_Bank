import { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileAsync, clearError } from "../../slices/authSlice";
import usePageClass from "../../hooks/usePageClass";
import useFormValidation from "../../hooks/useFormValidation";
import { userNameValidationRules } from "../../utils";
import { Button, AccountCard, Input } from "../../components/ui";

Modal.setAppElement("#root");

function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  // const [userName, setUserName] = useState("");

  usePageClass("bg-dark");

  const dispatch = useDispatch();
  const { user, token, isLoading, error } = useSelector((state) => state.auth);

  // Hook de validation
  const {
    values,
    errors,
    touched,
    isValid,
    setValue,
    setFieldTouched,
    validateAll,
    setValues,
  } = useFormValidation({ userName: "" }, userNameValidationRules);

  const openModal = () => {
    setValues({ userName: user?.userName || "" });
    dispatch(clearError());
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setValues({ userName: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier la validité avant soumission
    const formIsValid = validateAll();
    if (!formIsValid) {
      return;
    }

    // Vérifier si le nom a changé
    if (values.userName === user?.userName) {
      closeModal();
      return;
    }

    const result = await dispatch(
      updateUserProfileAsync({
        token,
        userData: { userName: values.userName.trim() },
      })
    );

    if (updateUserProfileAsync.fulfilled.match(result)) {
      closeModal();
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue("userName", value);
  };

  const handleInputBlur = () => {
    setFieldTouched("userName");
  };

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
          onClick={openModal}
        />

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Edit user information"
          className="edit-modal"
          overlayClassName="edit-modal-overlay"
        >
          <Button isButton className={"close-button"} onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </Button>

          <form className="edit-form" onSubmit={handleSubmit}>
            <h2>Edit user info</h2>

            <div className="input-group">
              <Input
                id={"userName"}
                className={`username ${
                  errors.userName && touched.userName ? "error" : ""
                }`}
                label={"User name :"}
                value={values.userName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoFocus={true}
                required
              />
              {errors.userName && touched.userName && (
                <p className="field-error">{errors.userName}</p>
              )}
            </div>

            <Input
              id={"firstName"}
              className={"firstname"}
              label={"First name :"}
              value={user?.firstName || ""}
              disabled
            />

            <Input
              id={"lastName"}
              className={"lastname"}
              label={"Last name :"}
              value={user?.lastName || ""}
              disabled
            />

            <div className="modal__actions">
              <Button
                isButton
                buttonType="submit"
                disabled={
                  isLoading || !isValid || values.userName === user?.userName
                }
              >
                {isLoading ? "Saving..." : "Save"}
              </Button>
              <Button isButton buttonType="button" onClick={closeModal}>
                Cancel
              </Button>
            </div>

            {error && <p className="error">{error}</p>}
          </form>
        </Modal>
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
