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
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Video() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div className={classes.animationWrap}>
        <h2 className={classes.header}>Tests for Ammonium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/GTZBs3iZgg0?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Group I Lead Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/RBVKBlwyeT4?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Copper (II) ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/czm2pwjiftc?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Barium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/gaamIjai20o?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Lead (II) Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/f7PfeaA8kow?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Calcium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/uKy424Vf_44?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Strontium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/M8YqOhM2J54?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Ferric Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/PPG9XIp0HhY?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Magnesium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/j8a7ItqTowc?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Cobalt Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/MRELKbMFF_E?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Zinc Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/v7_glUDP_sk?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Aluminium Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/0HPi7X2yhbw?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Nickel Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/TVNRUMMCg4o?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>Tests for Manganese Ion</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/Abcyr8AqwAc?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2016). Qualitative Analysis of Cations.
            Retrieved 30 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=7&sim=180&cnt=515
          </Typography>
        </div>
      </div>
    </div>
  );
}
