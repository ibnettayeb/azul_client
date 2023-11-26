import Input from "../ui/Input";
import Button from "../ui/Button";

function ResetPassword() {
  return (
    <div className="container mx-auto text-center max-w-lg mt-32 shadow-sm rounded-lg py-8 px-5 border border-grey">
      <h2 className="font-bold text-3xl mb-4">Reset your password</h2>
      <p className="text-lg">
        Enter your new password below and click "Reset" to secure your account
        with a fresh start!
      </p>
      <div className="flex flex-col gap-4 my-4">
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="New Password" />
        <Input type="password" placeholder="Confirm New Password" />
      </div>
      <Button type="primary">Reset</Button>
    </div>
  );
}

export default ResetPassword;
