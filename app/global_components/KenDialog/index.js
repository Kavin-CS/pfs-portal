import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KenButton from '../KenButton';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  padding: {
    padding: '16px',
  },
}));

export default function KenDialog(props) {
  const {
    open,
    toggleOpen,
    handleClose,
    title,
    dialogText,
    negativeButtonText,
    positiveButtonText,
    negativeButtonProps,
    positiveButtonProps,
    dialogContent,
    dialogActions,
    children,
    titleContainerStyles,
    maxWidth,
    dialogActionProps,
    negativeButtonClick,
    positiveButtonClick,
    positiveButtonLabelProps,
    negativeButtonLabelProps,
    hidePositiveButton,
    hideNegativeButton,
    Component,
    innerProps,
  } = props;

  const [onPositiveButtonClick, setOnPositiveButtonClick] = React.useState(
    () => positiveButtonClick
  );
  const [onNegativeButtonClick, setOnNegativeButtonClick] = React.useState(
    () =>
      negativeButtonClick ||
      (() => {
        console.log('KenDialog: negative click default');
        toggleOpen(false);
      })
  );
  const [
    positiveButtonClickChange,
    setPositiveButtonClickChange,
  ] = React.useState(0);

  const compRef = React.useRef();

  React.useEffect(() => {
    console.log('KenDialog: effect: ', open);
  }, [open]);

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ minWidth: '362px' }}
        fullWidth
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.padding }}
          style={{ ...titleContainerStyles }}
        >
          {title}
        </DialogTitle>
        {dialogContent || (
          <>
            {dialogText && (
              <DialogContent classes={{ root: classes.padding }}>
                {dialogText && (
                  <DialogContentText>{dialogText}</DialogContentText>
                )}
              </DialogContent>
            )}
          </>
        )}
        <DialogContent classes={{ root: classes.padding }}>
          {children ? children : null}
          {Component && (
            <>
              <Component
                {...innerProps}
                setOnPositiveButtonClick={setOnPositiveButtonClick}
                setOnNegativeButtonClick={setOnNegativeButtonClick}
                // setIsOpen={setIsOpen}
                isOpen={open}
                toggleOpen={toggleOpen}
                ref={compRef}
                positiveButtonClickChange={positiveButtonClickChange}
              />
            </>
          )}
        </DialogContent>
        {dialogActions && (
          <DialogActions {...dialogActionProps}>
            {!hideNegativeButton && (
              <KenButton
                {...negativeButtonProps}
                onClick={() => {
                  console.log('KenDialog: Negative Button Clikc');
                  onNegativeButtonClick();
                }}
                color="primary"
                variant="secondary"
                label={
                  <Typography {...negativeButtonLabelProps}>
                    {negativeButtonText || 'Cancel'}
                  </Typography>
                }
              />
            )}
            {!hidePositiveButton && (
              <KenButton
                onClick={e => {
                  console.log('Positive clicked', onPositiveButtonClick);
                  if (onPositiveButtonClick) {
                    onPositiveButtonClick(e);
                  }
                  setPositiveButtonClickChange(positiveButtonClickChange + 1);
                }}
                color="primary"
                variant="primary"
                {...positiveButtonProps}
                label={
                  <Typography {...positiveButtonLabelProps}>
                    {' '}
                    {positiveButtonText || 'Ok'}
                  </Typography>
                }
              />
            )}
          </DialogActions>
        )}{' '}
      </Dialog>
    </div>
  );
}
