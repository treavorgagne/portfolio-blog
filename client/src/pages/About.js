import React from 'react';
import {
  Fab,
  Typography,
  Box,
  TextField,
  Tooltip,
  Container,
} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';


export default function About() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="div" gutterBottom>
        About me page
      </Typography>
      <TextField color="secondary" id="outlined-basic" label="Outlined" variant="outlined" />
      <Tooltip title="add" placement="right">
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Container>
  )
}