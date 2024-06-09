import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const LoginButton = ({ to, buttonText }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
      <Link to={to}>
        <Button variant="contained">
          {buttonText}
        </Button>
      </Link>
    </Stack>
  );
};

export default LoginButton;
