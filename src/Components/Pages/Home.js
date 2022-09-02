import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export default function Home() {
  return (
    <div>
      <h1> Content de vous revoir</h1>

      <h2>Consulter </h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="hover">
          {"Mes Todo"}
        </Link>
        <Link href="#" underline="hover">
          {"Mes Notes"}
        </Link>
        <div>
          {" "}
          <h2>Crée</h2>
        </div>
        <Link href="#" underline="hover">
          {"Une Note"}
        </Link>
        <Link href="#" underline="hover">
          {"Un Todo"}
        </Link>
      </Box>
    </div>
  );
}
