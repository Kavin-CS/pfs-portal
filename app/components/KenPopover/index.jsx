import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function KenPopover(props) {
  const classes = useStyles();
  const { anchorEl, handleClose, id, open } = props;

  return (
    <div>
      <Popover
        {...props}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ root: classes.root, paper: classes.paper }}
      >
        {props.children}
      </Popover>
    </div>
  );
}
