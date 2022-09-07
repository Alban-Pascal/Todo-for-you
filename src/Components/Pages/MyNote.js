import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import CheckIcon from "@mui/icons-material/Check";

export default function MyNote() {
  return (
    <section className="card">
      <h1>Liste des Notes</h1>
      <ul>
        <Stack>
          <li>
            <Link href="/Note">Note 1</Link>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <CheckIcon />
          </li>
        </Stack>
        <Stack>
          <li>
            Note 2
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <CheckIcon />
          </li>
        </Stack>
        <Stack>
          <li>
            Note 3
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <CheckIcon />
          </li>
        </Stack>
        <Stack>
          <li>
            Note 4
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <CheckIcon />
          </li>
        </Stack>
      </ul>
    </section>
  );
}
