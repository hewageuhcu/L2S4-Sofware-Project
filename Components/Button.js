import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
      <Link to="/wl">
        <Button variant="contained">
          Login
        </Button>
      </Link>
    </Stack>
  );
}