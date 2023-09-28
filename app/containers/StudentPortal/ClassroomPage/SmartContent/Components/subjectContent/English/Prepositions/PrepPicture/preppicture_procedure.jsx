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

import PrepPicturePro1 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro1.png';
import PrepPicturePro2 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro2.png';
import PrepPicturePro3 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro3.png';
import PrepPicturePro4 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro4.png';
import PrepPicturePro5 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro5.png';
import PrepPicturePro6 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro6.png';
import PrepPicturePro7 from '../../../../../../../../../assets/Images/Subjects/English/PrepPicture1/preppicture-pro7.png';


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
      <ol>
        <li>
          One dictation will be displayed at a time.
          <br />
          <img
            align="bottom"
            name="image08.png"
            src={PrepPicturePro1}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 624px; " height=" 79px;"
          />
        </li>
        <li value="2">
          Now, construct a picture from given set of objects and instructions.
          <br />
          &nbsp;&nbsp; &nbsp;As per the given dictation, select an object from
          the "Object Box".
          <br />
          <img
            align="bottom"
            name="image09.png"
            src={PrepPicturePro2}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 119px; " height=" 113px;"
          />
          <br />
          <img
            align="bottom"
            name="image01.png"
            src={PrepPicturePro3}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 624px; " height=" 157px;"
          />
          <br />
          &nbsp;
        </li>
        <li value="3">
          As mentioned in these dictations, place the selected object at
          appropriate location/position by drag &amp; drop.
          <br />
          <img
            align="bottom"
            name="image07.png"
            src={PrepPicturePro4}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 328px; " height=" 224px;"
          />
          <br />
          &nbsp;
        </li>
        <li value="4">
          Click "Next" for the next instruction.
          <br />
          <img
            align="bottom"
            name="image12.png"
            src={PrepPicturePro5}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 93px; " height=" 80px;"
          />
          <br />
          &nbsp;
        </li>
        <li value="5">
          Position of the object can be changed before submitting.
        </li>
        <li>
          After construction of the picture, click on "Compare" to compare your
          picture with the original picture.
          <br />
          <img
            align="bottom"
            name="image13.png"
            src={PrepPicturePro6}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 624px; " height=" 77px;"
          />
          <br />
          &nbsp;
        </li>
        <li value="7">
          You can check the completed dictation at the left-hand side.
          <br />
          <img
            align="bottom"
            name="image11.png"
            src={PrepPicturePro7}
            borderWidth=" 0px; " borderStyle="solid; " margin="12px; " width=" 233px; " height=" 169px;"
          />
        </li>
      </ol>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Learning Prepositions of Location-Picture
          Dictation. Retrieved 9 April 2021, from
          cdac.olabs.edu.in/?sub=84&brch=22&sim=194&cnt=645
        </Typography>
      </div>
    </div>
  );
}
