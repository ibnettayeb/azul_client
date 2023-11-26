import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";

function Register() {
  return (
    <div className="container mx-auto text-center max-w-lg mt-32 shadow-sm rounded-lg py-8 px-5 border border-grey">
      <h2 className="font-bold text-3xl mb-4">Ready to share?</h2>
      <p className="text-lg">
        Welcome to our community! Register now and be a part of the
        conversation.
      </p>
      <div className="flex flex-col gap-4 my-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </div>
      <Button type="primary">Sign up</Button>
      <p className="mt-4">
        You have already an account login from{" "}
        <Link to="/login" className="text-primary">
          here
        </Link>
      </p>
    </div>
  );
}

export default Register;
