import Menu from "../features/Menu/Menu";
import Button from "./Button";
import { TbCirclePlus } from "react-icons/tb";

function Sidebar() {
  return (
    <div className="w-96">
      <Menu />
      <Button type="primary">
        <p className="flex items-center gap-3">
          <TbCirclePlus size={24} /> <span>New Post</span>
        </p>
      </Button>
    </div>
  );
}

export default Sidebar;
