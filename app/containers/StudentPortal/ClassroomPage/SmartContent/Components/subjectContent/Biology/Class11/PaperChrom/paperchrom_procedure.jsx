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
import PaperChromPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/PaperChrom1/paperchrom-pro1.jpg';

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
      <p>
        Now, let’s separate the pigments from fresh spinach leaves using paper
        chromatography.
      </p>

      <h1 className={classes.headTag}>Materials required</h1>

      <p>
        <img alt="" src={PaperChromPro1} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          <p>Take a few freshly plucked green spinach leaves.</p>
        </li>
        <li>
          <p>
            Using scissors,&nbsp; cut the spinach leaves into small pieces and
            let them fall into the mortar.
          </p>
        </li>
        <li>
          <p>
            Take a measuring cylinder that contains 5ml of acetone and pour it
            into the mortar.
          </p>
        </li>
        <li>
          <p>Grind the spinach leaves using the mortar and pestle.</p>
        </li>
        <li>
          <p>Place the extract into a watch glass using a spatula.</p>
        </li>
        <li>
          <p>
            Take a strip of filter paper having a narrow notch at one end of the
            strip.
          </p>
        </li>
        <li>
          <p>
            Take a pencil and a scale and draw a horizontal line with a pencil
            about 2-3 cm away from the tip of the notch.
          </p>
        </li>
        <li>
          <p>
            Put a drop of the pigment extract in the middle of the line with the
            help of a capillary tube.
          </p>
        </li>
        <li>
          <p>
            Allow the drop to dry and repeat till four or five drops are placed
            on the paper.
          </p>
        </li>
        <li>
          <p>
            Take the chromatographic chamber and pour ether acetone solvent in
            it.
          </p>
        </li>
        <li>
          <p>Fold one end of the filter paper strip and staple it.</p>
        </li>
        <li>
          <p>
            Using a thread, hang the filter paper strip in the chromatographic
            chamber.
          </p>
        </li>
        <li>
          <p>
            The loading spot should remain about 1 cm above the solvent level.
          </p>
        </li>
        <li>
          <p>Leave the chromatographic chamber undisturbed for some time.</p>
        </li>
        <li>
          <p>
            We can observe, as the solvent moves through the paper, it spreads
            the different pigments of the mixture to various distances.
          </p>
        </li>
        <li>
          <p>
            When the solvent rises about 3/4th up the strip, remove the strip
            carefully and let it dry.
          </p>
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through Online Labs)
      </h1>

      <ul>
        <li>
          <p>
            You can select the type of leaf extract using the drop down list,
            ‘Select the plant pigment extract’.
          </p>
        </li>
        <li>
          <p>
            Now, select the type of solvent using ‘Select the solvent’ drop down
            list.
          </p>
        </li>
        <li>
          <p>Click on the ‘start’ button to start the experiment.</p>
        </li>
        <li>
          <p>
            We can observe that the different pigments move through the filter
            paper to various distances.
          </p>
        </li>
        <li>
          <p>
            Click on the test tube to measure the R_f value. There appears a
            tooltip to identify the band.
          </p>
        </li>
        <li>
          <p>
            Select the ‘show scale’ check box to measure the distance travelled
            by the pigment and solvent.
          </p>
        </li>
        <li>
          <p>
            Select the ‘show chart’ check box which displays a chart of
            predefined values of different leaf pigments.
          </p>
        </li>
        <li>
          <p>
            Check the calculated Rf value that matches the predefined values in
            the chart.
          </p>
        </li>
        <li>
          <p>
            Now select the appropriate pigment band from ‘Select the pigment
            identified’ drop down list.
          </p>
        </li>
        <li>
          <p>To repeat the experiment, click on the ‘Reset’ button.</p>
        </li>
      </ul>

      <h1 className={classes.headTag}>Observation</h1>

      <p>
        The dried chromatographic paper strip shows four distinct paper bands.
        Different pigments can be identified by their colours.
      </p>

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        R_f Value of the each pigment spot can be calculated by the equation;
      </p>

      <p>
        R_f=(Distance travelled by the compound)/(Distance travelled by the
        solvent)
      </p>

      <p>
        Measure the distance of each pigment band from the loading spot and also
        the distance travelled by the solvent. Calculate the Rf value using the
        equation and record the values in the table.
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        The topmost orange yellow band of pigments in the separation corresponds
        to carotene. The yellowish band appearing below it indicates the
        xanthophylls. The third from above dark green band represents
        chlorophyll a. The lowermost yellowish green band is that of chlorophyll
        b.
      </p>

      <h1 className={classes.headTag}>Precaution</h1>

      <ul>
        <li>Spinach leaves should be fresh and green.</li>
        <li>
          The loading spot should be 2-3 cm away from the tip of the notch.
        </li>
        <li>
          While hanging the strips in the chromatography chamber, the loading
          spot should remain about 1 cm above the solvent level.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=124&cnt=2
        </Typography>
      </div>
    </div>
  );
}
