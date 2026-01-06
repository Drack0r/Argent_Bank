import { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileAsync, clearError } from "../../slices/authSlice";
import usePageClass from "../../hooks/usePageClass";
import useFormValidation from "../../hooks/useFormValidation";
import { userNameValidationRules } from "../../utils";
import { Button, AccountCard, Input } from "../../components/ui";

// Set the app element for react-modal accessibility
Modal.setAppElement("#root");

/**
 * UserPage component - displays user profile information and account details
 * Includes functionality to edit username via modal
 * @returns {JSX.Element} User dashboard with profile edit modal and account cards
 */
function UserPage() {
  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Apply dark background class to the page
  usePageClass("bg-dark");

  // Redux hooks for state management and actions
  const dispatch = useDispatch();
  const { user, token, isLoading, error } = useSelector((state) => state.auth);

  // Custom hook for form validation with userName field
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

  // Open modal and initialize form with current user data
  const openModal = () => {
    setValues({ userName: user?.userName || "" });
    dispatch(clearError()); // Clear any previous errors
    setIsOpen(true);
  };

  // Close modal and reset form
  const closeModal = () => {
    setIsOpen(false);
    setValues({ userName: "" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all form fields
    const formIsValid = validateAll();
    if (!formIsValid) {
      return;
    }

    // If username hasn't changed, just close the modal
    if (values.userName === user?.userName) {
      closeModal();
      return;
    }

    // Dispatch update action with new username
    const result = await dispatch(
      updateUserProfileAsync({
        token,
        userData: { userName: values.userName.trim() },
      })
    );

    // Close modal on successful update
    if (updateUserProfileAsync.fulfilled.match(result)) {
      closeModal();
    }
  };

  // Handle input value changes
  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue("userName", value);
  };

  // Mark field as touched when user leaves input
  const handleInputBlur = () => {
    setFieldTouched("userName");
  };

  return (
    <>
      {/* Welcome section with user name and edit button */}
      <div className="title">
        <h1>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName}!
        </h1>

        {/* Button to open edit modal */}
        <Button isButton={true} className={"edit-button"} onClick={openModal}>
          Edit Name
        </Button>

        {/* Modal for editing user information */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Edit user information"
          className="edit-modal"
          overlayClassName="edit-modal-overlay"
        >
          {/* Close button for modal */}
          <Button isButton className={"close-button"} onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </Button>

          {/* Edit form */}
          <form className="edit-form" onSubmit={handleSubmit}>
            <h2>Edit user info</h2>

            {/* Editable username input with validation */}
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
              {/* Display validation error if any */}
              {errors.userName && touched.userName && (
                <p className="field-error">{errors.userName}</p>
              )}
            </div>

            {/* Read-only first name input */}
            <Input
              id={"firstName"}
              className={"firstname"}
              label={"First name :"}
              value={user?.firstName || ""}
              disabled
            />

            {/* Read-only last name input */}
            <Input
              id={"lastName"}
              className={"lastname"}
              label={"Last name :"}
              value={user?.lastName || ""}
              disabled
            />

            {/* Form action buttons */}
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

            {/* Display error message if any */}
            {error && <p className="error">{error}</p>}
          </form>
        </Modal>
      </div>

      {/* Account cards displaying user's bank accounts */}
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
