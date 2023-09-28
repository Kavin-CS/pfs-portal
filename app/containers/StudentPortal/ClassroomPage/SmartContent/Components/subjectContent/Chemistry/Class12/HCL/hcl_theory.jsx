import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import HCLThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HCL1/hcl-the1.png';
import HCLThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HCL1/hcl-the2.png';
import HCLThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HCL1/hcl-the3.jpg';


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
        Our objective is to study the effect of concentration on the rate of
        reaction between sodium thiosulphate and hydrochloric acid.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is Chemical Kinetics?</h2>

      <p>
        For any chemical reaction, its feasibility and extent of reaction are
        very important. The feasibility of a reaction can be predicted by
        thermodynamics and the extent can be determined from chemical
        equilibrium. Like feasibility and extent, it is important to know the
        rate and the factors affecting the rate of a chemical reaction. The
        branch of chemistry that deals with the study of reaction rate and its
        mechanism is called Chemical Kinetics.
      </p>

      <h2 className={classes.secondaryTag}>What does the rate of a reaction mean?</h2>

      <p>
        In all the chemical reactions the reactants are consumed and new
        products are formed. So the rate of a reaction is defined as the rate of
        decrease in concentration of any one of the reactants or the rate of
        increase in concentration of any one of the product.
      </p>

      <p>Consider the hypothetical reaction, R &gt; P.</p>

      <p>
        [R] and [P] are the concentrations of the reactants and the product
        respectively.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»disappearance«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»R«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»-«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mfenced close=¨]¨ open=¨[¨»«mi mathvariant=¨normal¨»R«/mi»«/mfenced»«/mrow»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»appearance«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»Increase«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»in«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»concentration«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»P«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»k«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mfenced close=¨]¨ open=¨[¨»«mi mathvariant=¨normal¨»P«/mi»«/mfenced»«/mrow»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Rate«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»reaction«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»-«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mo»[«/mo»«mi mathvariant=¨normal¨»R«/mi»«mo»]«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mo»[«/mo»«mi mathvariant=¨normal¨»P«/mi»«mo»]«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»t«/mi»«/mrow»«/mfrac»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={HCLThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>
          What are the factors that influence the rate of a reaction?
        </strong>
      </p>

      <p>
        There are various factors that can affect the rate of a chemical
        reaction.
      </p>

      <ul>
        <li>Temperature</li>
        <li>Concentration of the reactant</li>
        <li>Physical state</li>
        <li>Catalyst</li>
      </ul>

      <p>
        The concentration of the reactant plays an important role in the rate of
        a reaction. As the concentration of the reactant increases, the number
        of reacting molecules increases. Because of the increase in the number
        of molecules, the number of collisions also increases as a result the
        rate of the reaction increases.
      </p>

      <h2 className={classes.secondaryTag}>Reaction between Sodium thiosulphate and Hydrochloric Acid</h2>

      <p>
        The effect of concentration of the reactant on the rate of a reaction
        can be studied easily by the reaction between sodium thiosulphate and
        hydrochloric acid.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»Na«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»HCl«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»S«/mi»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«/mrow»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»NaCl«/mi»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»aq«/mi»«mo»)«/mo»«/mrow»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mrow»«mn»2«/mn»«mo»(«/mo»«mi mathvariant=¨normal¨»g«/mi»«mo»)«/mo»«/mrow»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»O«/mi»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»l«/mi»«mo»)«/mo»«/mrow»«/msub»«/math»"
          class="Wirisformula"
          src={HCLThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        Sodium thiosulphate reacts with dilute acid to produce sulphur dioxide,
        sulphur and water. Sulphur dioxide is a soluble gas and dissolves
        completely in aqueous solution. The sulphur formed however is insoluble
        and exist in the mixture as a white or pale yellow precipitate or a
        colloid that gives a milky appearance and makes the solution opaque.
        Therefore the rate of the reaction can be studied by monitoring the
        opaqueness of the reaction. This can be easily done by measuring the
        time taken (t) for forming a certain amount of sulphur.
      </p>

      <p>
        In this experiment, the reaction is carried out by mixing the reactants
        in a conical flask, and placing the conical flask on the top of a piece
        of white paper that has a cross mark on it. Before the reaction starts,
        the mark is clearly visible from the top of the conical flask through
        the solution. However, as the reaction proceeds, sulphur precipitates
        that make the solution more opaque and eventually the mark gets
        completely masked. The time taken (t) for the mark to totally disappear
        indicates how fast the reaction has occurred.
      </p>

      <p>
        We can plot a graph between 1/t (in second) and the concentration of
        sodium thiosulphate by taking 1/t along ordinate axis and concentration
        of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> along abscissa. The graph
        should be a straight slopping line.
      </p>

      <p>
        <img alt="" src={HCLThe3} />
      </p>

      <p>
        From the graph, it is clear that 1/t is directly proportional to the
        concentration of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. But 1/t is a
        direct measure of the rate of the reaction. Therefore the rate of the
        reaction between Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> and HCl is
        directly proportional to the concentration of Na<sub>2</sub>S
        <sub>2</sub>O<sub>3</sub> solution.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the effect of concentration of the reactant on the
          rate of a chemical reaction.
        </li>
        <li>
          Once the students understand the concept of the experiment and the
          different steps, they can perform the experiment in the real lab more
          accurately and quickly.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Sodium Thiosulphate and Hydrochloric Acid. Retrieved 29 March 2021,
          from amrita.olabs.edu.in/?sub=73&brch=8&sim=142&cnt=1
        </Typography>
      </div>
    </div>
  );
}
