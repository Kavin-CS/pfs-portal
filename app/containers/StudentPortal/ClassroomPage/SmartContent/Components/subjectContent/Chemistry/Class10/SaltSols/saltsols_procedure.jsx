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
import SaltSolsPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SaltSols1/saltsols-pro1.png';
import SaltSolsPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SaltSols1/saltsols-pro2.jpg';

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
      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img
          alt=""
          src={SaltSolsPro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Select four 100ml beakers and label them as zinc sulphate, copper
          sulphate, aluminium sulphate and ferrous sulphate.
        </li>
        <li>
          Add 20ml of 1M solution of ZnSO<sub>4</sub>, CuSO<sub>4</sub>, Al
          <sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> and FeSO<sub>4</sub> in the
          labeled beaker respectively.
        </li>
        <li>
          Take a strip of cleaned zinc metal and cut it into small pieces of
          suitable size.
        </li>
        <li>
          Add two pieces into each beaker containing CuSO<sub>4</sub>, Al
          <sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> and FeSO<sub>4.</sub>
        </li>
        <li>Keep the beakers undisturbed for about 1 hour.</li>
        <li>
          After about an hour, note the change in colour of solutions,
          appearance of metal surface or any other change.
        </li>
        <li>Repeat the similar procedure by adding-</li>
        <li>
          Copper strips to ZnSO<sub>4</sub>, Al<sub>2</sub>(SO<sub>4</sub>)
          <sub>3</sub> and FeSO<sub>4</sub> solutions.
        </li>
        <li>
          Aluminium strips to ZnSO<sub>4</sub>, CuSO<sub>4</sub>, and FeSO
          <sub>4</sub> solutions.
        </li>
        <li>
          Iron strips to ZnSO<sub>4</sub>, CuSO<sub>4</sub> and Al<sub>2</sub>
          (SO<sub>4</sub>)<sub>3</sub> solutions.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        &nbsp;Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h1>

      <ul>
        <li>Select the metal from the ‘Select the metal’ drop down list.</li>
        <li>
          For the solution in beaker A, select it from the ‘Beaker A’ drop down
          list.
        </li>
        <li>
          For the solution in beaker B, select it from the ‘Beaker B’ drop down
          list.
        </li>
        <li>
          For the solution in beaker C, select it from the ‘Beaker C’ drop down
          list.
        </li>
        <li>
          To add metal pieces into the beaker A, drag the forceps over the
          beaker.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
        <li>
          To add metal pieces into the beaker B, drag the forceps over the
          beaker.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
        <li>
          To add metal pieces into the beaker C, drag the forceps over the
          beaker.
        </li>
        <li>You can click on the inference icon to see the inference.</li>
        <li>
          To verify your findings;
          <ul>
            <li>
              Select the metal having the highest reactivity from the ‘Most
              reactive metal’ drop down list and verify the result.
            </li>
            <li>
              Select the metal having the lowest reactivity from ‘Least reactive
              metal’ drop down list and verify the result.
            </li>
            <li>
              Select the increasing order of reactivity of the metals from
              ‘Increasing order of reactivity’ drop down list and verify the
              result.
            </li>
          </ul>
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
          marginLeft="34px"
        >
          <tbody>
            <tr>
              <td valign="top" width="83">
                <br />
                Metal
              </td>
              <td valign="top" width="111">
                Salt solution in which added
              </td>
              <td valign="top" width="206">
                Colour change of solution
              </td>
              <td valign="top" width="142">
                Appearance of metal surface
              </td>
              <td valign="top" width="190">
                Inference
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                Zinc
              </td>
              <td valign="top" width="111">
                CuSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Blue color of CuSO<sub>4</sub> disappears and red-brown copper
                particles settle down at the bottom of the beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Zn can displace Cu from CuSO<sub>4 </sub>solution.
                <br />
                Zn + CuSO<sub>4&nbsp;</sub>---&gt; ZnSO<sub>4 </sub>+ Cu
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Zn cannot displace Al from Al2(SO<sub>4</sub>)<sub>3 </sub>
                solution.
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                FeSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Green colour of ferrous sulphate disappears. Iron metal is
                settling down at the bottom of the beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Zn can displace Fe from FeSO<sub>4 </sub>solution.
                <br />
                Zn + FeSO<sub>4</sub>&nbsp;---&gt; ZnSO<sub>4</sub> + Fe
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                Copper
              </td>
              <td valign="top" width="111">
                ZnSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Cu cannot displace Zn from ZnSO<sub>4</sub> solution.
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Cu cannot displace Al from Al<sub>2</sub>(SO<sub>4</sub>)
                <sub>3</sub> &nbsp;solution.
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                FeSO4
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Cu cannot displace Fe from FeSO<sub>4</sub> &nbsp;solution.
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                Aluminium
              </td>
              <td valign="top" width="111">
                ZnSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless. Zinc metal is settling down at the
                bottom of the beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Al can displace Zn from ZnSO<sub>4</sub> solution.
                <br />
                2Al + 3ZnSO<sub>4</sub>&nbsp;&nbsp;---&gt; 3Zn + Al<sub>2</sub>
                (SO<sub>4</sub>)<sub>3</sub>
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                CuSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Blue colour of CuSO<sub>4</sub> disappears. The&nbsp;&nbsp;
                brown colored copper particles settle down at the bottom of the
                beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Al can displace Cu from CuSO4 solution.
                <br />
                2Al + 3CuSO<sub>4</sub>&nbsp;---&gt;&nbsp;3Cu + Al<sub>2</sub>
                (SO<sub>4</sub>)<sub>3</sub>
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                FeSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Green colour of FeSO<sub>4</sub> disappears. Iron&nbsp;&nbsp;
                metal is settling down at the bottom of the beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Al can displace Fe from FeSO4 solution.
                <br />
                2Al + 3FeSO4---&gt; 3Fe + Al2(SO4)3<p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                Iron
              </td>
              <td valign="top" width="111">
                ZnSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Fe cannot displace Zn from ZnSO4 &nbsp;solution
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                CuSO<sub>4</sub>
              </td>
              <td valign="top" width="206">
                Blue colour of CuSO<sub>4 </sub>changes to light green colored
                FeSO<sub>4</sub>. Copper metal is formed in the beaker.
              </td>
              <td valign="top" width="142">
                Changes
              </td>
              <td valign="top" width="190">
                Fe can displace Cu from CuSO4 solution.
                <br />
                Fe+ CuSO<sub>4</sub> &nbsp;----&gt;&nbsp;&nbsp;&nbsp;&nbsp;Cu +
                &nbsp;FeSO<sub>4 </sub>
              </td>
            </tr>
            <tr>
              <td valign="top" width="83">
                &nbsp;
              </td>
              <td valign="top" width="111">
                Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>
              </td>
              <td valign="top" width="206">
                Solution remains colorless.
              </td>
              <td valign="top" width="142">
                No change
              </td>
              <td valign="top" width="190">
                Fe cannot displace Al from Al<sub>2</sub>(SO<sub>4</sub>)
                <sub>3</sub> &nbsp;solution.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Conclusions:</h1>

      <ul>
        <li>
          Aluminium is able to displace Zn, Cu and Fe from their salt solutions.
        </li>
        <li>Zinc is able to displace Cu and Fe from their salt solutions.</li>
        <li>Fe is able to displace Cu from its salt solution.</li>
        <li>Cu cannot displace Zn, Al or Fe from their salt solutions.</li>
        <li>
          Thus, aluminium is a more reactive metal. The reactivity of given
          metals in decreasing order is as given below:
        </li>
      </ul>

      <p>
        <img
          align="middle"
          alt=""
          src={SaltSolsPro2}
        />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>Do not touch any chemical.</li>
        <li>
          Label the beakers properly and put them in sequences. It is better to
          label the beakers both with the chemical names and also by chemical
          symbols.
        </li>
        <li>
          Till the reaction goes on, keep the beakers at a safe place. Cover
          them so that insects or dust may not pollute the solutions.
        </li>
        <li>
          It is very important that the apparatus you use must be very clean and
          dry.
        </li>
        <li>
          &nbsp;Always clean the metallic strips before use with a sand paper.
          Use the same strips of metals of same size, weight and number.
        </li>
      </ol>

      <p>
        <strong>
          &nbsp; Let’s check the reactivity of these metals. Have a safe lab!!
        </strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). To Study the Relative Reactivity of
          Metals using Salt Solution. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=59&cnt=2
        </Typography>
      </div>
    </div>
  );
}
