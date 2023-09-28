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
import FlowersPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Flowers1/flowers-pro1.jpg';

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
      <h1 className={classes.headTag}>Materials Required</h1>

      <p>
        <img
          alt=""
          src={FlowersPro1}
          width="500px"
        />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Take one flower and make the following observations.</li>
        <li>Note down whether it has a pedicel, bracts, epicalyx or not.</li>
        <li>
          Identify the presence of different whorls of floral leaves such
          petals, sepals, androecium and gynoecium.
        </li>
        <li>
          Carefully remove the floral leaves of each whorl and place them
          whorlwise on a white paper, i.e., sepals, petals, stamens and carpels
        </li>
        <li>Count the number of floral leaves of each whorl.</li>
        <li>
          Using a blade, cut thin section of ovary. Mount the section on a slide
          in a drop of water and examine under dissecting microscope.&nbsp;
        </li>
        <li>
          Count the number of chambers in anther and ovary and number of ovules
          in each chamber locule.
        </li>
        <li>Find the nature of ovary, style stigma and placentation.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          To select a sample of a flower, click on the corresponding icon.
        </li>
        <li>
          Click on the “Cross-sectional view”button to view the cross section of
          the sample.
        </li>
        <li>
          To count the number of floral leaves of each whorl of the selected
          sample, click on the button, “Count the florals”.
        </li>
        <li>
          Drag the forceps towards the flower and remove the floral leaves of
          each whorl and drag to place them on the right pane.
        </li>
        <li>To repeat the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Flowers. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=198&cnt=2
        </Typography>
      </div>
    </div>
  );
}
