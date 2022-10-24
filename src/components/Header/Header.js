import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


function handleClick() {
  window.location.pathname = "/auth";
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
            ABOBA
          </Typography>
          <Button variant='contained' onClick={handleClick}> Войти </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
if (window.location.pathname === "/auth") {
  return (
    <Button variant='contained' onClick={handleClick}> Войти </Button>
  );
}
