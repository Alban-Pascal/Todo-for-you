import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function Header({ islight, handleToggleTheme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <ArrowBackIcon />
      </Box>

      <h1>Todo for you</h1>

      <Button
        startIcon={<DarkModeIcon />}
        variant="outlined"
        onClick={handleToggleTheme}
      >
        Switch to {islight ? "dark" : "light"} theme
      </Button>

      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
          },
        }}
      ></Box>
      <MenuIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </MenuIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/identification">My account</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/CreateNote">Create Notes</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/CreateTodo">Create Todo</Link>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  padding: 0px 24px;
`;
