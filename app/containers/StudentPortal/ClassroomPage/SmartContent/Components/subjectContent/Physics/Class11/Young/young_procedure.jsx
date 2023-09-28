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
import YoungPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-pro1.png';
import YoungPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-pro2.png';
import YoungPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-pro3.png';
import YoungPro4 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-pro4.png';
import YoungPro5 from '../../../../../../../../../assets/Images/Subjects/Physics/Young1/young-pro5.png';


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
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Searle’s apparatus</li>
        <li>Two long steel wires of same length and diameter</li>
        <li>A metre scale</li>
        <li>A set of &nbsp;1/2 Kg slotted weights</li>
        <li>1 Kg weight hanger</li>
        <li>1 Kg dead load.</li>
      </ul>

      <h1 className={classes.headTag}>The Procedure</h1>

      <ul>
        <li>
          Two wires of the same material, length and diameter have their ends
          &nbsp;tightened &nbsp;in torsion screws A,B, C and D as shown in Fig.
        </li>
        <li>
          Wire AB becomes the experimental wire and CD becomes the auxiliary
          wire.&nbsp;
        </li>
        <li>Suspend a 1 kg dead load from hook of frames F1 and F2.&nbsp;</li>
        <li>
          The weight hanger at F1 is loaded and unloaded 3 or 4 times, so that
          the experimental wire AB comes under elastic mood.&nbsp;
        </li>
        <li>
          Now, each wire has been loaded equally with 1 kg. The pitch and the
          least count of the spherometer are determined.
        </li>
        <li>
          The central screw is adjusted in such a way that the air bubble in the
          spirit level is exactly at the centre. The head scale reading of the
          spherometer is noted for zero weight in the weight hanger attached to
          the frame F1.&nbsp;
        </li>
        <li>
          A half kg of weight is now added to the weight hanger attached to the
          frame F1.
        </li>
        <li>
          The air bubble moves away from the centre. The spherometer screw is
          adjusted so that the air bubble comes back to the centre. The
          spherometer reading is noted.&nbsp;
        </li>
        <li>
          The load is increased in steps of half kg (maximum load should be less
          than the breaking stress) and the corresponding spherometer reading is
          noted.&nbsp;
        </li>
        <li>
          The same procedure is repeated for unloading the weights in steps of
          half kg. From these observations the extension, l for a load M can be
          determined.
        </li>
        <li>Young’s modulus can be calculated using the equation (3)</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>Select the environment from the drop down list.</li>
        <li>Select the material of the wire from the drop down list.</li>
        <li>Change the radius of the wire using the slider.</li>
        <li>Change the length of the wire using the slider.</li>
        <li>Change the weight in the weight hanger using the slider.</li>
        <li>
          Once the weight has been added to the weight hanger, the bubble in the
          sprit level moved to its extreme end.
        </li>
        <li>
          Click on the right/left arrow button on the bottom right side to move
          the spherometer upward/downward to adjust the bubble to the center.
        </li>
        <li>
          Note down the number of rotations and fractional rotations from the
          spherometer and the value from the scale.
        </li>
        <li>Calculate the extension, l, of the wire form the values.</li>
        <li>
          Calculate the Young’s modulus of the wire using the formula, Y =
          MgL/πr<sup>2</sup>l .
        </li>
        <li>
          To verify your result click on the ‘Show result’ check box. &nbsp;
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Our Observations:</h1>

      <h2 className={classes.secondaryTag}>To find the diameter of the wire using a screw gauge.</h2>

      <p>Distance moved by the screw for 4 rotations, x =………mm</p>

      <p>Pitch of the screw, P&nbsp; =…………… mm</p>

      <p>Number of divisions on the circular scale, N=.................</p>

      <p>Least Count (L.C) of the screw gauge = &nbsp;=……………………….mm</p>

      <p>Zero Correction, z =………………………..dvs&nbsp;</p>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          
        >
          <tbody>
            <tr>
              <td>Slno</td>
              <td>PSR(mm)</td>
              <td>HSR(div)</td>
              <td>Corrected HSR=HSR+z(div)</td>
              <td>
                Total Reading=(PSR+(corrected HSR&nbsp;
                <img
                  alt=""
                  src={YoungPro1}
                  
                />
                <img
                  alt=""
                  src={YoungPro1}
                />
                &nbsp;L.C))mm
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="4" rowspan="1">
                Mean Diameter, d
              </td>
              <td>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Radius of the experimental wire, r = d/2 =.............mm = ……x 10
        <sup>-3</sup>m
      </p>

      <p>
        Length of the experimental wire, L =………..cm =…………x10<sup> -2</sup>m
      </p>

      <h2 className={classes.secondaryTag}>How to find Load and Extension&nbsp;</h2>

      <h2 className={classes.secondaryTag}>Least count of Spherometer</h2>

      <p>1 pitch scale division = 1mm</p>

      <p>Number of full rotations given to screw = 4</p>

      <p>Distance moved by the screw for 4 rotations = 4mm</p>

      <p>
        Hence, pitch, p=&nbsp;
        <img
          alt=""
          src={YoungPro2}
        />
        &nbsp; =1mm
      </p>

      <p>Number of divisions on circular scale = 100</p>

      <p>
        Hence least count= &nbsp;
        <img
          alt=""
          src={YoungPro3}
        />
        = 0.01 mm
      </p>

      <div>
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td rowspan="2">SlNo</td>
              <td rowspan="2">Load on hanger,M(kg)</td>
              <td colspan="3">
                Spherometer Screw reading
              </td>
              <td rowspan="2">Extension,l for a loadM=2 kg(mm)</td>
            </tr>
            <tr>
              <td>On loading, x (mm)</td>
              <td>On unloading,y(mm)</td>
              <td>
                Mean,
                <img
                  alt=""
                  src={YoungPro4}
                />
                (mm)
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>0</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z1</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>.5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z2</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z3</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>1.5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z4</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z5</td>
              <td>z5-z1</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>2.5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z6</td>
              <td>z6-z2</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z7</td>
              <td>z7-z3</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>3.5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>z8</td>
              <td>z8-z4</td>
            </tr>
            <tr>
              <td colspan="5" rowspan="1">
                Mean extension, l
              </td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>The Calculations :</h1>

      <p>
        Mean extension for 2 kg load, l = ……………x10<sup>-3</sup>m
      </p>

      <p>Load, M = 2 kg</p>

      <p>
        Young’s modulus, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={YoungPro5}
        />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; = …………………………Nm<sup>-2</sup>
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        The Young’s modulus for the material of the wire as determined by
        Searle’s apparatus, Y = ………………Nm<sup>-2</sup>
      </p>

      <h1 className={classes.headTag}>Now, we’ll do the experiment…</h1>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Young's Modulus. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=155&cnt=2
        </Typography>
      </div>
    </div>
  );
}
