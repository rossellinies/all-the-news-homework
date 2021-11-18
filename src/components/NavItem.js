import React from "react";
// import Nav from "./nav";

const NavItem = ({ navItem, setSection, section }) => {
  const updateSection = (section) => {
    setSection(section);
  };

  return (
    <li>
      <a className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => updateSection(navItem)}
      >
        {navItem}
      </a>
    </li>
  );
};

export default NavItem;
