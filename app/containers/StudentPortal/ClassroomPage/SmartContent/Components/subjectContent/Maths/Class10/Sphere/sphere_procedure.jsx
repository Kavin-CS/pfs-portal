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
    <div className={classes.divContent}>
      <div class="divContent">
        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>As performed in the real lab:</span>
            </span>
          </strong>
        </h2>

        <h2 className={classes.secondaryTag}>
          <strong>
            <span>
              <span>Materials required:</span>
            </span>
          </strong>
        </h2>

        <p>
          <span>
            <span>
              A hollow sphere and two cylinders whose base diameter and height
              are equal to the diameter of the sphere, sand.
            </span>
          </span>
        </p>

        <h2 className={classes.secondaryTag}>Procedure:</h2>

        <ol>
          <li>
            <span>
              Fill the hollow sphere with sand once and empty it into one of the
              cylinders.
            </span>
          </li>
          <li>
            <span>
              Fill the hollow sphere a second time with sand and empty it into
              the second cylinder.
            </span>
          </li>
          <li>
            <span>
              Fill the hollow sphere a third time and empty it into the
              remaining spaces of the two cylinders.
            </span>
          </li>
        </ol>

        <p>
          <strong>
            <span>
              <span>As performed in the simulator:</span>
            </span>
          </strong>
        </p>

        <ol>
          <li>
            <span>
              <span>
                Generate a sphere of diameter 2r and two cylinders of height 2r
                each. Use checkboxes in the toolbox to generate a sphere and two
                cylinders.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Click on "Next" to proceed. Use the sphere in the next step to
                fill both cylinders with sand.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Now, click on the jug to fill the hollow sphere completely with
                the sand.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                The sphere is now completely filled with sand. Now, pour the
                sand from the sphere into the left cylinder. Place the sphere
                above left cylinder to pour the sand from the sphere into the
                cylinderClick again on the jug to fill the sphere with sand.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Click on the jug again to fill the hollow sphere completely with
                the sand.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                The sphere is now completely filled with sand. Now, pour the
                sand from the sphere into the right cylinder. Place the sphere
                above right cylinder to pour the sand from the sphere into the
                cylinder
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>
                Place the sphere above left cylinder followed by the right
                cylinder to fill them completely up to their brim.
              </span>
            </span>
          </li>
          <li>
            <span>
              <span>Follow the steps of derivation.</span>
            </span>
          </li>
        </ol>

        <p>
          <strong>
            <span>
              <span>Observations:</span>
            </span>
          </strong>
        </p>

        <ol>
          <li>
            <span>
              Students observe that the total sand emptied in three pourings
              fill both the cylinders completely.
            </span>
          </li>
          <li>
            <span>
              They, therefore, conclude that 3 times the volume of sphere = 2
              times the volume of cylinder = 2 π r<sup>2&nbsp;</sup>h = 4
              &nbsp;π r<sup>3</sup> ( h = 2r)
            </span>
          </li>
        </ol>

        <p>
          <span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Volume of sphere = 4\3
            &nbsp;π r<sup>3</sup> &nbsp; &nbsp; &nbsp;
          </span>
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Volume of a sphere. Retrieved 28 February
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=165&cnt=750
        </Typography>
      </div>
    </div>
  );
}
