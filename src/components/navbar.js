import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { title: 'FEATURES', id: '#features' },
  { title: 'ABOUT', id: '#about' },
  { title: 'SERVICES', id: '#services' },
  { title: 'GALLERY', id: '#gallery' },
  { title: 'REVIEWS', id: '#reviews' },
  { title: 'BRANCHES', id: '#branches' },
  { title: 'CONTACT US', id: '#contact-us' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const handleOpenNavMenu = () => {
    // handle opening nav menu
  };
  const handleOpenUserMenu = () => {
    // handle opening user menu
  };

  const handleClick = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5C4033' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rent Droomzzz
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleClick(page.id)}
                sx={{ color: 'white', mx: 1 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          // <Tooltip title="Open settings">
          //   <IconButton onClick={handleOpenUserMenu}>
          //     {/* <Avatar alt="User Avatar" /> */}
          //   </IconButton>
          // </Tooltip>
          {/* User menu */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
