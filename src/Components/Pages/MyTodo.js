import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export default function MyTodo() {
  return (
    <section className="card">
      <h1>Liste de tâches</h1>
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
