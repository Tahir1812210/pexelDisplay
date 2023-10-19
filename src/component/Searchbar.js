import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  searchBox: {
    width: '20rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    padding: '0.5rem',
    boxSizing: 'border-box',
    color: 'white',
  },

  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderRadius: '20px',
  },
}));

const Searchbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <TextField
        className={classes.searchBox}
        placeholder="Search for photos"
      />
    </Box>
  );
};

export default Searchbar;
