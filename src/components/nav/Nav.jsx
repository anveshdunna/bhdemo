import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-0 flex h-16 w-full justify-evenly gap-2 border-t border-solid border-gray-7 bg-white px-4 md:top-0 md:h-full md:w-16 md:flex-col md:justify-start md:border-r md:border-t-0 md:px-2 md:py-2 xl:w-60">
        <NavItem name="Home" link={"/"} />
        <NavItem name="Explore" link={"/explore"} />
        <NavItem name="Wishlist" link={"/wishlist"} />
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
