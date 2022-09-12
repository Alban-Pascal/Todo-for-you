import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

export default function MyTodo() {
  return (
    <section className="card">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Liste de tâches</Typography>
      </ThemeProvider>
      <ul>
        <li>
          Tâche 1{" "}
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <CheckIcon />
        </li>
        <li>
          Tâche 2{" "}
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <CheckIcon />
        </li>
        <li>
          Tâche 3{" "}
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <CheckIcon />
        </li>
        <li>
          Tâche 4{" "}
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <CheckIcon />
        </li>
      </ul>
    </section>
  );
}
