import { SignInForm } from "../../components/sections";
import usePageClass from "../../hooks/usePageClass";

/**
 * SignInPage component renders the sign-in page with a form
 * @returns {JSX.Element} The sign-in page component
 */
function SignInPage() {
  // Apply dark background class to the page
  usePageClass("bg-dark");

  return (
    <>
      {/* Sign-in section container */}
      <section className="sign-in__content">
        {/* User icon */}
        <i className="fa fa-user-circle sign-in-icon"></i>

        {/* Page title */}
        <h1>Sign In</h1>

        {/* Sign-in form component */}
        <SignInForm />
      </section>
    </>
  );
}

export default SignInPage;
