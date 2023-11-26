import { NavLink } from "react-router-dom";

function MenuItem({ icon, name, to }) {
  return (
    <li className="p-2 hover:bg-primary/10 w-2/3 rounded-lg cursor-pointer">
      <NavLink to={to} className="flex items-center gap-3">
        <span className="text-textColor">{icon}</span>
        <span className="text-textColor text-lg">{name}</span>
      </NavLink>
    </li>
  );
}

export default MenuItem;
