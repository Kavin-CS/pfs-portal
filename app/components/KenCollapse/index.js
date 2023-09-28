import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { Box, Grid } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.KenColors.lightGray10,
  },

  primaryText: {
    fontSize: 12,
    marginLeft: 12,
    color: theme.palette.KenColors.neutral400,
  },
  header: {
    cursor: 'pointer',
    padding: 8,
  },
}));

export default function KenAvatar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { label, children } = props;

  return (
    <Box className={open ? classes.wrapper : classes.container}>
      <Grid
        className={classes.header}
        container
        justify="space-between"
        alignItems="center"
        onClick={handleClick}
      >
        <Typography className={classes.primaryText}>{label}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Grid>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Box>
  );
}
