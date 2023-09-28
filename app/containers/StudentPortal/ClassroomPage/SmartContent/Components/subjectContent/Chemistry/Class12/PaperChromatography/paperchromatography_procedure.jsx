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

import PaperChromatographyPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-pro1.jpg';
import PaperChromatographyPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-pro2.png';
import PaperChromatographyPro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-pro3.jpg';
import PaperChromatographyPro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-pro4.png';

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
      <h1 className={classes.headTag}>1. Separation of components from a mixture of red and blue inks</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={PaperChromatographyPro1}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take a Whatman filter paper strip and using a pencil draw a horizontal
          line 4cm from one end of the paper. Then draw another line lengthwise
          (verticallly) from the centre of the paper. Name the point at which
          the two lines intersect as P.
        </li>
        <li>
          Using a fine capillary tube, put a drop of the mixture of red and blue
          inks at the point P. Let it dry in air.
        </li>
        <li>
          Put another drop on the same spot and dry again, so that the spot is
          rich in the mixture.
        </li>
        <li>
          Pour equal amounts of isopropyl alcohol and distilled water into a
          chromatographic chamber and mix it well using a glass rod. This is
          used as the solvent.
        </li>
        <li>
          Suspend the filter paper vertically in the chromatographic chamber
          containing the solvent in such a way that the pencil line remains
          about 2cm above the solvent level.
        </li>
        <li>Close the jar with its lid and keep it undisturbed.</li>
        <li>
          Notice the rising solvent along with the red and blue inks. After the
          solvent has risen about 15 cm you will notice two different spots of
          blue and red colors on the filter paper.
        </li>
        <li>
          Take the filter paper out of the jar and using a pencil mark the
          distance that the solvent has risen on the paper. This is called the
          solvent front.
        </li>
        <li>
          Dry the filter paper and put pencil marks at the centre of the red and
          blue ink spots.
        </li>
        <li>
          Measure the distance of the two spots from the original line and the
          distance of the solvent from the original line.
        </li>
        <li>
          Calculate the Rf values of the red and blue inks using the formula,
        </li>
      </ul>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»f«/mi»«/msub»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PaperChromatographyPro2}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>Observations can be recorded as shown.</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td>SI No.</td>
              <td>Components</td>
              <td>
                Distance travelled by the component from the original line (cm)
              </td>
              <td>
                Distance travelled by the solvent from the original line (cm)
              </td>
              <td>
                R
                <sub>
                  <em fontWeight='normal'>f</em>
                </sub>{' '}
                value
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Red</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Blue</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Inference</h2>

      <ul>
        <li>
          R
          <em fontWeight='normal'>
            <sub>f</sub>
          </em>{' '}
          value of red ink = ……………
        </li>
        <li>
          R
          <em fontWeight='normal'>
            <sub>f </sub>
          </em>{' '}
          value of blue ink = …………..
          <br />
          &nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>2. Separation of pigments from the extract of spinach leaves</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={PaperChromatographyPro3}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take a Whatman filter paper strip and using a pencil draw a horizontal
          line 4cm from one end of the paper. Then draw another line lengthwise
          (verticallly) from the centre of the paper. Name the point at which
          the two lines intersect as P.
        </li>
        <li>
          Using a fine capillary tube, put a drop of the extract of spinach
          leaves at the point P. Let it dry in air.&nbsp;
        </li>
        <li>
          Put another drop on the same spot and dry again, so that the spot is
          rich in the leaf extract.
        </li>
        <li>
          Pour equal amounts of isopropyl alcohol and distilled water into a
          chromatographic chamber and mix it well using a glass rod. This is
          used as the solvent.
        </li>
        <li>
          Suspend the filter paper vertically in the chromatographic chamber
          containing the solvent in such a way that the pencil line remains
          about 2cm above the solvent level.
        </li>
        <li>Close the jar with its lid and keep it undisturbed.</li>
        <li>
          Notice the rising solvent along with the coloured components of the
          leaf extract.
        </li>
        <li>
          After the solvent has risen to about 15 cm you will notice two
          different spots of coloured components on the filter paper.
        </li>
        <li>
          Take the filter paper out of the jar and using a pencil mark the
          distance that the solvent has risen on the paper. This is called the
          solvent front.
        </li>
        <li>
          Dry the filter paper and put pencil marks at the centre of each spot.
        </li>
        <li>
          Measure the distance of each spot from the original line and the
          distance of the solvent front from the original line.
        </li>
        <li>
          Calculate the Rf values of different components of leaf extract by
          using the formula,
        </li>
      </ul>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»f«/mi»«/msub»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PaperChromatographyPro4}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>Observations can be recorded as shown.</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td>SI.No</td>
              <td>
                <strong>Component</strong>
              </td>
              <td>
                <strong>
                  Distance travelled by the component from the original line
                  (cm)
                </strong>
              </td>
              <td>
                Distance travelled by the solvent from the original line (cm)
              </td>
              <td>
                R
                <em fontWeight='normal'>
                  <sub>f</sub>
                </em>{' '}
                value
              </td>
            </tr>
            <tr>
              <td>&nbsp;1.</td>
              <td>&nbsp;Orange (Carotene)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;2.</td>
              <td>&nbsp;Yellow (Xanthophyll)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Light green (Chlorophyll a)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Dark green (Xanthophyll)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Inference</h2>

      <ul>
        <li>
          R
          <sub>
            <em fontWeight='normal'>f</em>
          </sub>{' '}
          value of orange (Carotene) = ……………
        </li>
        <li>
          R
          <sub>
            <em fontWeight='normal'>f</em>
          </sub>{' '}
          value of Yellow (Xanthophyll) = …………..
        </li>
        <li>
          R
          <em fontWeight='normal'>
            <sub>f </sub>
          </em>{' '}
          value of Light green (Chlorophyll a) = …………..
        </li>
        <li>
          R
          <sub>
            <em fontWeight='normal'>f</em>
          </sub>{' '}
          value of Dark green (Xhlorophyll b) = …………..
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <ul>
        <li>
          You can select the mixture from ‘Select the mixture’ drop down list.
        </li>
        <li>
          To take the sample, drag the capillary tube to the watch glass and
          drag it back to the filter paper to drop the sample on the point ‘P’.
        </li>
        <li>To open the chromatographic chamber, click on its lid.</li>
        <li>
          Drag the filter paper to the chromatographic chamber containing
          solvent to suspend the filter paper in it.
        </li>
        <li>Click on the lid to close the chromatographic chamber.</li>
        <li>
          You can see that the components of the mixture rising along with the
          solvent.
        </li>
        <li>Wait till the solvent reaches its maximum height.</li>
        <li>
          Click on the filter paper to take it out from the chromatographic
          chamber.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can measure the distance travelled by the solvent (solvent front)
          and the distance travelled by each component of the mixture from the
          original line using a scale by clicking on the ‘Show scale’ check box.
        </li>
        <li>
          You can see the zoomed view of the scale readings on the right side of
          the filter paper.
        </li>
        <li>
          You can verify the values by entering the values in the respective
          check boxes on the left side menu.
        </li>
        <li>
          You can calculate the Rf value of each component using the equation of
          Rf value and can verify your result by entering the values in the
          respective check boxes. (Round up the decimal values.&nbsp; (E.g.,
          0.775 should be rounded up to 0.78).
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          Use good quality pencil for drawing the reference line so that the
          mark does not dissolve in the solvent in which the chromatography is
          carried out.
        </li>
        <li>Always use a fine capillary tube.</li>
        <li>Keep the jar undisturbed and covered during the experiment.</li>
        <li>The spot should be small and rich in mixture.</li>
        <li>Allow the spot to dry before putting the strip in the jar.</li>
        <li>Keep the strip erect. Do not let it curl.</li>
        <li>Do not allow the spot to dip in the solvent.&nbsp;</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Paper Chromatography. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=133&cnt=2
        </Typography>
      </div>
    </div>
  );
}
