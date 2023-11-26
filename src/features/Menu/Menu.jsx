import { SidebarItems } from "../../data/MenuItems";
import MenuItem from "./MenuItem";
function Menu() {
  return (
    <div className="mb-6">
      <ul className="flex flex-col gap-5">
        {SidebarItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            name={item.name}
            to={item.to}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
