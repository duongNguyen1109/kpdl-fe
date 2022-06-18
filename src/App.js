import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Management from './pages/management';


const pages = ['Home', 'About us', 'Store Manager'];

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  let navigate = useNavigate();
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    let selectPage = event.target.name;
    if(selectPage === 'Home'){
      navigate("/");
    }else if( selectPage === 'About us'){
      navigate("/about");
    }else if(selectPage === 'Store Manager'){
      navigate("/management");
    }
  };

  return (
    <div>
      <AppBar position="static" sx ={{backgroundColor: '#f4511e'}}>
        <Container maxWidth="xl">
          <Toolbar  disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { flexGrow: 1, xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BUY YOUR BIKE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BUY YOUR BIKE
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  name = {page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 3, fontWeight: 200, my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/about' element = {<About />}></Route>
        <Route path = '/management' element = {<Management />}></Route>
      </Routes>
    </div>
  );
}

export default App;
