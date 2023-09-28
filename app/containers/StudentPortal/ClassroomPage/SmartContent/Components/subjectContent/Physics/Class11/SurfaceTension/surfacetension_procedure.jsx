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
import SurfaceTensionPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro1.jpg';
import SurfaceTensionPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro2.png';
import SurfaceTensionPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro3.png';
import SurfaceTensionPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro4.png';
import SurfaceTensionPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro5.png';
import SurfaceTensionPro6 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro6.png';
import SurfaceTensionPro7 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-pro7.png';


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
      <h1 className={classes.headTag}>Materials required</h1>

      <ul>
        <li>A clean and dry capillary tube</li>
        <li>A tipped pointer</li>
        <li>A beaker containing water</li>
        <li>A travelling microscope</li>
        <li>Adjustable wooden stand</li>
        <li>Clamps and stand</li>
      </ul>

      <h1 className={classes.headTag}>Real lab Procedure</h1>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>To set up the apparatus :</em>
      </h2>

      <ul>
        <li>
          Place the adjustable height stand on the table and make its base
          horizontal by leveling the screws.
        </li>
        <li>
          Fix the capillary tube and the pointer in a cork, and clamp it in a
          rigid stand so that the capillary tubes and the pointer become
          vertical.
        </li>
        <li>
          Adjust the height of the vertical stand, so that the capillary tubes
          dip in the water in an open beaker.
        </li>
        <li>
          Adjust the position of the pointer, such that its tip just touches the
          water surface.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>To find the capillary rise :</em>
      </h2>

      <ul>
        <li>
          Find the least count of the travelling microscope for the horizontal
          and the vertical scale.
        </li>
        <li>Make the axis of the microscope horizontal.</li>
        <li>
          Adjust the height of the microscope using the height adjusting screw.
        </li>
        <li>
          Bring the microscope in front of the capillary tube and clamp it when
          the capillary rise becomes visible.
        </li>
        <li>
          Make the horizontal cross wire just touch the central part of the
          concave meniscus.
        </li>
        <li>
          Note the reading of the position of the microscope on the vertical
          scale.
        </li>
        <li>Now, carefully remove the beaker containing water</li>
        <li>
          Move the microscope horizontally and bring it in front of the pointer.
        </li>
        <li>
          Lower the microscope and make the horizontal cross wire touch the tip
          of the pointer.
        </li>
        <li>Corresponding vertical scale readings are noted.</li>
        <li>
          The difference in the two readings (i.e., height of water meniscus and
          height of the tip of pointer) will give the capillary rise of the
          given liquid.
        </li>
        <li>
          We can repeat the experiment by changing the height of the wooden
          stand.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>To find the internal diameter of the capillary tube :</em>
      </h2>

      <ul>
        <li>Place the capillary tube horizontally on the adjustable stand.</li>
        <li>Focus the microscope on the end dipped in water.</li>
        <li>
          Make the horizontal cross- wire touch the inner circle at A (fig i).
          Note microscope reading on the vertical scale.
        </li>
        <li>
          Raise the microscope to make the horizontal cross wire touch the
          circle at B (fig ii). Note the vertical scale reading.
        </li>
        <li>
          The difference between the two readings will give the vertical
          internal diameter (AB) of the tube.
        </li>
        <li>
          Move the microscope on the horizontal scale and make the vertical
          cross wire touch the inner circle at C (fig iii). Note microscope
          reading on the horizontal scale.
        </li>
        <li>
          Move the microscope to the right to make the vertical cross wire touch
          the circle at D &nbsp;(fig iv). Note the horizontal scale reading.
        </li>
        <li>
          The difference between the two readings will give the horizontal
          internal diameter (CD) of the tube.
        </li>
      </ul>

      <p>
        <img alt="" src={SurfaceTensionPro1} />
      </p>

      <ul>
        <li>
          We can calculate the diameter of the tube by calculating the mean of
          the vertical and horizontal internal diameters. Half of the diameter
          will give the radius of the capillary tube.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (As performed through{' '}
        <a href="http://amrita.olabs.co.in" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>
          Select the liquid for which the coefficient of viscosity is to be
          measured, from the 'Select Solution' drop down list.
        </li>
        <li>
          Select the environment to perform the experiment from the 'Select
          Environment' drop down list.
        </li>
        <li>
          Use the ‘Select Temperature’ slider to change the temperature of the
          liquid.
        </li>
        <li>
          Use the ‘Capillary tube diameter’ slider to change the diameter of the
          capillary tube.
        </li>
        <li>
          Use the ‘Height of wooden stand slider to change the height of the
          wooden stand.
        </li>
        <li>
          Use the ‘Level of retort stand’ slider to change the height of the
          retort stand.
        </li>
        <li>Use the ‘Focus of microscope’ slider to focus the microscope.</li>
        <li>
          Use the arrows on the focusing screw also to focus the microscope.
        </li>
        <li>
          Use the ‘Height of microscope’ slider to change the height of the
          microscope.
        </li>
        <li>
          Use the arrows on the fine adjusting screw also to adjust the height
          of the microscope.
        </li>
        <li>
          Click on the beaker to see the zoomed view of that portion, to see
          whether the pointer tip just touches water level.
        </li>
        <li>Use the ‘Remove beaker’ button to remove the beaker.</li>
        <li>
          Click on the microscope to see the zoomed view of the vertical scale.
          Drag the scale to take the main scale and vernier scale readings.
        </li>
        <li>
          Now, calculations are done as per the real lab procedure and the
          surface tension of the selected liquid can be found out.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>
        Least count of the travelling microscope = Value of one MSD / Number of
        divisions on the Vernier
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={SurfaceTensionPro2}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; =
        &nbsp;0.01 mm
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = 0.001
        cm
      </p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>To find the capillary rise :</em>
      </h2>

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
              <td rowspan="2">
                No
              </td>
              <td colspan="3">
                Radius of the water meniscus
              </td>
              <td colspan="3">
                Reading at tht tip of pointer
              </td>
              <td rowspan="2">
                Height, h = h<sub>1</sub>-h<sub>2</sub>&nbsp; (cm)
              </td>
            </tr>
            <tr>
              <td>M.S.R. (cm)</td>
              <td>V.S.R. (div.)</td>
              <td>
                Total = MSR+(VSR×LC)&nbsp; h<sub>1</sub> (cm)
              </td>
              <td>M.S.R. (cm)</td>
              <td>V.S.R. (div.)</td>
              <td>
                Total = MSR+(VSR×LC)&nbsp; h<sub>2</sub> (cm)
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Mean h = ……….......... cm
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = ............. ×10<sup>-2</sup> m
      </p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>To find the internal diameter of the capillary tube :</em>
      </h2>

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
              <td colspan="4">
                Microscope readings for cross wire in position,
              </td>
              <td colspan="3">
                Internal diameter
              </td>
              <td rowspan="2">
                Internal radius,{' '}
                <img
                  alt=""
                  src={SurfaceTensionPro3}
                />
                &nbsp; &nbsp; (cm)
              </td>
            </tr>
            <tr>
              <td>
                <p>A</p>

                <p>(cm)</p>
              </td>
              <td>
                <p>B</p>

                <p>(cm)</p>
              </td>
              <td>
                <p>C</p>

                <p>(cm)</p>
              </td>
              <td>
                <p>D</p>

                <p>(cm)</p>
              </td>
              <td>Vertical, Y= B-A (cm)</td>
              <td>Horizontal, X=D-C (cm)</td>
              <td>
                Mean,&nbsp;
                <img
                  alt=""
                  src={SurfaceTensionPro4}
                />
                &nbsp;(cm)
              </td>
            </tr>
            <tr>
              <td>
                <p>&nbsp;</p>

                <p>&nbsp;</p>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

   

      <h1 className={classes.headTag}>Calculations</h1>

      <p>
        Density of water at observed temperature, ρ = ............ kgm
        <sup>-3 </sup>
      </p>

      <p>
        Angle of contact of water in glass,
        θ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; = 8
        <sup>o</sup>
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; &nbsp;{' '}
        <img
          alt=""
          src={SurfaceTensionPro5}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Cos
        θ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
        0.99027
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          alt=""
          src={SurfaceTensionPro6}
        />
        &nbsp; &nbsp;1
      </p>

      <p>
        Note the values of&nbsp; h in the first table and r in the second table
        for each capillary tube separately&nbsp; and find the value of T in each
        case.
      </p>

      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Surface tension ,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SurfaceTensionPro7}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        = .................. N/m
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <p>Surface tension of water&nbsp; is ………………… N/m</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Surface Tension. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=224&cnt=2
        </Typography>
      </div>
    </div>
  );
}
