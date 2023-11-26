import { HiMiniLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { TbBrandLine, TbBell, TbUser, TbSearch } from "react-icons/tb";

function Header() {
  return (
    <div className="flex items-center container justify-between p-4 mx-auto">
      <div>
        <Link to="/">
          <img src="/logo-icon.svg" alt="azul" className="w-10" />
        </Link>
      </div>
      <div className="flex items-center gap-14">
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer">
            <TbSearch size={26} className="text-textColor" />
          </li>
          <li className="cursor-pointer">
            <TbUser size={26} className="text-textColor" />
          </li>
          <li className="cursor-pointer">
            <TbBell size={26} className="text-textColor" />
          </li>
          <li className="cursor-pointer">
            <TbBrandLine size={26} className="text-textColor" />
          </li>
        </ul>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
