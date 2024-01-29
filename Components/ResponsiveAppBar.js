import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">

        
        <Toolbar sx={{ width: '100%', background: 'linear-gradient(to bottom, rgba(75, 117, 245, 0.758), rgb(20, 20, 133))' }}>
        <img
        src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
        width="40%"
        height="80px"
        align="right"
        alt="Tabs Logo"
        style={{display:'inline'}}
      ></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"}style={{ color: 'white' }}> Home</Link>
          </Typography>
         
          <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/lg"} style={{ color: 'white' }}>Log In</Link>
          </Typography>
          <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/ct"} style={{ color: 'white' }}>Contact Us</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// import * as React from 'react';
// import { styled } from '@mui/system';
// import { Tabs } from '@mui/base/Tabs';
// import { TabsList as BaseTabsList } from '@mui/base/TabsList';
// import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
// import { buttonClasses } from '@mui/base/Button';
// import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

// export default function UnstyledTabsIntroduction() {
//   return (
//     <Tabs defaultValue={0}>
//       <TabsList>
//         <Tab value={0}>My account</Tab>
//         <Tab value={1}>Profile</Tab>
//         <Tab value={2}>Language</Tab>
//       </TabsList>
//       <TabPanel value={0}>My account page</TabPanel>
//       <TabPanel value={1}>Profile page</TabPanel>
//       <TabPanel value={2}>Language page</TabPanel>
//     </Tabs>
//   );
// }

// const blue = {
//   50: '#F0F7FF',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E5EAF2',
//   200: '#DAE2ED',
//   300: '#C7D0DD',
//   400: '#B0B8C4',
//   500: '#9DA8B7',
//   600: '#6B7A90',
//   700: '#434D5B',
//   800: '#303740',
//   900: '#1C2025',
// };

// const Tab = styled(BaseTab)`
//   font-family: 'IBM Plex Sans', sans-serif;
//   color: #fff;
//   cursor: pointer;
//   font-size: 0.875rem;
//   font-weight: 600;
//   background-color: transparent;
//   width: 100%;
//   padding: 10px 12px;
//   margin: 6px;
//   border: none;
//   border-radius: 7px;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: ${blue[400]};
//   }

//   &:focus {
//     color: #fff;
//     outline: 3px solid ${blue[200]};
//   }

//   &.${tabClasses.selected} {
//     background-color: #fff;
//     color: ${blue[600]};
//   }

//   &.${buttonClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const TabPanel = styled(BaseTabPanel)(
//   ({ theme }) => `
//   width: 100%;
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   padding: 20px 12px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   border-radius: 12px;
//   opacity: 0.6;
//   `,
// );

// const TabsList = styled(BaseTabsList)(
//   ({ theme }) => `
//   min-width: 400px;
//   background-color: ${blue[500]};
//   border-radius: 12px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
//   box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
//   `,
// );