import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  navbar: {
    backgroundColor: 'transparent',
    color: '#ffff',
    padding: '1rem',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
  },
  logo: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  button: {
    color: '#ffff',
    textDecoration: 'none',
    fontSize: '1rem',
    margin: '0 1rem',
    '&:hover': {
      color: 'grey',
      backgroundColor: 'transparent',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Pexels
        </Typography>
        <Button color="inherit" className={classes.button}>
          Search
        </Button>
        <Button color="inherit" className={classes.button}>
          Discover
        </Button>
        <Button color="inherit" className={classes.button}>
          Contribute
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
