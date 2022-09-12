import * as React from "react";
import { Link } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CreateIcon from "@mui/icons-material/Create";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Home() {
  return (
    <div>
      <h1>What do we do?</h1>
      <div className="card">
        <h2>consult: </h2>
        <ul>
          <li className="center">
            <h2>MyTodo </h2>
            <Link to="/MyTodo">
              <ListAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
          <li className="center">
            <h2>My Note </h2>
            <Link to="/MyNote">
              <NoteAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </li>
        </ul>
        <h2> Create :</h2>
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
