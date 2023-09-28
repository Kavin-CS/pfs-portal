import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import HookeThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Hooke1/hooke-the1.png';
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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>
          <span>
            <span>
              Objective
            </span>
          </span>
        </strong>
      </p>

      <p>
        <span>
          <span>
            To verify Hooke's law - Hooke's law
            <span>
              {' '}
              states that the extent to which an elastic material will change
              size and shape under stress is directly proportional to the amount
              of stress applied to it.
            </span>
          </span>
        </span>
      </p>

      <p>
        <span>
          <span>
            <strong>
              Theory
            </strong>
          </span>
        </span>
      </p>

      <p>
        <span>
          <span>
            An ideal spring is remarkable in the sense that it is a system where
            the generated force is linearly dependent on how far it is
            stretched, this behavior is described by Hooke's law. According to
            Hooke's Law stated above that to extend a spring by an amount{' '}
            <strong>dx</strong> from its previous position, one needs a force{' '}
            <strong>F</strong> which is determined by<strong> F = kdx.</strong>
            &nbsp; Here <strong>k</strong> is the spring constant which is a
            quality of each spring.&nbsp; Therefore, in order to verify Hooke's
            Law, you must verify that the force <strong>F</strong> and the
            distance at which the spring is stretched are proportional to each
            other (that just means linearly dependent on each other), and that
            the constant of proportionality is <strong>k</strong>.
          </span>
        </span>
      </p>

      <h3>
        <img alt="" src={HookeThe1} height='400' width='400' />
      </h3>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Hooke's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=68&cnt=1
        </Typography>
      </div>
    </div>
  );
}
