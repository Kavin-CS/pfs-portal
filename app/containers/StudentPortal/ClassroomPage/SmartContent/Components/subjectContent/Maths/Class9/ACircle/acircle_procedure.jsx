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

import ACirclePro1 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro1.jpg';
import ACirclePro2 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro2.jpg';
import ACirclePro3 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro3.jpg';
import ACirclePro4 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro4.jpg';
import ACirclePro5 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro5.gif';
import ACirclePro6 from '../../../../../../../../../assets/Images/Subjects/Maths/ACircle1/acircle-pro6.gif';

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
      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <h3 className={classes.secondaryTag}>Materials required:</h3>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          Coloured paper, compass, scale, a pair of scissors, gum, colours
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Draw a circle of radius r = 4 cm (say) on the paper.
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Divide the circle into 16 equal parts. [Fig (a)]
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Cut all the 16 parts and arrange them to get the [Fig (b)].
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Take any part from any side and further divide it into 2 parts.
              [Fig (c)]
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              To complete the shape of rectangle arrange these two smaller parts
              at the corners of the shape obtained in [Fig (b)].
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Find the length and the breadth of the rectangle so formed [Fig
              (d)].
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              Find the area of the rectangle.
            </span>
          </span>
        </li>
      </ul>

      <p>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={ACirclePro1}
            width=" 203px;" height=" 200px;"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
          <img
            alt=""
            src={ACirclePro2}
            height="200px;" width="443px;"
          />
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Fig
          (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Fig (b)
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <img
            alt=""
            src={ACirclePro3}
            width=" 262px;" height=" 200px;"
          />{' '}
          &nbsp; &nbsp;&nbsp;{' '}
          <img
            alt=""
            src={ACirclePro4}
            width=" 400px;" height=" 200px;"
          />
        </span>
      </p>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Fig
          (c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Fig (d)
        </span>
      </p>

      <h2 className={classes.secondaryTag}>As performed in Simulator:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Click on scale (between 2 and 3) in workbench to draw circle.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Click on the circle to mark 16 sectorials parts &amp; color them
            differently.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Move mouse over each wedge to align them in a row.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Click on next button below to color wedges &amp; divide in two
            group.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Click blue group to rotate and align.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Drag the blue group and drop over green group to join and form
            parallelogram.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Click on left most wedge to cut it into two parts.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Drag the red part and attach to the right end so as to form a
            rectangle.
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            This is a rectangle whose area can be calculated as (Length x
            Breadth).
          </span>
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The students will observe that the area of rectangle&nbsp;{' '}
              <img
                alt="\small \dpi{120} \small \frac{2\times \pi \times r}{2}\times r"
                height="28"
                src={ACirclePro5}
                width="80"
              />
            </span>
          </span>
        </li>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize=" 14px;">
              The students will observe that the rectangle is obtained from
              parts of circle. Hence area of circle =
              <img
                alt="\small \pi \times r^{2}"
                src={ACirclePro6}
              />
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Area of circle. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=215&cnt=2
        </Typography>
      </div>
    </div>
  );
}
