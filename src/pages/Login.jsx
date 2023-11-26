import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";

function Login() {
  return (
    <div className="container mx-auto text-center max-w-lg mt-32 shadow-sm rounded-lg py-8 px-5 border border-grey">
      <h2 className="font-bold text-3xl mb-4">You forgot your password?</h2>
      <p className="text-lg">
        Join us again! Enter your credentials to continue your journey.
      </p>
      <div className="flex flex-col gap-4 my-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </div>
      <p className="text-right mb-4">
        <Link to="/forgot-password">Forgot your password?</Link>
      </p>
      <Button type="primary">Sign in</Button>
      <p className="mt-4">
        You don’t have an account get one from{" "}
        <Link to="/register" className="text-primary">
          here
        </Link>
      </p>
    </div>
  );
}

export default Login;
