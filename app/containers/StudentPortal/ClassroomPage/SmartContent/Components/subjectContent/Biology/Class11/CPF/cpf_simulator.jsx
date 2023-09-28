import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=Test_for_the_presence_of_Carbohydrate_proteins_and_fats&amp;tempId=olab_ot&amp;linktoken=6f43ba93ab048676fd57a4c4648aefcd&amp;elink_lan=en-IN&amp;elink_title=Detection of Carbohydrates, Proteins and Fats"
        width="800px"
        height="500px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Carbohydrates, Proteins and
          Fats. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=205&cnt=4
        </Typography>
      </div>
    </div>
  );
}
