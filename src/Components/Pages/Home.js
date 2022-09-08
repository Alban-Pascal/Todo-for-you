import * as React from "react";
import { Link } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CreateIcon from "@mui/icons-material/Create";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Home() {
  return (
    <div>
      <h1> Que fessons nous ?</h1>
      <div className="card">
        <h1>Consulter: </h1>
        <ul>
          <li className="center">
            <h2>MesTodo </h2>
            <Link to="/MyTodo">
              <ListAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
          <li className="center">
            <h2>Mes Note </h2>
            <Link to="/MyNote">
              <NoteAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
        </ul>
        <h1> Crée :</h1>
        <ul>
          <li className="center">
            <h2> Todo </h2>
            <Link to="/CreateTodo">
              <CreateIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
          <li className="center">
            <h2>Note</h2>
            <Link to="/CreateNote">
              <BorderColorIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
