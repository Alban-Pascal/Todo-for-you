import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Identification() {
  return (
    <div className="card">
      <h2>Mon Compte</h2>
      <Stack direction="row">
        <Avatar
          className="Avatar"
          alt="Cindy Baker"
          sx={{ width: 90, height: 90 }}
          src="https://www.univie.fr/wp-content/uploads/2017/03/anastassia-499-p.jpg"
        />
      </Stack>
      <p>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="filled"
          margin="none"
        />
      </p>
      <p>
        <TextField
          fullWidth
          id="filled-basic"
          label="first name"
          variant="filled"
          margin="none"
        />
      </p>
      <p>
        <TextField
          fullWidth
          id="filled-basic"
          label="email"
          variant="filled"
          margin="none"
        />
      </p>
      <h3>Changer mon mots de passe</h3>
      <p>
        <TextField
          fullWidth
          id="standard-basic"
          label="Passwords"
          variant="filled"
          margin="none"
        />
      </p>
      <p>
        <TextField
          fullWidth
          id="standard-basic"
          label="repeat Password"
          variant="filled"
          margin="none"
        />
      </p>
      <h3>Changer mon avatar</h3>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button color="success" variant="contained" component="label">
          Upload my picture
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>
      <Stack direction="row" alignItems="left" spacing={2} size="small">
        <Button variant="contained" color="success">
          validation
        </Button>
      </Stack>
    </div>
  );
}
