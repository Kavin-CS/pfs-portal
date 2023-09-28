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
import ConservationPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-pro1.png';
import ConservationPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-pro2.png';
import ConservationPro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Conservation1/conservation-pro3.png';

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

      <ul>
        <li>A conical flask</li>
        <li>10ml test tube</li>
        <li>Measuring cylinders</li>
        <li>Thread</li>
        <li>Cork</li>
        <li>Electronic balance</li>
        <li>
          Barium chloride (BaCl<sub>2</sub>) solution
        </li>
        <li>
          Sodium sulphate (Na<sub>2</sub>SO<sub>4</sub>) solution
        </li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          Take 5ml of sodium sulphate solution in a measuring cylinder and pour
          it into a conical flask.
        </li>
        <li>
          Take about 5 ml of barium chloride solution in another measuring
          cylinder and pour it into a 10ml test tube.
        </li>
        <li>
          Tie the test tube using a thread and hang the test tube in the conical
          flask carefully, so that the solutions do not mix with each other.
        </li>
        <li>
          Put a cork in the mouth of the flask so that the thread holding the
          test tube is held firmly in place.
        </li>
        <li>
          Carefully weigh the flask on a weighing balance and note the reading.
        </li>
        <li>
          Tilt and swirl the flask so that barium chloride solution in the test
          tube spills and mixes with sodium sulphate solution in the flask and
          forms a white coloured precipitate of barium sulphate (BaSO
          <sub>4</sub>)and an aqueous solution of sodium chloride (NaCl).
        </li>
        <li>
          Wait for 10 min. to complete the reaction. The white precipitate
          settles down to the bottom of the flask.
        </li>
        <li>Weigh the contents of the flask again and note the reading.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure:</h1>

      <ul>
        <li>
          In order to start the simulator, click on the measuring cylinder
          containing 5 ml sodium sulphate solution to pour it into the conical
          flask.
        </li>
        <li>
          Click on the measuring cylinder containing 5 ml barium chloride
          solution to pour it into the 10 ml test tube.
        </li>
        <li>Click on the thread to tie the test tube with the thread.</li>
        <li>Click on the button,&nbsp; ‘NEXT STEP’ to proceed further.</li>
        <li>Click on the test tube to hang it in the conical flask.</li>
        <li>The conical flask is being closed with a cork.</li>
        <li>
          Click on the conical flask to place it on the balance and weigh it
          with all the contents.&nbsp;
        </li>
        <li>Note the reading on the balance.</li>
        <li>
          Click on the conical flask to tilt it and swirl it to mix both the
          solutions, ,the formation of a white precipitate occurs.&nbsp;
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the conical flask to weigh it again.</li>
        <li>Again note the reading on the balance.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>Mass of total apparatus + Mass of reactants = (M + m1) g</li>
        <li>
          When barium chloride solution in the test tube mixes with the sodium
          sulphate solution in the conical flask, a white precipitate is formed.
        </li>
        <li>Mass of total apparatus + Mass of products = (M + m2) g</li>
      </ul>

      <h1 className={classes.headTag}>Conclusions:</h1>

      <ul>
        <li>
          Aqueous solution of barium chloride reacts with that of sodium
          sulphate to form a white precipitate of barium sulphate and an aqueous
          solution of sodium chloride.
        </li>
      </ul>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨bold¨»BaCl«/mi»«mn»2«/mn»«/msub»«mfenced»«mrow»«mi mathvariant=¨bold¨»a«/mi»«mi mathvariant=¨bold¨»q«/mi»«/mrow»«/mfenced»«mo»+«/mo»«msub»«mi mathvariant=¨bold¨»Na«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨bold¨»SO«/mi»«mn»4«/mn»«/msub»«mfenced»«mrow»«mi mathvariant=¨bold¨»a«/mi»«mi mathvariant=¨bold¨»q«/mi»«/mrow»«/mfenced»«mo»§#8594;«/mo»«msub»«mi mathvariant=¨bold¨»BaSO«/mi»«mn»4«/mn»«/msub»«mfenced»«mi mathvariant=¨bold¨»s«/mi»«/mfenced»«mo»+«/mo»«mn»2«/mn»«mi mathvariant=¨bold¨»NaCl«/mi»«mfenced»«mrow»«mi mathvariant=¨bold¨»a«/mi»«mi mathvariant=¨bold¨»q«/mi»«/mrow»«/mfenced»«/math»"
          class="Wirisformula"
          src={ConservationPro1}
          title="Double click to edit"
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨bold¨»m«/mi»«mn»1«/mn»«/msub»«mo»=«/mo»«msub»«mi mathvariant=¨bold¨»m«/mi»«mn»2«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={ConservationPro2}
          title="Double click to edit"
        />
      </p>

      <p>i.e., in a chemical reaction,</p>

      <p>
        <br />
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨bold¨»Total«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»mass«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»reactants«/mi»«mo»=«/mo»«mi mathvariant=¨bold¨»Total«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»mass«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»of«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨bold¨»products«/mi»«/math»"
          class="Wirisformula"
          src={ConservationPro3}
          title="Double click to edit"
        />
      </p>

      <ul>
        <li>Since the mass of total apparatus M remains constant,</li>
        <li>Thus, the Law of Conservation of Mass is verified.</li>
      </ul>

      <h1 className={classes.headTag}>&nbsp;Precautions:</h1>

      <ul>
        <li>
          When setting up the apparatus, and while taking the first reading of
          the total mass of apparatus and reactants, care must be taken that the
          barium chloride solution in the ignition tube does not spill and mix
          with the sodium sulphate solution in the conical flask.
        </li>
        <li>
          To start the chemical reaction, tilt and swirl the flask well so that
          barium chloride solution in the ignition tube spills and mixes with
          sodium sulphate solution in the flask.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Law of Conservation of Mass in a
          Chemical Reaction. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=118&cnt=2
        </Typography>
      </div>
    </div>
  );
}
