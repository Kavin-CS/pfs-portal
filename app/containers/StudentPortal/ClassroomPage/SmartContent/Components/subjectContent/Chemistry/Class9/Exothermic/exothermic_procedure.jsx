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
      <h2 className={classes.secondaryTag}>As performed in the lab:</h2>

      

      <h3 className={classes.secondaryTag}>Exothermic Reaction (Combustion of Carbon):</h3>

      <p marginLeft="40px;">
        <strong>
          <span fontSize="14px;">Material Required:&nbsp;</span>
        </strong>
      </p>

      <p marginLeft="40px;">
        <span fontSize="14px;">
          A small piece of coal, a burner, a hanger and a glass jar containing
          oxygen.
        </span>
      </p>

      <p marginLeft="40px;">
        <strong>
          <span fontSize="14px;">Procedure:</span>
        </strong>
      </p>

      <ol marginLeft="40px;">
        <li>
          <span fontSize="14px;">Take a small piece of coal in a hanger.</span>
        </li>
        <li>
          <span fontSize="14px;">
            Hold the hanger and heat it over a flame to red hot, as shown in the
            animation.
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            Now introduce it into a gas jar containing Oxygen.
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            What do you observe? Note down the change if any?
          </span>
        </li>
      </ol>

      

      <h3 className={classes.secondaryTag}>Endothermic Reaction (Vapourisation):</h3>

      <p marginLeft="40px;">
        <strong>
          <span fontSize="14px;">Material Required:&nbsp;</span>
        </strong>
      </p>

      <p marginLeft="40px;">
        <span fontSize="14px;">A beaker, a beaker stand, and a burner.</span>
      </p>

      <p marginLeft="40px;">
        <strong>
          <span fontSize="14px;">Procedure:</span>
        </strong>
      </p>

      <ol marginLeft="40px;">
        <li>
          <span fontSize="14px;">
            Fix the beaker on beaker stand and take some water in it.
          </span>
        </li>
        <li>
          <span fontSize="14px;">Light the burner and place beaker on it.</span>
        </li>
        <li>
          <span fontSize="14px;">Wait for the water to boil.</span>
        </li>
        <li>
          <span fontSize="14px;">
            Few minutes later observe the water being vapourised.&nbsp;
          </span>
          (To collect vapours place another beaker upside down over it.)
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Exothermic and Endothermic Reactions.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=92&cnt=2
        </Typography>
      </div>
    </div>
  );
}
