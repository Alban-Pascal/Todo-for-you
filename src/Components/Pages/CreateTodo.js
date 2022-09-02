import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function CreateTodo() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>Crée un Todo</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Titre du Todo"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Nom du créateur"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
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
  );
}
