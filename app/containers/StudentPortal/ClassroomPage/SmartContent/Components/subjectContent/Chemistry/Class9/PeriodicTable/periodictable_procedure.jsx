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
      

      <h2 className={classes.secondaryTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              To get instructions click on the&nbsp;
              <strong>'Instructions'</strong>.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Use <strong>'Classification of elements'</strong> to highlight the
              elements based on specific property<b>&nbsp;</b>-
            </span>
          </span>
          <ol start="1">
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  Click on '<strong>Non-metals and metalloids'</strong>&nbsp;to
                  highlight non-metals and metalloids in the periodic table.
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  Click on <strong>'Radioactive elements'</strong>&nbsp; to
                  highlight radioactive elements in the periodic table.
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  Click on <strong>'Metal types'</strong>&nbsp;to highlight
                  elements based on metal type in the periodic table.
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  Click on <strong>'Element states'</strong>&nbsp;to highlight
                  element based on their state in the periodic table.
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  To highlight halogens and the noble gases, click on '
                  <strong>Halogens and Noble gases'.</strong>&nbsp;
                </span>
              </span>
            </li>
            <li>
              <span fontSize="14px;">
                <span fontFamily="arial,helvetica,sans-serif;">
                  <span lineHeight="1.6;">
                    To highlight inner transition elements, click on '
                  </span>
                  <strong lineHeight="1.6;">Lanthanide and Actinides'</strong>
                  <span lineHeight="1.6;">.</span>
                </span>
              </span>
            </li>
          </ol>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              To get information about an element click on its symbol in the
              periodic table. The details of the element will be displayed below
              the periodic table.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              If you&nbsp;hover / tap colors displayed in the&nbsp;
              <strong>'Color convention'</strong>, only that category of
              element(s) will be highlighted.
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Modern periodic table. Retrieved 3 April
          2021, from cdac.olabs.edu.in/?sub=75&brch=12&sim=94&cnt=2
        </Typography>
      </div>
    </div>
  );
}
