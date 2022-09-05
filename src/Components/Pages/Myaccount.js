import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Identification() {
  return (
    <div>
      <h2>Mon Compte</h2>
      <Stack direction="row">
        <Avatar alt="Cindy Baker" src="/static/static/images/avatar/1.jpg" />
      </Stack>
      <p>
        <TextField id="outlined-basic" label="Name" variant="filled" />
      </p>
      <p>
        <TextField id="filled-basic" label="first name" variant="filled" />
      </p>
      <p>
        <TextField id="filled-basic" label="email" variant="filled" />
      </p>
      <h3>Changer mon mots de passe</h3>
      <p>
        <TextField id="standard-basic" label="Passwords" variant="filled" />
      </p>
      <p>
        <TextField
          id="standard-basic"
          label="repeat Passwords"
          variant="filled"
        />
      </p>
      <h3>Changer mon avatar</h3>

      <Button variant="contained">validation</Button>
    </div>
  );
}
