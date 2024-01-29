import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { lightBlue } from '@mui/material/colors';

export default function MenuSimple() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <MenuButton>Filter By</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('Customer')}>Customer</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Date')}> Date</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Team Member')}>Team Member</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Vehicle Number')}>Vehicle Number</MenuItem>
        <MenuItem onClick={createHandleMenuClick('To Be Invoiced')}>To Be Invoiced</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Invoiced')}>Invoiced</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const lightblue = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
const StyledMenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? lightBlue[900] : '#fff'};
border: 1px solid ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[200]};
color: ${theme.palette.mode === 'dark' ? lightBlue[200] :lightBlue[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? lightBlue[800] :lightBlue[50]};
      border-color: ${theme.palette.mode === 'dark' ? lightBlue[600] : lightBlue[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
  );
  

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? lightBlue[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[200]};
  color: ${theme.palette.mode === 'dark' ? lightBlue[300] :lightBlue[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? lightBlue[800] :lightBlue[100]};
    color: ${theme.palette.mode === 'dark' ?lightBlue[300] : lightBlue[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ?lightBlue[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[200]};
  color: ${theme.palette.mode === 'dark' ? lightBlue[200] : lightBlue[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? lightBlue[800] : lightBlue[50]};
    border-color: ${theme.palette.mode === 'dark' ?lightBlue[600] : lightBlue[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? lightBlue[700] : lightBlue[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);