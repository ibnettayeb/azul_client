import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";

function ForgotPassword() {
  return (
    <div className="container mx-auto text-center max-w-lg mt-32 shadow-sm rounded-lg py-8 px-5 border border-grey">
      <h2 className="font-bold text-3xl mb-4">Lost Password?</h2>
      <p className="text-lg">
        Your Password Savior Awaits! Check Your Inbox for Our Recovery Email.
      </p>
      <div className="flex flex-col gap-4 my-4">
        <Input type="email" placeholder="Email" />
      </div>
      <Button type="primary">Send reset link</Button>
      <p className="mt-4">
        You remember your password login from{" "}
        <Link to="/login" className="text-primary">
          here
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
