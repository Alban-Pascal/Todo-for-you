import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Button } from "@mui/material";

export default function CreateNote() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="card">
        <h1>Crée une Note</h1>
        <div>
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
                label="Titre de la note"
                multiline
                maxRows={4}
                value={value}
                onChange={handleChange}
                variant="filled"
              />
            </div>
            <div>
              <TextField
                id="filled-textarea"
                label="Nom du créateur"
                placeholder="Placeholder"
                multiline
                variant="filled"
              />
            </div>
            <div>
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
            <Typography component="legend" color="black">
              Evaluation
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </div>
      <div className="validation">
        <Button variant="contained" endIcon={<BeenhereIcon />}>
          validation
        </Button>
      </div>
    </div>
  );
}
