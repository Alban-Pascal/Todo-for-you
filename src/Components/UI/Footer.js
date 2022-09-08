import styled from "styled-components";
import * as React from "react";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Box from "@mui/material/Box";

export default function Footer({ islight, handleToggleTheme }) {
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
      ></Box>

      <button onClick={handleToggleTheme}>
        <Button
          size="small"
          startIcon={<DarkModeIcon />}
          variant="outlined"
          onClick={handleToggleTheme}
        >
          Switch to {islight ? "dark" : "light"} theme
        </Button>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px;
`;
