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
import FrictionPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-pro1.png';
import FrictionPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-pro2.png';
import FrictionPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-pro3.png';

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
        <li>&nbsp; &nbsp; Wooden block</li>
        <li>&nbsp;&nbsp; &nbsp;50 or 20 g slotted weights</li>
        <li>
          &nbsp;&nbsp; &nbsp;Horizontal plane (table top) fitted with a
          frictionless pulley at one end
        </li>
        <li>&nbsp;&nbsp; &nbsp;Weight box</li>
        <li>&nbsp;&nbsp; &nbsp;Spring balance</li>
        <li>&nbsp;&nbsp; &nbsp;Thread</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          Find the mass of the wooden block by using a spring balance and place
          it on the table fitted with a frictionless pulley at one end.
        </li>
        <li>
          Tie one end of a thread with the hook of the wooden block and pass it
          over the pulley.
        </li>
        <li>
          Tie the other free end of the thread to the weight hanger and let it
          hang vertically.
        </li>
        <li>
          Increase the mass, till the block just starts sliding when tapping the
          table.
        </li>
        <li>
          Note the total mass added to the weight hanger and multiply it with
          acceleration due to gravity, g to get the total weights added and
          record them in the observation table.This gives the force of limiting
          friction, F.
        </li>
        <li>
          The normal reaction, R is given by the mass, M of the wooden block
          multiplied by acceleration due to gravity, g.
        </li>
        <li>
          Repeat the experiment with different masses on the block and in each
          case is calculated and it is found to be a constant for &nbsp;the
          given pair of surfaces.
        </li>
        <li>
          Plot a graph taking normal reaction, R along X axis and limiting
          friction, F along Y axis. The graph will be a straight line sloping
          upwards.
        </li>
        <li>
          The coefficient of friction is also calculated by measuring the slope
          of the graph.
        </li>
      </ul>

      <p>
        <img
          alt=""
          src={FrictionPro1}
        />
        &nbsp;&nbsp;
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure&nbsp;(As performed through the{' '}
        <a href="//amrita.olabs.edu.in/">Online labs</a>)
      </h1>

      <ul>
        <li>
          Select the material of the block from the 'Block material’ drop down
          list
        </li>
        <li>
          Select the material of the surface to perform the experiment from the
          ‘Surface material' drop down list.
        </li>
        <li>
          Use the ‘Block Weight’ slider to change the weight of the block.
        </li>
        <li>
          A thread is fixed at one side of the block and passes over a pulley.
        </li>
        <li>
          Use the ‘Hanging Weight’ slider to change the weight attached at the
          other end of the thread.
        </li>
        <li>
          The block moves towards right according to the addition of mass
          attached at the other end.
        </li>
        <li>
          A graph is plotted automatically with normal reaction along X axis and
          limiting friction along Y axis.
        </li>
        <li>The mass of the block and attached weights are noted.</li>
        <li>
          Now, calculations are done as per the observation column and the
          coefficient of friction of the block can be found out.
        </li>
        <li>
          Enable the ‘Show result’ checkbox to view the limiting friction,
          normal reaction, and coefficient of friction of the selected block.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>&nbsp;Weight of the wooden block, W =...................g wt</p>

      <h2 className={classes.secondaryTag}>Table for finding coefficient of friction</h2>

      <div >
        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td>No of Observations</td>
              <td>
                <p>Weight on wooden block</p>

                <p>W(g wt)</p>
              </td>
              <td>
                <p>Normal Reaction</p>

                <p>R=W+w(g wt)</p>
              </td>
              <td>
                <p>Total weights on weight hanger=</p>

                <p>Limiting frictionF(g wt)</p>
              </td>
              <td>
                <p>Coefficient of friction</p>

                <p>
                  <img
                    alt=""
                    src={FrictionPro2}
                  />
                </p>
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
          </tbody>
        </table>
      </div>

      <p>
        From graph, coefficient of friction can be calculated as ,{' '}
        <img
          alt=""
          src={FrictionPro3}
        />
        &nbsp;=--------
      </p>

      <h1 className={classes.headTag}>Result</h1>

      <ol>
        <li>
          &nbsp;&nbsp; &nbsp;Since F/R is a constant, the value of limiting
          friction is directly proportional to normal reaction.
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;By calculation, Coefficient of fiction between
          given surfaces, µ&nbsp;=-------.
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;From graph, Coefficient of fiction between given
          surfaces, µ&nbsp;=-------.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Friction. Retrieved 23 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=191&cnt=2
        </Typography>
      </div>
    </div>
  );
}
