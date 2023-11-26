import { HiMiniLanguage } from "react-icons/hi2";
import Button from "./Button";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { TbBrandLine, TbBell, TbUser, TbSearch } from "react-icons/tb";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 container mx-auto">
      <div>
        <Link to="/">
          <img src="/logo.svg" alt="azul" />
        </Link>
      </div>
      <div className="flex items-center gap-14">
        <ul className="flex items-center gap-4">
          <li>
            <Button type="outline" to="/login">
              Sign In
            </Button>
          </li>
          <li>
            <Button type="primary" to="/register">
              Sign Up
            </Button>
          </li>
          <li>
            <HiMiniLanguage
              size={24}
              className="text-textColor cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
