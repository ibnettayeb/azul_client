import Button from "./Button";

function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <img src="/logo.svg" alt="azul" />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <Button type="outline">Sign In</Button>
          </li>
          <li>
            <Button type="primary">Sign Up</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
