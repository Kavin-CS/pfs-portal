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
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p />
      <p marginBottom="0cm">
        <a href="//www.youtube.com/watch?v=qwz80uMEvN4">
          <strong>//www.youtube.com/watch?v=qwz80uMEvN4</strong>
        </a>
      </p>
      <p marginBottom="0cm">
        <strong>
          <br />
        </strong>
      </p>
      <p marginBottom="0cm">
        <a href="//www.youtube.com/watch?v=0B0v0NCHZx0">
          <strong>//www.youtube.com/watch?v=0B0v0NCHZx0</strong>
        </a>
      </p>
      <p marginBottom="0cm">
        <strong>
          <br />
        </strong>
      </p>
      <p marginBottom="0cm">
        <a href="http://www.geogebratube.org/material/show/id/10769">
          <strong>http://www.geogebratube.org/material/show/id/10769</strong>
        </a>
      </p>
      <p marginBottom="0cm">
        <strong>
          <br />
        </strong>
      </p>
      <p marginBottom="0cm">
        <a href="http://wiki.answers.com/Q/Angle_subtended_by_an_arc_is_double_the_angle_subtended_by_it_at_any_other_point_on_the_remaining_part_of_the_circle">
          <strong>
            http://wiki.answers.com/Q/Angle_subtended_by_an_arc_is_double_the_angle_subtended_by_it_at_any_other_point_on_the_remaining_part_of_the_circle
          </strong>
        </a>
      </p>
      <p marginBottom="0cm">
        <strong>
          <br />
        </strong>
      </p>
      <p marginBottom="0cm">
        <span color="rgb(0, 0, 255);">
          <u>
            <strong>
              http://www.mathsrevision.net/gcse-maths-revision/shape-and-space/circle-theorem
            </strong>
          </u>
        </span>
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Angle at the centre of a circle by an arc.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=162&cnt=6
        </Typography>
      </div>
    </div>
  );
}
