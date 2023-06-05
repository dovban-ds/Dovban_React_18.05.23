import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

const Nav = () => {
  return (
    <>
      <ul className="nav">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <NavLink
                to={
                  navLink === "Home"
                    ? "/Dovban_React_18.05.23/home"
                    : navLink.toLowerCase()
                }
              >
                {navLink}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;
