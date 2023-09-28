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

import APPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/AP1/ap-pro1.jpg';
import APPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/AP1/ap-pro2.jpg';

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
      <h2 className={classes.secondaryTag}>As performed in real lab:</h2>

      <h3 className={classes.secondaryTag}>Material Required:</h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            Colored paper, Pair of scissors, Geometry box, Fevicol, Sketch
            paper, One squared paper.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Take a given sequence of numbers say a<sub>1</sub>, a<sub>2</sub>,
              a<sub>3</sub> ....
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              &nbsp;Cut a rectangular strip from a coloured paper of width k = 1
              cm (say) and length a<sub>1</sub> cm.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Repeat this procedure by cutting rectangular strips of the same
              width k = 1cm and lengths a<sub>2</sub>, a<sub>3</sub>, a
              <sub>4</sub>.. cm.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Take 1 cm squared paper and paste the rectangular strips adjacent
              to each other in order.
            </span>
          </span>
        </li>
      </ul>

      <p>
        <strong>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        </strong>
      </p>

      <p>
        <strong>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              [A]Let the sequence be 1, 4, 7, 10, ....
            </span>
          </span>
        </strong>
      </p>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Take strips of lengths 1 cm, 4 cm, 7 cm and 10 cm, all of the same
              width say 1 cm.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Arrange the strips in order as shown in Fig 1(a).
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Observe that the adjoining strips have a common difference in
              heights. (In this example it is 3 cm.)
            </span>
          </span>
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={APPro1}
          width="200px;" height="132px;" marginLeft="100px;" marginRight="100px;"
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; Figure 1(a)
      </p>

      <p>
        <strong>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        </strong>
      </p>

      <p>
        <strong>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              [B]Let another sequence be 1, 4, 6, 9, ...
            </span>
          </span>
        </strong>
      </p>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Take strips of lengths 1 cm, 4 cm, 6 cm and 9 cm all of the same
              width say 1 cm.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Arrange them in an order as shown in Fig 1(b).
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Observe that in this case the adjoining strips do not have the
              same difference in heights.
            </span>
          </span>
          <br />
          &nbsp;
          <img
            alt=""
            src={APPro2}
            width="200px;" height="156px;" marginLeft="100px;" marginRight="100px;"
          />
        </li>
      </ul>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Figure 1(b)
      </p>

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily=" arial,helvetica,sans-serif;">
              Click on each box provided in workbench area. Here, we will be
              generating sequence of 1,4,7,10....
            </span>
          </span>
        </li>
        <li>Click on next button below.</li>
        <li>
          Click on each box provided in workbench area. Here, we will be
          generating sequence of 1,4,6,9....
        </li>
        <li>Click on next button below.</li>
      </ul>

      

      

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        <span fontSize="14px;">
          <span fontFamily=" arial,helvetica,sans-serif;">
            So, it is observed that if the given sequence is an arithmetic
            progression, a ladder is formed in which the difference between the
            heights of adjoining steps is constant. If the sequence is not an
            arithmetic progression, a ladder is formed in which the difference
            between adjoining steps is not constant.
          </span>
        </span>
        <br />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Arithmetic progression. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=167&cnt=2
        </Typography>
      </div>
    </div>
  );
}