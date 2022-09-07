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
      <h2>Consulter: </h2>
      <div className="center">
        <Grid item xs={18}>
          <Typography>
            {"Mes Todo"}
            <Link to="/MyTodo">
              <ListAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </Typography>
        </Grid>
      </div>
      <div className="center">
        <Grid item xs={18}>
          <Typography>
            {"Mes Notes"}
            <Link to="/MyNote">
              <NoteAltIcon sx={{ fontSize: 60 }} />
            </Link>
          </Typography>
        </Grid>
      </div>

      <h2> Crée :</h2>
      <div className="center">
        <Grid item xs={18}>
          <Typography>
            {"Un Todo"}
            <Link to="/CreateTodo">
              <CreateIcon sx={{ fontSize: 60 }} />
            </Link>
          </Typography>
        </Grid>
      </div>
      <div className="center">
        <Grid item xs={18}>
          <Typography>
            {" Une Note"}
            <Link to="/CreateNote">
              <BorderColorIcon sx={{ fontSize: 60 }} label="Call me" />
            </Link>
          </Typography>
        </Grid>
      </div>
    </div>
  );
}
