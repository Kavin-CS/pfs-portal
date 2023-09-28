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
import DensityPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro1.png';
import DensityPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro2.png';
import DensityPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro3.png';
import DensityPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro4.gif';
import DensityPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro5.png';
import DensityPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro6.png';
import DensityPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro7.png';
import DensityPro8 from '../../../../../../../../../assets/Images/Subjects/Physics/Density1/density-pro8.png';


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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img alt="" src={DensityPro1} />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <h3 className={classes.secondaryTag}>
        How to measure the gravitational mass of a solid using a spring balance?
      </h3>

      <h3 className={classes.secondaryTag}>
        <br />
        In real lab:
      </h3>

      <ul>
        <li>Take a metallic solid block.</li>
        <li>
          Tie it with a thin strong thread to hang it on the hook of the spring
          balance.
        </li>
        <li>Note the least count of the spring balance.</li>
        <li>
          Hang the block on the hook of spring balance. It is better to hang the
          spring balance with the help of an iron stand or clamp stand so that
          it remains static while noting the mass of the block.
        </li>
        <li>
          Carefully observe the gravitational mass of the solid block and note
          it down. Repeat it thrice and calculate mean of the three readings
          taken.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>
        <br />
        To perform the simulator:
      </h3>

      <ul>
        <li>Note the least count of the spring balance.</li>
        <li>
          Click on any one of the given solids such as stone, steel ball, wooden
          block, copper lock, and copper block to measure its gravitational
          mass.
        </li>
        <li>
          Once you click on it, the selected solid will be shown as hung on the
          spring balance.
        </li>
        <li>
          Mouse over the scale on the spring balance where the red indicator
          points to get the readings.
        </li>
        <li>You can also check your readings on the space given.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Now we need to find the Mass of the solid.</h3>

      <h3 className={classes.secondaryTag}>
        Mass of the solid,{' '}
        <img alt="" src={DensityPro2} />
      </h3>

      <h3 className={classes.secondaryTag}>Now we need to find the volume of the solid as you know,</h3>

      <h3 className={classes.secondaryTag}>
        Density, <img alt="" src={DensityPro3} />
      </h3>

      <h3 className={classes.secondaryTag}>
        <br />
        <br />
        a) As performed in a real lab:
      </h3>

      <ul>
        <li>
          Take a graduated glass cylinder of proper size and capacity. Fill it
          with water up to a known volume level mark.
        </li>
        <li>
          Tie the rectangular metallic block by a thin strong thread and immerse
          it fully in water taken in the graduated cylinder. The block displaces
          water and the water level rises. Note the position of water level
          (meniscus) keeping the eye in horizontal position with the level (to
          avoid error due to parallax).
        </li>
        <li>
          Find the difference of two positions of the water level to find volume
          of metallic block immersed.
        </li>
        <li>
          Repeat it thrice and calculate the mean of three observations taken.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>b) As performed using the simulator:</h3>

      <ul>
        <li>
          Click on the button, “Volume” to measure the volume of the solid.
        </li>
        <li>Click on one of the given solids to measure its volume.</li>
        <li>
          Now mouse over the cylinder to measure the water rise in the cylinder.
        </li>
        <li>
          You can also check your readings on the space given and by clicking on
          the button, “Check”.
        </li>
        <li>
          Calculate the density using the formulae and check your results in the
          respective space.
        </li>
      </ul>

      <center>
        <img alt="" src={DensityPro4} />
      </center>

      <h1 className={classes.headTag}>Observations:</h1>

      <p>
        Record your observation of measurement of mass and volume in the below
        tables as shown.
      </p>

      <p>
        <strong>1. Table: For gravitational Mass of the Solid (M) Block</strong>
      </p>

      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        center=""
        class="responsive_table"
        
      >
        <tbody>
          <tr>
            <td>
              <h3 className={classes.secondaryTag}>Sl.No</h3>
            </td>
            <td>
              <h3 className={classes.secondaryTag}>
                Initial reading (without block) M<sub>1</sub>
              </h3>
            </td>
            <td>
              <h3 className={classes.secondaryTag}>
                Final reading(with solid block) M<sub>F</sub>
              </h3>
            </td>
            <td>
              <h3 className={classes.secondaryTag}>
                Mass of the solid
                <br />M<sub>F</sub>-M<sub>1</sub>
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                M<sub>1</sub>=............g
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                M<sub>2</sub>=.............g
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>3</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>
                M<sub>3</sub> =............g
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Mean gravitational mass of the solid block,{' '}
        <img alt="" src={DensityPro5} />{' '}
        =...................g.wt (by spring balance)
      </p>

      <p>
        <strong>2. Table: For Volume of the Solid Block (V)</strong>
      </p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
          
        >
          <tbody>
            <tr>
              <td>
                <h3 className={classes.secondaryTag}>Sl.No.</h3>
              </td>
              <td>
                <h3 className={classes.secondaryTag}>
                  Initial reading
                  <br />
                  (without block immersed)V<sub>1</sub>(ml)
                </h3>
              </td>
              <td>
                <h3 className={classes.secondaryTag}>
                  Final reading
                  <br />
                  (with block immersed)V<sub>F</sub>(ml)
                </h3>
              </td>
              <td>
                <h3 className={classes.secondaryTag}>
                  Volume of the block V=V<sub>1</sub>-V<sub>F</sub> (ml)
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <p>
                  V<sub>1</sub>=............ml
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <p>
                  V<sub>2</sub>=.............ml
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>3</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <p>
                  V<sub>3</sub>=.............ml
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Mean volume of the solid block by graduated cylinder{' '}
        <img alt="" src={DensityPro6} /> =
        ...................ml(cm<sup>3</sup>).
      </p>

      <p>
        When the experiment is conducted in earth as environment, the mass of
        the object and gravitational mass displayed on the spring balance is the
        same. But when we do it on another planet like moon, mars, etc., the
        mass of object and gravitational mass are different. The mass displayed
        in the spring balance is taken as gravitational mass (w) of the object
        and the mass of object can be calculated by using the formula.
      </p>

      <p>
        <strong>Mass of the object: </strong>
      </p>

      <p>
        <strong>
          You can calculate the density (D) of the given solid block (denser
          than water) with the calculated mean mass and volume.
        </strong>
      </p>

      <p>
        Mass of the solid,{' '}
        <strong>
          <img alt="" src={DensityPro7} />
        </strong>
      </p>

      <p>(i) Mass of the solid (m) = ..................... g</p>

      <p>
        (ii) Mean volume of the solid block (V) =...................cm
        <sup>3</sup>
      </p>

      <p>(iii) Density (D) of the solid block = Mass / Volume</p>

      <p>
        <img alt="" src={DensityPro8} />
      </p>

      <p>
        =...................... g/cm<sup>3 </sup>
      </p>

      <p>
        <strong>Least count of the spring balance</strong>
      </p>

      <p>5 divisions = 25 g</p>

      <p>1 division = 25/5 = 5 g</p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        The density of the given solid (heavier than water) is
        .................... g/cm<sup>3</sup>./p&gt;
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <h3 className={classes.secondaryTag}>Let's try the experiment!</h3>

      <ol start="1" type="1">
        <li>
          Always used a thread of least weight and volume to tie the solid
          block.
        </li>
        <li>
          The solid block should be dried before measuring mass and volume.
        </li>
        <li>
          The indicator of the spring balance should be at zero before measuring
          the mass of the solid.
        </li>
        <li>
          The solid block should be completely immersed in water of the
          measuring cylinder before observing its volume.
        </li>
        <li>
          While immersing the solid block, the water of the measuring cylinder
          should not spill.
        </li>
        <li>
          The solid block should not touch the brim and sides of the beaker.
        </li>
        <li>Always note reading of lower meniscus of water level.</li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Determination of Density of Solid.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=2&cnt=21
        </Typography>
      </div>
    </div>
  );
}
