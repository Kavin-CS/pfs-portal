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
import triangleFab1 from '../../../../../../../../../assets/Images/Subjects/Maths/triangleFig1.png';
// import triangleFab2 from '../../../../../../../../../assets/Images/Subjects/Maths/triangleFab2.png';
import triangleFab3 from '../../../../../../../../../assets/Images/Subjects/Maths/triangleFig1.png';

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
    <div className={classes.divContent}>
      <h2 className={classes.secondaryTag}>Materials required for real lab:</h2>

      <p>
        <span>
          <span>
            Chart paper, pencil, compass, scale, a pair of scissors, cello tape.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        Procedure for Right angled triangle:
      </h2>

      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <ol>
        <li>
          <span>
            <span>Cut a right angle triangle.</span>
          </span>
        </li>
        <li>
          <span>
            <span>Cut a triangle congruent to the right angle triangle.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Align the hypotenuse of the two triangles to obtain a
              rectangle.[Fig(A)]
            </span>
          </span>
        </li>
      </ol>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={triangleFab1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          <span>
            <span>
              Create a ▲ ABC by providing its three sides. For a right angled
              triangle with sides a, b, c where c hypotenuse, then&nbsp;a
              <sup>2</sup> + b<sup>2 </sup>= c<sup>2</sup>.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>Click on ▲ ABC to create its replica.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Place replicated triangle such that hypotenuse of both triangle
              will cover each other.
              <span>
                <span>
                  {' '}
                  Use button 'clockwise' to rotate triangle clockwise.{' '}
                  <span>
                    <span>
                      Use button 'Anticlockwise' to rotate triangle
                      Anticlockwise.
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>See the observation.</span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <p>
        We can observe that two congruent triangles aligned on hypotenuse forms
        a rectangle.
        <br />
        ∴&nbsp; Area of □ ABCD = 2 x Area of ▲ ABC
        <br />
        ∴&nbsp;Area of ▲ ABC = 1/2 x Area of □ ABCD
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;= 1/2 x [base of □ ABCD
        X height of □ ABCD]
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; = 1/2 x [BC x AB]
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; = 1/2 x base of triangle
        ABC x height of triangle ABC=1/2 x base x height
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          </span>
        </span>
      </p>

      <hr />
      <h2 className={classes.secondaryTag}>
        Procedure for Acute Angled Triangle:
      </h2>

      <h2 className={classes.secondaryTag}>As performed in the real lab:</h2>

      <ol>
        <li>
          <span>
            <span>
              Cut an acute angle triangle and draw the perpendicular from the
              vertex to the opposite side.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Cut a triangle congruent to it and cut this triangle along
              perpendicular.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Align the hypotenuse of these cut outs to the given triangle in
              order to obtain a rectangle.[Fig(B)]
            </span>
          </span>
        </li>
      </ol>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>&nbsp;</h2>

      <p>
        <span>
          <img alt="" src={triangleFab1} />
        </span>
      </p>

      <h2 className={classes.secondaryTag}>As performed in simulator:</h2>

      <ol>
        <li>
          <span>
            <span>
              Create a ▲ ABC by providing its three sides.{' '}
              <span>
                <span>
                  Triangle is Acute angled triangle if its square of longest
                  side is less than to sum of products of squares of other two
                  sides.
                </span>
              </span>
            </span>
          </span>
        </li>
        <li>
          Next step is to draw perpendicular from A To line BC.
          <ul>
            <li>
              <span>
                <span>Click on SetSquare in the 'Tools' to use it.</span>
              </span>
            </li>
            <li>
              <span>
                <span>
                  Drag this set square and place at position such that point A
                  will perpendicular to base BC.
                </span>
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span>
            <span>
              Next step is to create two replica triangles of ▲ ABO and ▲ AOC
              respectively. Click on 'Cut Triangle' button to create these
              replicas.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Next step is to place these colored triangles at appropriate
              positions.
            </span>
          </span>
          <ul>
            <li>
              <span>
                <span>
                  First you&nbsp; have to place yellow colored triangle and then
                  red colored triangle.
                </span>
              </span>
            </li>
            <li>
              <span>
                <span>
                  Drag yellow colored triangle and place along with its
                  hypotenuse to side AB of ▲ AOB which finally forms a rectangle
                  AOBD.
                </span>
              </span>
            </li>
            <li>
              <span>
                <span>
                  Drag Red colored triangle and place along with its hypotenuse
                  to side AC of ▲ AOC which finally forms a rectangle AOCE.
                </span>
              </span>
            </li>
            <li>
              <span>
                <span>
                  You can use 'clockwise' button to rotate triangle clockwise.
                </span>
              </span>
            </li>
            <li>
              <span>
                <span>
                  You can use 'Anti-clockwise' button to rotate triangle
                  Anti-clockwise.
                </span>
              </span>
            </li>
          </ul>
        </li>
        <li>See the observation.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <p>
        <span>
          <span>
            As □ DBCE is formed with ▲ ABC and 2 congruent triangles ABO and
            AOC.
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;∴&nbsp; Area of □&nbsp; DBCE =&nbsp; Area of ▲ ABC + (Area of
            ▲ ABO + Area of ▲ AOC)
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            =&nbsp; Area of ▲ ABC + Area of ▲ ABC
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 2 x Area of ▲ ABC
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Area of ▲ ABC = 1/2 x Area of □ DBCE
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            = 1/2 x [base of □ DBCE X height of □ DBCE]
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 1/2 x [BC x DB] =
            1/2 x [BC x AO]
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; = 1/2 x base of
            triangle ABC x height of triangle ABC = 1/2 x base x height{' '}
          </span>
        </span>
      </p>

      <hr />
      <h2 className={classes.secondaryTag}>For Obtuse Angle Triangle:</h2>

      <h2 className={classes.secondaryTag}>As performed in the real lab:</h2>

      <ol>
        <li>
          <span>
            <span>Cut an obtuse angle triangle.</span>
          </span>
        </li>
        <li>
          <span>
            <span>Cut a triangle congruent to this obtuse angle triangle.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              Align the greatest side of the two triangles in order to obtain
              parallelogram.[Fig(C)]
            </span>
          </span>
        </li>
      </ol>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={triangleFab3} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>As performed in simulator:</h2>

      <ol>
        <li>
          <span>
            &nbsp;&nbsp;&nbsp;
            <span> Create a ▲ ABC by providing its three side.</span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Triangle is Obtuse angle triangle&nbsp; if
              its&nbsp; square of longest side is greater than to sum of
              products of squares of other two sides.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Click on ▲ ABC to create its replica.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Place this replicated triangle such that it
              will forms parallelogram.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Use button 'clockwise' to rotate triangle
              clockwise.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Use button 'Anticlockwise' to rotate triangle
              Anticlockwise.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              &nbsp;&nbsp;&nbsp; Place replicated triangle such that hypotenuse
              of both triangle will cover each other.
            </span>
          </span>
        </li>
        <li>
          <span>
            <span>
              <span>
                <span>&nbsp;&nbsp;&nbsp; See the observation.</span>
              </span>
            </span>
          </span>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <p>
        <span>
          <span>
            You can observe that aligning these two congruent triangles forms a
            parallelogram.
          </span>
        </span>
      </p>

      <p>As per property of parallelogram ▲ ABC and ▲ ADC are congruent</p>

      <p>
        <span>
          <span>
            ∴ Area of ▱ ABCD = Area of ▲ ABC + Area of ▲ ADC
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 2 x area of ▲ ABC
            <br />
            ∴Area of ▲ ABC&nbsp; = 1/2 x Area of ▱ ABCD
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = &nbsp;1/2 x [base of ▱ ABCD X
            height of ▱ ABCD]
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 1/2 x [BC x height of ▲ ABC]
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 1/2 x base of ▲ ABC x height of
            ▲ ABC = 1/2 x base x height{' '}
          </span>
        </span>
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of triangle. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=179&cnt=1
        </Typography>
      </div>
    </div>
  );
}
