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
      <p>
        <span>
          <span>
            Snell's law of refraction animation
          </span>
        </span>
        <span>
          <span>
            <strong>
              <em>&nbsp; </em>
            </strong>
          </span>
        </span>
        <a
          target="blank"
          
          href="http://www.tutorvista.com/content/physics/physics-ii/light-refraction/alternate-method.php"
          class="myref"
        >
          (click here to watch)
        </a>
      </p>
      <ul>
        <li>
          <big>About Snells Law ( </big>{' '}
          <a
            target="blank"
            
            href="http://en.wikipedia.org/wiki/Snell%27s_law"
            class="myref"
          >
            <big>read here</big>
          </a>
          <big> )</big>
        </li>
        <li>
          Applications of Total Internal Reflection{' '}
          <a
            target="blank"
            class="myref"
            
            href="http://en.wikipedia.org/wiki/Total_internal_reflection#Applications"
          >
            (click here to read)
          </a>
        </li>
        <li>
          Mirage and looming{' '}
          <a
            target="blank"
            class="myref"
            
            href="http://www.tutorvista.com/content/physics/physics-ii/light-refraction/mirage-and-looming.php"
          >
            (click here to read)
          </a>
          <br />
          &nbsp;
        </li>
      </ul>
      <p>
        <iframe
          src="//www.youtube.com/embed/y55tzg_jW9I"
          allowfullscreen=""
          frameborder="0"
          height="315"
          width="560"
        />
      </p>
      <p>
        <big>
          <strong>Khan's Academy - Snells Law of Refraction</strong>
        </big>
      </p>
     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study refraction of light in
          rectangular glass slab. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=37&cnt=6
        </Typography>
      </div>
    </div>
  );
}
