import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Detail from "../components/Detail/Detail";

const DetailPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Detail />
    </>
  );
};

export default DetailPage;
