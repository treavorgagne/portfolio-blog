import React from 'react';
import {
  Typography,
  Container,
} from '@mui/material/';

export default function Blog() {
  return (
    <Container sx={{ bgcolor: '#0c53a6', p: 2 }} maxWidth="lg">
        <Typography variant="h2" component="div" gutterBottom>
            Blog Page
        </Typography>
    </Container>
  )
}