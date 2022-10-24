import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
function handleClick() {
  window.location.pathname = "/auth";
}

function handleClickHome() {
  window.location.pathname = "/";
}

export default function Header() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button variant = "contained" onClick={handleClickHome}> ABOBA </Button>  
          </Typography>
          <Button variant='contained' onClick={handleClick}> Войти </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

