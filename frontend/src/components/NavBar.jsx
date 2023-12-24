import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Your App Name
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/products">
                Products
              </Link>
              <Typography color="textPrimary">Current Page</Typography>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            {/* Add more items as needed */}
          </List>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default NavBar;
