import React from 'react';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DropDown from '../../../components/KenSelect/index';
import TabContent from './components/tabs';
import AddButton from './components/AddButton';




const useStyles = makeStyles(theme => ({
  root: {
    zIndex:-1,
  },
  dropDown: {
    display: 'flex',
  },
  button: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
  }
}));


export default function ContentCreationPage() {
  const classes = useStyles();


  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container direction='row' justify='space-between' alignItems='center' >
        <Grid item >
          <div className={classes.dropDown}>
            <div>
              <DropDown />
            </div>
            <div style={{ marginLeft: 16 }}>
              <DropDown />
            </div>
          </div>

        </Grid>
        <Grid item >
          <AddButton/>
        </Grid>
      </Grid>
      <Grid item>
        <TabContent />
      </Grid>
    </Grid>
  );
}
