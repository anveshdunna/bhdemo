/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { name, link } = props;
  return (
    <NavLink
      to={link}
      className="flex flex-1 items-center justify-center gap-4 rounded-xl hover:bg-blue-4 md:flex-none md:py-3 xl:justify-start xl:px-2"
    >
      <div className="h-6 w-6 bg-red-8"></div>
      <div className="hidden text-base xl:block">{name}</div>
    </NavLink>
  );
};

export default NavItem;
