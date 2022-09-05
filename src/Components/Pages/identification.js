import { TextField } from "@mui/material";
import Button from "@mui/material/Button";


export default function Identification() {
  return (
    <div>
      <h2>Inscription</h2>
      <p>
        <TextField id="outlined-basic" label="Name" variant="filled" />
      </p>
      <p>
        <TextField id="filled-basic" label="first name" variant="filled" />
      </p>
      <p>
        <TextField id="filled-basic" label="email" variant="filled" />
      </p>
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
      <Button variant="contained">validation</Button>
    </div>
  );
}
