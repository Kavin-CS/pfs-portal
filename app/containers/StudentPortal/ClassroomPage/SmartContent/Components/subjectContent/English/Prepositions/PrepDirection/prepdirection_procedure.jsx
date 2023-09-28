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

import PrepDirectionPro1 from '../../../../../../../../../assets/Images/Subjects/English/PrepDirection1/prepdirection-pro1.png';
import PrepDirectionPro2 from '../../../../../../../../../assets/Images/Subjects/English/PrepDirection1/prepdirection-pro2.png';
import PrepDirectionPro3 from '../../../../../../../../../assets/Images/Subjects/English/PrepDirection1/prepdirection-pro3.png';

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
  header: {
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <ol>
          <li>
            Look at the map below. You have invited three friends to a party at
            your house.
            <br />
            <img
              align="bottom"
              name="image03.png"
              src={PrepDirectionPro1}
              borderWidth=" 0px;" borderStyle="solid;" margin=" 12px;" width=" 412px;" height=" 560px;"
            />
            <br />
            &nbsp;
          </li>
          <li value="2">
            Write three separate notes, giving them directions from 1, 2 and 3
            to your house.
            <br />
            <img
              align="bottom"
              name="image05.png"
              src={PrepDirectionPro2}
              borderWidth=" 0px;" borderStyle="solid;" margin=" 12px;" width=" 439px;" height=" 315px;"
            />
            <br />
            &nbsp;
          </li>
          <li value="3">
            On clicking on the box, a bag of words will be displayed, you can
            choose one word from these.​
            <br />
            <img
              align="bottom"
              name="image04.png"
              src={PrepDirectionPro3}
              borderWidth=" 0px;" borderStyle="solid;" margin=" 12px;" width=" 600px;" height=" 268px;"
            />
          </li>
        </ol>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Learning Preposition of direction.
          Retrieved 9 April 2021, from
          cdac.olabs.edu.in/?sub=84&brch=26&sim=218&cnt=647
        </Typography>
      </div>
    </div>
  );
}
