import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Registration() {
  return (
    <div>
      <div className="card">
        <h2>Inscription</h2>
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
            label="Password"
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
        <p>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Se souvenir de moi"
          />
        </p>
      </div>
      <div className="validation">
        <Button variant="contained" endIcon={<BeenhereIcon />}>
          validation
        </Button>
      </div>
    </div>
  );
}
