import { Input, Checkbox, Button } from "../../ui";

function SignInForm() {
  return (
    <form>
      <Input
        id={"username"}
        className={"input-wrapper"}
        label={"Username"}
        inputType={"text"}
      />

      <Input
        id={"password"}
        className={"input-wrapper"}
        label={"Password"}
        inputType={"password"}
      />

      <Checkbox
        id={"remember-me"}
        className={"input-remember"}
        label={"Remember me"}
      />

      <Button
        className={"sign-in-button"}
        href={"/user"}
        children={"Sign In"}
      />
    </form>
  );
}

export default SignInForm;
