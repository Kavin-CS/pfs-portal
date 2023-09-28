import React from 'react';
import { makeStyles, Box, Grid } from '@material-ui/core';
import KenAutoComplete from '../../../../../../../components/KenAutoComplete';
import ArrowLeft from '../../../../../../../assets/icons/arrowLeft.svg';
import ArrowRight from '../../../../../../../assets/icons/arrowRight.svg';

const useStyles = makeStyles(theme => ({
  actionIcon: {
    cursor: 'pointer',
  },
  avatar: {
    margin: '0 auto',
  },
  text: {
    textAlign: 'center',
  },
  root: {
    padding: 14,
  },
}));

const StudentProfileCardHeader = props => {
  const { data, setStudentInfo, studentInfo } = props;
  const classes = useStyles();

  const handleArrows = event => {
    let ind;
    data.forEach((el, index) => {
      if (studentInfo.ContactId === el.ContactId) {
        ind = index;
      }
    });
    if (event.target.id === 'left') {
      ind = ind - 1;
    } else {
      ind = ind + 1;
    }
    data.forEach((el, index) => {
      if (index === ind) {
        setStudentInfo(el);
      }
    });
  };

  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item md={2} xs={2} sm={2} className={classes.text}>
        <img
          src={ArrowLeft}
          id="left"
          className={classes.actionIcon}
          onClick={e => {
            handleArrows(e);
          }}
        />
      </Grid>
      <Grid item md={8} xs={8} sm={8} className={classes.text}>
        <KenAutoComplete
          options={data}
          placeholder="Search..."
          setData={setStudentInfo}
        />
      </Grid>
      <Grid item md={2} xs={2} sm={2} className={classes.text}>
        <img
          src={ArrowRight}
          id="right"
          className={classes.actionIcon}
          onClick={e => {
            handleArrows(e);
          }}
        />
      </Grid>
    </Grid>
  );
};
export default StudentProfileCardHeader;
