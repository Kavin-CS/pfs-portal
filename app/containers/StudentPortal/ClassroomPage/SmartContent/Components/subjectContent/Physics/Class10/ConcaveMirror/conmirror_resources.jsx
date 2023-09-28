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
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
      fontSize: 18,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <ol>
        <li>
          <h3 className={classes.secondaryTag}>
            &nbsp;Read about the&nbsp;
            <a
              href="http://www.physicsclassroom.com/class/refln/u13l1c.cfm"
              target="_blank"
            >
              Reflection and its Advantage
            </a>
          </h3>
        </li>
        <li>
          <h3 className={classes.secondaryTag}>
            &nbsp;Read about the{' '}
            <a
              href="http://en.wikipedia.org/wiki/Reflection_%28physics%29"
              target="_blank"
            >
              Physics of Reflection
            </a>
          </h3>
        </li>
        <li>
          <h3 className={classes.secondaryTag}>
            &nbsp;Read about the{' '}
            <a
              href="http://www.goiit.com/posts/show/813417/geometric-optics-rules-for-image-formation-804244.htm"
              target="_blank"
            >
              http://www.goiit.com/posts/show/813417/geometric-optics-rules-for-image-formation-804244.htm
            </a>
          </h3>
        </li>
        <li>
          <h3 className={classes.secondaryTag}>
            &nbsp;<b>Read about the</b>{' '}
            <a href="http://www.thealy.com/LCPhysics/notes/spherical_mirrors.htm">
              http://www.thealy.com/LCPhysics/notes/spherical_mirrors.htm
            </a>
          </h3>
        </li>
        <li>
          <h3 className={classes.secondaryTag}>Watch a video</h3>
        </li>
      </ol>
      
      <p>
        <iframe
          allowfullscreen=""
          src="https://www.youtube.com/embed/-mepEbPJB0Y"
          frameborder="0"
          height="315"
          width="420"
        />
      </p>
      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To find focal length of a Concave Mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=67&cnt=6
        </Typography>
      </div>
    </div>
  );
}
