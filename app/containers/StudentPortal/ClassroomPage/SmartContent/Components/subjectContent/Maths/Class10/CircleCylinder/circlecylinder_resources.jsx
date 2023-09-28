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
      <p>&nbsp;</p>

      <ol>
        <li>
          <p>
            <font size="4">
              <font face="Verdana, sans-serif">NCERT 10</font>
              <sup>TH</sup> TEXTBOOK AND LAB MANUAL.
            </font>
          </p>
        </li>
        <li>
          <p>
            <a href="http://en.wikipedia.org/wiki/Cylinder_%28geometry%29">
              <font size="4">
                http://en.wikipedia.org/wiki/Cylinder_%28geometry%29
              </font>
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="http://mathbydesign.thinkport.org/images/pdfs/Hint_VolumeofCylinder.pdf">
              <font size="4">
                http://mathbydesign.thinkport.org/images/pdfs/Hint_VolumeofCylinder.pdf
              </font>
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="http://www.sophia.org/volume-of-a-right-circular-cylinder-concept">
              <font size="4">
                http://www.sophia.org/volume-of-a-right-circular-cylinder-concept
              </font>
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="http://www.wisc-online.com/objects/ViewObject.aspx?ID=GEM1604">
              <font size="4">
                <font face="Verdana, sans-serif">http://www.wisc-</font>
                online.com/objects/ViewObject.aspx?ID=GEM1604
              </font>
            </a>
          </p>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of right circular cylinder.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=163&cnt=6
        </Typography>
      </div>
    </div>
  );
}
