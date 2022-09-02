import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CreateFolder() {
  return (
    <div>
      <h1>Nouveau Dossier</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Nom du dossier" variant="filled" />
      </Box>
      <h3> Importer une de vos image</h3>
      <input type="file" id="myFile" />
      <h3> Ou choisiser une couleur</h3>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success">
          Valider
        </Button>
        <Button variant="outlined" color="error">
          annuler
        </Button>
      </Stack>
    </div>
  );
}
