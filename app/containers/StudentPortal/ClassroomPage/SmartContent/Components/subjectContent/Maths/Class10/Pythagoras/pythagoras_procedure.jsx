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

import PythagorasPro1 from '../../../../../../../../../assets/Images/Subjects/Maths/Pythagoras1/pythagoras-pro1.jpg';
import PythagorasPro2 from '../../../../../../../../../assets/Images/Subjects/Maths/Pythagoras1/pythagoras-pro2.jpg';

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
      <h2 className={classes.secondaryTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag} align="LEFT" class="western" marginBottom="0cm;">
        Materials Required:
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <font color="#000000">
              <span lang="en-US">
                card board, colored pencils, pair of scissors, fevicol, geometry
                box.
              </span>
            </font>
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <font color="#000000">
              <span lang="en-US">Procedure:</span>
            </font>
          </span>
        </span>
      </h2>

      <ol>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Take a card board of size say 20 cm × 20 cm.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Cut any right angled triangle and paste it on the cardboard.
                  Suppose its sides are a,&nbsp;
                  <span fontFamily="arial,helvetica,sans-serif;">
                    <span fontSize="14px;">
                      <font color="#000000">
                        <span lang="en-US">b and c.</span>
                      </font>
                    </span>
                  </span>
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Cut a square of side a cm and place it along the side of
                  length a cm of the right&nbsp;
                  <span fontFamily="arial,helvetica,sans-serif;">
                    <span fontSize="14px;">
                      <font color="#000000">
                        <span lang="en-US">angled triangle.</span>
                      </font>
                    </span>
                  </span>
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Similarly cut squares of sides b cm and c cm and place them
                  along the respective&nbsp;
                  <span fontFamily="arial,helvetica,sans-serif;">
                    <span fontSize="14px;">
                      <font color="#000000">
                        <span lang="en-US">
                          sides of the right angled triangle.
                        </span>
                      </font>
                    </span>
                  </span>
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">Label the diagram as shown in Fig(a).</span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Join BH and AI. These are two diagonals of the square ABIH.
                  The two diagonals&nbsp;
                  <span fontFamily="arial,helvetica,sans-serif;">
                    <span fontSize="14px;">
                      <font color="#000000">
                        <span lang="en-US">
                          intersect each other at the point O.
                        </span>
                      </font>
                    </span>
                  </span>
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">Through O, draw RS || BC.</span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Draw PQ, the perpendicular bisector of RS, passing through O.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now the square ABIH is divided in four quadrilaterals. Color
                  them as shown in Fig(a) .
                </span>
              </font>
            </span>
          </span>
        </li>
        <li align="LEFT" class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  From the square ABIH cut the four quadrilaterals. Color them
                  and name them as shown in Fig(b).
                </span>
              </font>
            </span>
          </span>
        </li>
      </ol>

      <p
        align="LEFT"
        class="western"
        marginBottom="0cm;"
        widows=" 0;"
        orphans="0"
      >
        <img
          alt=""
          src={PythagorasPro1}
          width="315px;" height="296px;"
        />
        &nbsp;
        <img
          alt=""
          src={PythagorasPro2}
          width="164px;" height="200px;"
        />
      </p>

      <p
        align="LEFT"
        class="western"
        marginBottom="0cm;"
        widows=" 0;"
        orphans="0"
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig(a) &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fig(b)
      </p>

      <p
        align="LEFT"
        class="western"
        marginBottom="0cm;"
        widows=" 0;"
        orphans="0"
      >
        &nbsp;
      </p>

      <h2 className={classes.secondaryTag} align="LEFT" class="western" marginBottom="0cm;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <font color="#000000">
            <font size="3">
              <span lang="en-US">
                <b>As performed in the simulator:</b>
              </span>
            </font>
          </font>
        </span>
      </h2>

      <ol>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Draw a right angled triangle by giving base and heights in the
                  input box.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, click on the respective three sides of a triangle.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, click on the three squares to fill with distinct colors.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, click on the base square to draw its diagonals.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, click on hypotenuse to generate its parallel line.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, drag the generated parallel line to the blue square so
                  that it passes through the point of intersection of diagonals.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, double click on this parallel line to generate its
                  perpendicular bisector.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, check all the check boxes in the tool box to get four
                  quadrilaterals.
                </span>
              </font>
            </span>
          </span>
        </li>
        <li class="western" marginBottom="0cm;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span fontSize="14px;">
              <font color="#000000">
                <span lang="en-US">
                  Now, rearrange coloured pieces from the square below the base
                  and the square along the height of the triangle, in the square
                  along the hypotenuse.
                </span>
              </font>
            </span>
          </span>
        </li>
      </ol>

      <p
        align="LEFT"
        class="western"
        marginBottom="0cm;"
        widows=" 0;"
        orphans="0"
      >
        &nbsp;
      </p>

      <p class="western" marginBottom="0cm;" textAlign="left;">
        <font color="#000000">
          <font face="Arial, serif">
            <font size="4">
              <span lang="en-US">
                <b>
                  <span fontSize="16px;">
                    Observation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </b>
              </span>
            </font>
          </font>
        </font>
        <br />
        <span fontFamily="arial,helvetica,sans-serif;">
          <span fontSize="14px;">
            The square ACGF and the four quadrilaterals cut from the square ABIH
            completely fill the&nbsp;square BCED. Thus the theorem is verified.
          </span>
        </span>
      </p>

      <p
        align="LEFT"
        class="western"
        marginBottom="0cm;"
        widows=" 0;"
        orphans="0"
      >
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Pythagoras theorem. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=158&cnt=2
        </Typography>
      </div>
    </div>
  );
}
