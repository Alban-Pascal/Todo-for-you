import ReactDom from "react-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ListAltIcon from "@mui/icons-material/ListAlt";

export default function MyTodo() {
  return (
    <section id="todo">
      <h1 className="m-3">Liste de Tâches</h1>
      <ul className="list-group">
        <li className="list-group-item d-flex align-item-items-center">
          tache 1
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          tache 2
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          tache 3
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          tache 4
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
      </ul>
    </section>
  );
}
