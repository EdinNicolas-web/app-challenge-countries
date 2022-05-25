import React from "react";

// styles
import { StyledNavbar } from "./Navbar.style";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <StyledNavbar>
      <h2>Where in the world?</h2>
      <p onClick={() => toggleTheme()} style={{ cursor: "pointer" }}>
        {theme !== "dark" ? (
          <>
            <FontAwesomeIcon icon={faMoon} /> Dark Mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSun} /> Light Mode
          </>
        )}
      </p>
    </StyledNavbar>
  );
};

export default Navbar;
