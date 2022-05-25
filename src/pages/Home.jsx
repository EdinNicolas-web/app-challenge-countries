import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

const Index = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </>
  );
};

export default Index;
