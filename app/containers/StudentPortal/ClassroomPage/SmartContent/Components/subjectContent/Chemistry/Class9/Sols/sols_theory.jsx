import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SolsThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the1.png';
import SolsThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the2.jpg';
import SolsThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the3.gif';
import SolsThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the4.gif';
import SolsThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the5.png';
import SolsThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-the6.gif';

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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>To prepare:</p>

      <ul>
        <li>A true solution of common salt, sugar and alum</li>
        <li>A suspension of soil, chalk powder and fine sand in water</li>
        <li>A colloidal of starch in water and egg albumin in water</li>
      </ul>

      <p>Distinguish between the above solutions on the basis of:</p>

      <ol type="a">
        <li>Transparency</li>
        <li>Filtration criterion</li>
        <li>Stability&nbsp;</li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is a solution?</h2>

      <p>
        <img alt="" src={SolsThe1} />
      </p>

      <p>
        A<strong> Solution</strong> is a homogeneous mixture of two or more
        substances. The component that is present in a larger amount is called
        the solvent. The component present in a smaller quantity is called the
        solute.&nbsp;
      </p>

      <p>
        The maximum mass of substance that is dissolved in 100 g of a solvent
        under a particular condition of temperature and pressure (for example,
        the conditions of room temperature and pressure) is referred to as the{' '}
        <strong>solubility </strong>of that substance in that solvent under the
        specified conditions. This solution so obtained is said to be a{' '}
        <em>saturated solution</em>.
      </p>

      <h2 className={classes.secondaryTag}>What is meant by a saturated solution?</h2>

      <p>
        It means that no more solute is dissolved in the solvent at the given
        temperature and pressure. Solubility varies with temperature and
        pressure. For example, solubility of salt/sugar increases with the rise
        in temperature. The solution in which no more solute is soluble in the
        solvent, at given temperature and pressure conditions is said to be a
        saturated solution under those specified conditions.&nbsp;
      </p>

      <p>
        The solutions which we generally come across are not saturated. They
        contain a smaller amount of solute. The compositions of such solutions
        are expressed as <strong>concentration, </strong>which refers to the
        quantity of a solute dissolved in a definite weight or volume of the
        solution. The concentration may be expressed in terms of either mass or
        moles. The number of moles of a solute present in one litre of a
        solution is called the molarity of that solution. If 58.5 g NaCl (Na =
        23 + Cl = 35. 5) is present in 1000 ml of a solution, it will be known
        as 1M (1 molar) solution of NaCl.&nbsp;
      </p>

      <p>
        Dispersion may give rise to a <strong>homogeneous </strong>(solution) or{' '}
        <strong>heterogeneous </strong>material (a suspension or a colloid). The
        distinction
      </p>

      <p>
        <img src={SolsThe2} />
      </p>

      <p>
        lies in the size of the dispersed particles. In suspension, the particle
        size is of the order of 10<sup>-5</sup> cm or larger. The particles can
        be seen distinctly in the dispersion medium (solvent) by the naked eye
        or under an ordinary&nbsp;microscope. The suspensions are not very
        stable. The suspended particles may settle down after sometime,
        e.g.,muddy water or smoke in the air.&nbsp;
      </p>

      <p>
        Colloids have&nbsp; particles smaller than 10<sup>-5</sup> cm (generally
        10<sup>-7</sup> to 10<sup>-5</sup> cm). The dispersed particles show
        very little tendency to separate. Colloid particles cannot be seen by
        the naked eye or under an ordinary microscope. Colloids are stable. Gum,
        milk and blood are typical colloids.&nbsp;
      </p>

      <p>
        In a solution, the particles are of molecular dimensions, smaller than
        10<sup>-7</sup> cm. Solutions are transparent and homogeneous.&nbsp;
      </p>

      <p>
        In a solution, mass percentage of solute is equal to 100 minus mass
        percentage of solvent&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={SolsThe3} />
        <br />
        &nbsp;
      </p>

      <p>
        To find out mass percentage of solute in its solution in water, we apply
        the following formula:
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          align="middle"
          alt=""
          src={SolsThe4}
        />
      </p>

      <p>
        The mass of water is always equal to its measurement in ml at room
        temperature and pressure. For example, mass of 50 ml of water is equal
        to 50 g because&nbsp;
      </p>

      <p>
        &nbsp;
        <img alt="" src={SolsThe5} />
        &nbsp;
      </p>

      <p>
        <img alt="" src={SolsThe6} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol start="1" type="1">
        <li>
          Students understand the terms: true solution, suspension, colloid,
          transparency, filterability, stability, etc.
        </li>
        <li>
          Students distinguish true solutions, suspensions and colloids based on
          experiments testing:
          <ul type="disc">
            <li>Transparency</li>
            <li>Filtration</li>
            <li>Stability</li>
          </ul>
        </li>
        <li>
          Students classify the mixtures given to them as true solutions,
          suspensions and colloids based on the information from the experiment.
        </li>
        <li>
          Students acquire skills to perform the experiments for testing the
          transparency, filtration criterion and stability of true solutions,
          suspensions and colloids.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Distinguishing Between Solutions.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=28&cnt=68
        </Typography>
      </div>
    </div>
  );
}
