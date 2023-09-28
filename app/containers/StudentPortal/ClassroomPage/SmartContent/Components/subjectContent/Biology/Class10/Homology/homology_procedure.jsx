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

import LeafPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Leaf1/leaf-pro1.jpg';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Simulator Procedure (as performed through the online labs)</h1>

      <ul>
        <li>
          &nbsp;&nbsp;&nbsp; You can select the trait by using ‘Select the
          trait’ drop down list.
        </li>
        <li>
          &nbsp;&nbsp;&nbsp; You can select the category of species by using
          ‘Select the category of species’ drop down list.
        </li>
        <li>
          &nbsp;&nbsp;&nbsp; Now click on the appropriate part on species 2
          which&nbsp; matches with the highlighted part of species 1.
        </li>
        <li>
          &nbsp;&nbsp;&nbsp; On selecting the correct part, the structure of the
          species is displayed below.
        </li>
        <li>
          &nbsp;&nbsp;&nbsp; Click on the ‘Next pair’ button to get different
          combinations of species with the same trait.
        </li>
        <li>
          &nbsp;&nbsp;&nbsp; You can redo the experiment by clicking on the
          ‘Reload
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Homology and Analogy. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=132&cnt=2
        </Typography>
      </div>
    </div>
  );
}
