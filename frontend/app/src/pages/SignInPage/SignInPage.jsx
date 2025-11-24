import { usePageClass } from "../../hooks";
import { SignInForm } from "../../components/sections";

function SignInPage() {
  usePageClass("bg-dark");

  return (
    <>
      <section className="sign-in__content">
        <i className="fa fa-user-circle sign-in-icon"></i>

        <h1>Sign In</h1>

        <SignInForm />
      </section>
    </>
  );
}

export default SignInPage;
