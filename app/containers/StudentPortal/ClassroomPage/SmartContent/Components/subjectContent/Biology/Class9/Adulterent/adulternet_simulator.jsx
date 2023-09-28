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
        src="//amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=Test_the_presence_of_adulterant_metanil_yellow_in_dal&amp;tempId=olab&amp;linktoken=c0eeb6afebe81dda76114d8fe61ad194&amp;elink_lan=en-IN&amp;elink_title=Detection of Adulterant in Dal"
        width="1000px"
        height="750px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Adulterant in Dal.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=122&cnt=270
        </Typography>
      </div>
    </div>
  );
}
