import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import AP1 from '../../../../../../../../../assets/Images/Subjects/Maths/AP1/ap-the1.jpg';
import AP2 from '../../../../../../../../../assets/Images/Subjects/Maths/AP1/ap-the2.jpg';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },

  headName: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.secondaryTag}>Objective:</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            To verify that the given sequence is an arithmetic progression.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Theory:</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            An arithmetic progression (AP) or arithmetic sequence is a sequence
            of numbers such that the difference between the consecutive terms is
            constant. For instance, the sequence 5, 7, 9, 11, 13, 15 … is an
            arithmetic progression with common difference of 2.
            <br />
            <br />
            If the initial term of an arithmetic progression is a(1) and the
            common difference of successive members is d, then the nth term of
            the sequence (a(n)) is given by:
          </span>
        </span>
        <br />
        <br />
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            &nbsp;&nbsp;&nbsp;&nbsp; a<sub>n</sub> = a<sub>1</sub> + (n - 1)d,
            <br />
            <br />
            and in general
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; a<sub>n</sub> = a<sub>m</sub> + (n - m)d.
            <br />
            <br />A finite portion of an arithmetic progression is called a
            finite arithmetic progression and sometimes just called an
            arithmetic progression. The sum of a finite arithmetic progression
            is called an arithmetic series.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            <strong>Examples:-</strong>
          </span>
        </span>
      </h3>

      <p>
        <span fontSize="14px;">
          1- Sequence of 1,4,7,10.......( This is an AP)
        </span>
      </p>

      <p>
        <img
          alt=""
          height="266"
          src={AP1}
          width="404"
        />
      </p>

      <p>
        <span fontSize="14px;">
          2- Sequence of 1,4,6,9........( This is not an AP)
        </span>
      </p>

      <p>
        <img
          alt=""
          height="278"
          src={AP2}
          width="356"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Arithmetic progression. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=167&cnt=1
        </Typography>
      </div>
    </div>
  );
}
