import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function CreateNote() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>Crée une Note</h1>
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
            label="Titre de la note"
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
            rows={4}
            variant="filled"
          />
        </div>
      </Box>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
    </div>
  );
}
