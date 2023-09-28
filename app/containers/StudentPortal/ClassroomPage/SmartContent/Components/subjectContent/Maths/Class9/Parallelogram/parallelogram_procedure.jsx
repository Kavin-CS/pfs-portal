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

import AParallelogramPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-pro1.png';
import AParallelogramPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-pro2.png';
import AParallelogramPro3 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-pro3.png';
import AParallelogramPro4 from '../../../../../../../../../assets/Images/Subjects/Maths/AParallelogram1/parallelogram-pro4.png';

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
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          As performed in the real lab:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Materials Required:
        </span>
      </h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          Glazed paper, pencil, a pair of scissors, gum.
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            1. Make a parallelogram by paper folding. Call it ABCD.
            <br />
            2. Cut out the parallelogram with the help of a pair of scissors.
            <br />
            3. Obtain a perpendicular from D to AB meeting AB at E. [Fig A]
            <br />
            4. Cut and remove the triangle AED and align AD with BC. Call the
            displaced segment AE as BE'. [Fig B]
            <br />
            5. Verify using a scale that EBE' are collinear.
            <br />
            6. Verify that CE' is perpendicular to EBE and EE' = CD
            <br />
            7. Observe that the figure obtained is a rectangle.[Fig B]
          </span>
        </span>
      </p>

      <p marginLeft=" 40px;">
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <img
              alt=""
              src={AParallelogramPro1}
              width="325px;" height="217px;"
            />
            <img
              alt=""
              src={AParallelogramPro2}
              width="275px;" height="228px;"
            />
          </span>
        </span>
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          As performed in the simulator:
        </span>
      </h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Create a parallelogram ABCD with length L and breadth B.[Fig C]
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Draw perpendicular from A to DC meeting at point E.
            </span>
          </span>
          <ol>
            <li>
              <span fontSize="14px;">
                <span fontFamily=" arial,helvetica,sans-serif;">
                  &nbsp;&nbsp; &nbsp;Click on "Set Square" in Tools to use it.
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily=" arial,helvetica,sans-serif;">
                  &nbsp;&nbsp; &nbsp;Drag and place Set Square such that point A
                  and line DC is perpendicular.
                </span>
              </span>
            </li>
          </ol>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on ▲ AED to separate it from parallelogram.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Drag ▲ AED and place it such a way that AD is overlapped with BC.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Please see the observation
            </span>
          </span>
        </li>
      </ol>

      <p>
        <img
          alt=""
          src={AParallelogramPro3}
          width=" 429px;" height="330px;"
        />
      </p>

      <p marginLeft=" 120px;">
        <strong>Fig C</strong>
      </p>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <p>
        1. E is Co-linear with base.
        <br />
        2. Line DE is perpendicular to base.
        <br />
        3. Therefore it will forms rectangle ABE'E.
        <br />
        4. Thus the area of parallelogram = area of rectangle ABE'E
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = breadth X
        height
      </p>

      <p>
        <strong>&nbsp;Note:</strong>
      </p>

      <p>
        In some input cases, perpendicular of parallelogram may fall outside the
        base [E.g. Fig D]. In such cases click on parallelogram to rotate it and
        follow the same procedure as mentioned above.
      </p>

      <p>
        <img
          alt=""
          src={AParallelogramPro4}
          width="280px;" height="302px;"
        />
      </p>

      <p marginLeft=" 80px;">
        <strong>Fig D</strong>
      </p>

      <h2 className={classes.secondaryTag}>
        <br />
        Result:
      </h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Area of parallelogram is the product of its base and height.
          </span>
        </span>
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of parallelogram. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=178&cnt=2
        </Typography>
      </div>
    </div>
  );
}
