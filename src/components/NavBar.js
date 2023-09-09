import { Box } from "@mui/material";
import React from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <a href="Home">
            <img src={logo} alt="" />
          </a>
        </Box>
        <Box>
          <a href="Menu">
            <img src={menuIcon} alt="" />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
