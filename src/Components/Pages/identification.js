import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function Identification() {
  return (
    <div>
      <h2>Inscription</h2>
      <p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </p>
      <p>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </p>
      <p>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </p>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
