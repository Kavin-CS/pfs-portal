import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import UrineThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Urine1/urine-the1.jpg';


const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        Our objective is to detect the presence of sugar in the given sample of
        urine.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        A large volume of volatile and non-volatile waste products is produced
        by different metabolic processes in the body. Urine is a liquid
        byproduct produced in animal and human bodies.&nbsp; It is produced in
        the kidneys through a process called urination and is excreted through
        the urethra. Urination is the primary method of excreting water-soluble
        chemicals from the body.
      </p>

      <h2 className={classes.secondaryTag}>Let’s discuss some characteristics of urine.</h2>

      <p>
        Normal urine usually has a light yellow colour, due to the presence of a
        yellow pigment called Urochrome. Average production of urine in adult
        humans is 2 liters per day, depending upon various conditions. The pH of
        urine varies between 4.6-8 and the specific gravity of urine varies
        between 1.010-1.40.
        <br />
        Now let’s see, what are the constituents of urine?
      </p>

      <h2 className={classes.secondaryTag}>Normal Constituents of Urine</h2>

      <p>
        Actually, normal urine is a highly complex aqueous solution of organic
        and inorganic substances. Urine consists of about 95-96% water. The most
        important nitrogenous organic substances present in urine are urea, uric
        acid and creatine. The other organic substances are oxalic acid and
        lactic acid. The principle inorganic constituents of urine are sodium
        chloride, potassium chloride, sulphates and phosphates.
      </p>

      <h2 className={classes.secondaryTag}>Abnormal Constituents of Urine</h2>

      <p>
        The abnormal constituents of urine are sugar (glucose), ketone bodies,
        blood, protein and bile.&nbsp; Ordinarily, glucose (sugar) is absent in
        normal urine. But when the glucose level in blood exceeds the renal
        threshold of glucose (160 – 180 mg /dl), glucose starts to appear in
        urine. The presence of glucose in urine is called glucosuria and is
        usually an indication of diabetes mellitus.
      </p>

      <p>
        Generally the following two tests are used to test the presence of sugar
        in urine sample.
      </p>

      <ul>
        <li>Benedict’s Test</li>
        <li>Fehling’s Test</li>
      </ul>

      <p>
        In Benedict’s test, Benedict’s solution is used as the reagent.&nbsp;
        Benedict’s reagent is a combination of sodium carbonate, sodium citrate
        and copper (II) sulphate pentahydrate (CuSO4.5H2O). In Fehling’s test,
        Fehling’s solution-A and Fehling’s solution-B are used as the reagents.
        Fehling’s solution-A is an aqueous solution of copper (II) sulphate,
        having blue colour, while Fehling’s solution-B is clear colourless
        aqueous solution of sodium potassium tartrate.
        <br />
        On boiling the urine sample with the reagents, the copper (II) sulphate
        (CuSO4) present in the Benedict’s solution and Fehling’s solution is
        reduced by the reducing agent, glucose (sugar), to form a coloured
        precipitate of cuprous oxide.
      </p>

      <p>
        <img alt="" src={UrineThe1} />
      </p>

      <p>
        Depending upon the concentration of glucose, green, yellow and brick red
        precipitates of cuprous oxide are formed. Below is the table showing the
        color sequence depending upon the concentration of glucose level.
      </p>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
        height="201"
        width="421"
      >
        <tbody>
          <tr>
            <td textAlign="center;">Colour of precipitate</td>
            <td textAlign="center;">Percentage of sugar present</td>
          </tr>
          <tr>
            <td textAlign="center;">Blue&nbsp;&nbsp; &nbsp;</td>
            <td textAlign="center;">sugar absent</td>
          </tr>
          <tr>
            <td textAlign="center;">Green&nbsp;&nbsp; &nbsp;</td>
            <td textAlign="center;">0.5 to 1%</td>
          </tr>
          <tr>
            <td textAlign="center;">Yellow&nbsp;&nbsp; &nbsp;</td>
            <td textAlign="center;">1 to 2 % sugar</td>
          </tr>
          <tr>
            <td textAlign="center;">Brick Red</td>
            <td textAlign="center;">2 % or more sugar</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>Students understand the characteristics of urine.</li>
        <li>
          Students understand the normal and abnormal constituents of urine.
        </li>
        <li>
          Students understand the test to detect the presence of sugar in urine
          sample.
        </li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Detection of Sugar in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=207&cnt=1
        </Typography>
      </div>
    </div>
  );
}
