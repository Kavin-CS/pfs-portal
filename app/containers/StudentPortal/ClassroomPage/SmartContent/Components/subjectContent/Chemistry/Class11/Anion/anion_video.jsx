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
        <p>
          <strong>1. Tests for Sulphate Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/-YVH0DXbqmo?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>2. Tests for Phosphate Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/FdVO1zX6doA?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>3. Tests for Carbonate Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/PXB8McUBNT4?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>4. Tests for Sulphite Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/-pdKtHePATQ?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>5. Tests for Nitrate Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/fXo39WiDNhg?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>6. Tests for Oxalate Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/0B_Mq5uY9Ng?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>7. Tests for Nitrite Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/CWSMiXq-7Wc?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>8. Tests for Chloride Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/O3d_NKyhIwg?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>9. Tests for Bromide Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/dMK4RoYh01o?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>10. Tests for Sulphide Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/3bxac77mzuI?rel=0"
            width="640"
          />
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>11. Tests for Iodide Ion:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/YVs24Q9yjgI?rel=0"
            width="640"
          />
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>12. Chemical tests for acetate:</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="http://youtube.com/embed/Iqn4UdKY1MY?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2015). Qualitative Analysis of Anions.
            Retrieved 30 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=7&sim=31&cnt=529
          </Typography>
        </div>
      </div>
    </div>
  );
}
