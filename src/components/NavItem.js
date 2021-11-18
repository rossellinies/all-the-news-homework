import React from "react";
import Nav from "./nav";

import { NavAActive, NavLi } from "./nav/styles";

const NavItem = ({ item }) => {
  const updateSection = (section) => {
    item.setSection(section);
  };

  return (
    <Nav>
    <NavLi>
      <NavAActive
        className={item.navItem === item.section ? "active" : ""}
        href={`#${item.navItem}`}
        onClick={() => updateSection(item.navItem)}
      >
        {item.navItem}
      </NavAActive>
    </NavLi>
    </Nav>
  );
};
export default NavItem;
