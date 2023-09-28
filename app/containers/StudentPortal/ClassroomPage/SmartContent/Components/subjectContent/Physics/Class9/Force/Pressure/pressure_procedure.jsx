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
import PressurePro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-pro1.png';
import PressurePro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-pro2.gif';
import PressurePro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-pro3.gif';
import PressurePro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-pro4.gif';
import PressurePro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Pressure1/pressure-pro5.gif';

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
      

      <h1 className={classes.headTag}>Materials required:&nbsp;</h1>

      <p>
        <img alt="" src={PressurePro1} />
      </p>

      

      <h1 className={classes.headTag}>The Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>As performed in a real lab:</h2>

      <p>Fill ¾ ths of a tray with dry sand and level it.</p>

      <ul>
        <li>
          Measure the dimensions of a solid iron cuboid accurately using a
          scale. Mark the three faces of the cuboid as A, B and C.
        </li>
        <li>
          Place the solid iron cuboid by the surface A on the plane levelled
          sand in the tray.
        </li>
        <li>
          After a few minutes, remove the Iron cuboid and you will see that it
          has made a depression in the sand.&nbsp;
        </li>
        <li>
          Measure the depth (depression) it has made in the sand using the
          scale.&nbsp;
        </li>
        <li>Repeat the same procedure for the other two surfaces. &nbsp;</li>
      </ul>

      <h2 className={classes.secondaryTag}>As performed using the simulator:</h2>

      <ol>
        <li>
          You can choose the environment&nbsp; in which you want to conduct the
          experiment:&nbsp;Earth or Moon.
        </li>
        <li>
          Select the iron cuboid’s face of your choice by clicking on that
          particular one.
        </li>
        <li>
          To find the depression made, you’ll first have to remove the iron
          cuboid from the tray. To do this, just click on the iron cuboid that
          is in the tray.
        </li>
        <li>
          Now calculate the Area and Pressure and note the values in the
          respective boxes.&nbsp; (Area = Length x Breadth) (Pressure = Thrust /
          Area, where Thrust = Mass x Acceleration due to gravity)
        </li>
        <li>
          Measure the depth (depression) made in the sand using the scale.&nbsp;
          To do this, click on the ‘Show Scale’ and ‘Tray Cross Section’ check
          box to take the measurement.
        </li>
        <li>
          The measurement can be taken by placing the scale against the right
          cross section of the tray.
        </li>
        <li>Repeat the same procedure for the other two surfaces. &nbsp;</li>
        <li>
          Once done, the simulation can be repeated by selecting a different
          environment from the one chosen earlier.
        </li>
      </ol>

      <h1 className={classes.headTag}>Observations:&nbsp;</h1>

      <p>
        Gravitational force on the environment = ……..&nbsp;
        <img
          align="absMiddle"
          alt=""
          height="20"
          src={PressurePro2}
          width="34"
        />
      </p>

      <ol start="1" type="1">
        <li>
          Calculate the area occupied by each surface of the solid iron
          cuboid.&nbsp;
        </li>
      </ol>

      <ul>
        <li>
          <ul type="disc">
            <li>
              Area occupied by surface A in the sand = .............
              <img
                align="absMiddle"
                alt=""
                height="20"
                src={PressurePro3}
                width="26"
              />
            </li>
            <li>
              Area occupied by surface B in the sand = .............&nbsp;
              <img
                align="absMiddle"
                alt=""
                height="20"
                src={PressurePro4}
                width="26"
              />
            </li>
            <li>
              Area occupied by surface C in the sand = .............&nbsp;
              <img
                align="absMiddle"
                alt=""
                height="20"
                src={PressurePro5}
                width="26"
              />
            </li>
          </ul>
        </li>
      </ul>

      <ol start="2" type="1">
        <li>
          Calculate the pressure made by each surface of the solid iron
          cuboid.&nbsp;
          <ul type="disc">
            <li>
              Pressure made by the surface A in the sand = ............. N
            </li>
            <li>
              Pressure made by the surface B in the sand = ............. N
            </li>
            <li>
              Pressure made by the surface C in the sand = ............. N
            </li>
          </ul>
        </li>
      </ol>

      <ol start="3" type="1">
        <li>Calculate the Depression.</li>
      </ol>

      <ol start="3" type="1">
        <li>
          <ul type="disc">
            <li>
              Depression made by the surface A in the sand =
              .............&nbsp;cm
            </li>
            <li>
              Depression made by the surface B in the sand = ............. cm
            </li>
            <li>
              Depression made by the surface C in the sand = ............. cm
            </li>
          </ul>
        </li>
      </ol>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>Dried sand must be used.</li>
        <li>The tray must have significant length and width.</li>
        <li>
          Appropriate cuboid of dimension must be used.
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
        </li>
      </ol>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Pressure Exerted by a Solid Iron Cuboid
          on Sand. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=71&cnt=2
        </Typography>
      </div>
    </div>
  );
}
