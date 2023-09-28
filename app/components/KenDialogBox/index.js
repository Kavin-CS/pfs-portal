import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    height: 'calc(100% - 64px)',
  },
  dialogContentText: {
    height: '100%',
    margin: '0px',
  },
}));

export default function AlertDialog(props) {
  const {
    open,
    handleClose,
    html,
    title,
    maxWidth,
    children,
    titleStyle,
    dialogActionFlag = true,
    styleOverrides,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={maxWidth}
        classes={{
          paper: styleOverrides?.dialogPaper
            ? styleOverrides.dialogPaper
            : classes.dialogPaper,
        }}
      >
        {title && (
          <DialogTitle id="alert-dialog-title" className={titleStyle}>
            {title}
          </DialogTitle>
        )}
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.dialogContentText}
          >
            {html || children}
          </DialogContentText>
        </DialogContent>
        {dialogActionFlag && (
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              {t('labels:Ok')}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
