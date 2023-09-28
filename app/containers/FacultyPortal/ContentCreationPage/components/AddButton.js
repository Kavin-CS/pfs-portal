import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {KEY_POSITION} from '../../../../utils/constants';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 20,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  buttonMain: {
    color: theme.palette.KenColors.primary,
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',

  }
}));

export default function AddButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const {t} = useTranslation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.buttonMain}
        >
          Add
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === KEY_POSITION.bottom ? KEY_POSITION.center_top : KEY_POSITION.center_bottom }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>{t("headings:Assignments")}</MenuItem>
                    <MenuItem onClick={handleClose}>{t("headings:Assesments")}</MenuItem>
                    <MenuItem onClick={handleClose}>{t("Lesson")}</MenuItem>
                    <MenuItem onClick={handleClose}>{t("Notes")}</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
