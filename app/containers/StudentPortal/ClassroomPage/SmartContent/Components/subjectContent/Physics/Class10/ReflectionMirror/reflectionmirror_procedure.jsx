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
import ReflectionMirrorPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/ReflectionMirror1/reflectionmirror-pro1.png';


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
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
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
      <h3 className={classes.headTag}>As performed in the lab:</h3>

      <p>
        <span>
          <strong>Materials required</strong>:
        </span>
      </p>

      <p>
        <span>
          A concave mirror, a mirror holder, a semi transparent screen fixed to
          a stand and a small candle with stand.
        </span>
      </p>

      <p>
        <strong>
          <span>Procedure</span>
        </strong>
      </p>

      <ol>
        <li>
          <span>
            Fix the concave mirror in the mirror holder and place it on edge of
            the table.
          </span>
        </li>
        <li>
          <span>
            Mount a small candle vertically on a stand. Place it in front of the
            concave mirror on the left hand side (i.e. shiny surface) say on
            focus 'F'.
          </span>
        </li>
        <li>
          <span>
            Place the screen such that the lower level of screen must be so
            arranged that it remains just above the principal axis of the
            mirror.&nbsp;
          </span>
        </li>
        <li>
          <span>
            Locate a sharp image of candle by adjusting the position of the
            screen. Note and record the position and nature of the image formed
            on the screen.&nbsp;
          </span>
        </li>
        <li>
          <span>
            Repeat the experiment by placing candle at different positions as
            mentioned in observation table [Table 1] below.
          </span>
        </li>
      </ol>

      <p>Table 1: Observation table</p>

      <p>
        <span>
          <img
            alt=""
            src={ReflectionMirrorPro1}
            
          />
        </span>
      </p>

      

      

      <h3 className={classes.headTag}>As performed in the simulator:</h3>

      <ol>
        <li>
          <span>
            Select "Show Labels" checkbox to view all labels in the simulation.
          </span>
        </li>
        <li>
          <span>
            Select "Show Help" checkbox to view help to use the simulation.
          </span>
        </li>
        <li>
          <span>
            Drag the "<strong>Object</strong>" (candle) along principal
            axis&nbsp;by clicking on blue point over the candle and observe the
            nature of the "<strong>Image</strong>" being formed.
          </span>
        </li>
        <li>
          <span>
            Select "Show Rays" checkbox to see how the image gets formed.&nbsp;
          </span>
        </li>
        <li>
          <span>
            Place the object&nbsp;at&nbsp;different positions (as mentioned
            in&nbsp;the&nbsp;observation table [Table 1] given above)&nbsp;and
            note down the observations in the observation table by clicking on{' '}
            <strong>"Observation" </strong>tab.
          </span>
        </li>
        <li>
          <span>
            Click on Submit, to verify your observations.&nbsp;Correct
            observations will be highlighted in green, and incorrect ones will
            be highlighted in red.
          </span>
        </li>
      </ol>

     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study reflection in concave mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=38&cnt=2
        </Typography>
      </div>
    </div>
  );
}
