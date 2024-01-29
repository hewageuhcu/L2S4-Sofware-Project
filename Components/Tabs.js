import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Tabs = ({ buttonData }) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {buttonData.map((button, index) => (
        <Button
          key={index}
          variant="contained"
          style={{ width: '40%', height: '40px', backgroundColor: 'rgb(108, 148, 248)' }}
        >
          {button.link ? (
            <Link to={button.link}>{button.label}</Link>
          ) : (
            button.label
          )}
        </Button>
      ))}
    </Stack>
  );
};

export default Tabs;
