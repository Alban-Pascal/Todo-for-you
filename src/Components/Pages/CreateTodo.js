import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Button from "@mui/material/Button";

export default function CreateTodo() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="card">
        <h1>Crée un Todo</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="filled-multiline-flexible"
              label=" Todo"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="filled"
            />
          </div>
          <div>
            <h2>A faire dans :</h2>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label=" the day"
              />
              <FormControlLabel control={<Checkbox />} label="week" />
            </FormGroup>
          </div>
          <div>
            <TextField
              id="filled-multiline-static"
              label="Ma Note"
              multiline
              rows={6}
              variant="filled"
            />
          </div>
        </Box>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Evaluation</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
      <Button variant="contained" endIcon={<BeenhereIcon />}>
        validation
      </Button>
    </div>
  );
}
