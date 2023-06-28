import React, { FC, ReactElement } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

const Nav: FC = (): ReactElement => {
  return (
    <>
      <ul className="nav">
        {navLinks.map((navLink: string, index: number): ReactElement => {
          return (
            <li key={index}>
              <NavLink to={navLink === "Home" ? "/" : navLink.toLowerCase()}>
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
