import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ConcaveMirrorThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/ConcaveMirror1/conmirror-the1.jpg';


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
      <h1 className={classes.headTag}>Objective -</h1>

      <p>
        <span>
          To determine the focal length of a concave mirror, by obtaining image
          of a distant object.
        </span>
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <ol>
        <li>
          <span>
            A concave mirror, like a plane mirror, obeys the laws of reflection
            of light.
          </span>
        </li>
        <li>
          <span>
            Rays of light from object - The rays of light coming from a distant
            object e.g. sun or a distant building can be considered to be
            parallel to each other. When these parallel rays of light fall on a
            concave mirror along its axis, reflect and meet at a point in front
            of the mirror, which is called as&nbsp;
            <strong>Principal focus</strong>&nbsp;of the mirror.
          </span>
        </li>
        <li>
          <span>
            A&nbsp;<strong>real</strong>,&nbsp;<strong>inverted</strong>
            &nbsp;and&nbsp;<strong>very small</strong>&nbsp;image size is formed
            at the focus of the mirror.
          </span>
        </li>
        <li>
          <span>
            Focal Length - The distance between the pole <b>P</b>&nbsp;of the
            concave mirror and the focus&nbsp;<strong>F</strong>&nbsp;is the
            focal length of the concave mirror. Thus, the focal length of a
            concave mirror can be estimated by obtaining a{' '}
            <strong>'Real image'</strong>&nbsp;of a distant object at its
            focus,&nbsp;as shown in the figure.
          </span>
        </li>
      </ol>

      <p>
        <span>​</span>
        <br />
        <span>
          &nbsp; &nbsp;&nbsp;
          <img
            align="middle"
            alt=""
            src={ConcaveMirrorThe1}
          />
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To find focal length of a Concave Mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=67&cnt=1
        </Typography>
      </div>
    </div>
  );
}
