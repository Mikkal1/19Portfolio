import * as React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";

const menuItems = [
  { title: "ABOUT ME", path: "/" },
  { title: "CONTACT", path: "/contact" },
  { title: "PORTFOLIO", path: "/portfolio" },
  { title: "RESUME", path: "/resume" },
];

const Header = () => {
  return (
    <header>
      <nav>
        <div className="site-name">Michael Ramcharitar</div>
        <div>
          {menuItems.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} className="nav-link">
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
