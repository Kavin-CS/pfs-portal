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
import ArchimeedesPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-pro1.png';
import ArchimeedesPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-pro2.gif';
import ArchimeedesPro3 from '../../../../../../../../../assets/Images/Subjects/Physics/Archimedes1/archimedes-pro3.gif';


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
      <h1 className={classes.headTag}>Materials Required:&nbsp;</h1>

      <p>
        <strong>
          &nbsp;
          <img
            alt=""
            src={ArchimeedesPro1}
          />
        </strong>
      </p>

      <h1 className={classes.headTag}>The Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>As done in a real lab :</h2>

      <p>
        <strong>
          <em fontWeight='normal'>We’ll first prepare the strong salty water</em>
        </strong>
        <strong>:</strong>
      </p>

      <p>
        Take 400 ml of tap water in a 500 ml beaker, add some common salt to it
        and stir well. Go on adding salt to the water and dissolve it by
        stirring the solution with a glass rod until some of the salt remains
        undissolved in the beaker. Decant the strong (saturated) salty water and
        store for further use.
      </p>

      <p>
        <strong>
          <em fontWeight='normal'>Now to start:</em>
        </strong>
      </p>

      <ul type="1">
        <li>Hang a spring balance on an iron stand using a clamp.</li>
        <li>Note the least count of the spring balance.</li>
        <li>
          Take one of the solid blocks (S<sub>1</sub>) and weigh it by hanging
          it on the hook of the spring balance using a thread. Find the weight
          of the solid in air (W<sub>a</sub>) and note it.
        </li>
        <li>
          Take two beakers (each of 250 ml) and mark them as A and B. Weigh them
          on a balance separately and note down the mass of beaker A and B.
        </li>
        <li>
          Take an overflow can and fill it with water to the brim of the outlet
          and place beaker A below the overflow outlet of the can to collect the
          displaced water. Now, start lowering the metallic block (S<sub>1</sub>
          ), still attached to the spring balance into the water of the overflow
          can.
        </li>
        <li>
          Note the loss of weight of the metallic block as it gets completely
          immersed in the water. Weigh beaker A which contains the displaced
          water and note the mass. To find the mass of the water displaced,
          subtract the initial mass of beaker A (without displaced water) from
          the present mass of the beaker A (containing displaced water).
          <br />
          <img
            alt="(Weight of beaker A + Displaced water) - Weight of the empty beaker A = Weight of water displaced by completely immersing block (S1)"
            src={ArchimeedesPro2}
            
          />
        </li>
        <li>
          Repeat the experiment using the metallic block S<sub>1</sub> by
          completely immersing it in the strong salty water in the overflow can.
          Note the loss in weight S<sub>1</sub> by immersing it in the strong
          salt solution. Find the mass of the salt solution displaced and
          collected in the beaker.
          <br />
          <img
            alt="Weight of beaker B along with displaced salt solution - Wt. of the empty beaker B =  Wt. of displaced salt solution "
            height="22"
            src={ArchimeedesPro3}
            width="859"
          />
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>As done using the simulator:</h2>

      <ul type="1">
        <li>
          From the combo box, Select Environment, select the place where the
          experiment to be carried out.
        </li>
        <li>Note down the least count of the spring balance.</li>
        <li>
          The experimental blocks (Iron and Copper) are provided in the
          simulator window. It can be attached to the spring balance by double
          clicking on it.
        </li>
        <li>
          The simulation can be performed in three media: air, tap water or
          salty water.&nbsp; To do this, choose any one of the above media from
          the drop down box under ‘Loss of weight’.
        </li>
        <li>
          You can now find the weight of the block by moving the mouse over the
          scale of the spring balance.&nbsp; This shows a zoomed in area of the
          scale that aids in taking the reading easily.
        </li>
        <li>
          You can choose the medium as tap water or salty water&nbsp; for
          immersing the object.
        </li>
        <li>From the digital balance, note the mass of the empty beaker.</li>
        <li>
          Again as before, select the object of your choice and find the weight
          after immersing the block in solution.
        </li>
        <li>
          Now, the liquid overflows. Note down the new mass displayed in the
          digital balance.
        </li>
        <li>
          The ‘Reset’ button can be used to reset the experiment to its initial
          state.
        </li>
      </ul>

     

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>
          Weight of metallic block S<sub>1</sub> in air = .................. g
          wt.
        </li>
        <li>Mass of empty beaker = ............ g.</li>
        <li>
          Weight of the block (S<sub>1</sub>) after&nbsp; immersed in solution =
          ................. g wt.
        </li>
        <li>
          New mass displayed in the digital balance = ................. g.
        </li>
        <li>Loss of weight of block in air = .............. g wt.</li>
        <li>Mass of water displaced (m) = ...................... g.</li>
        <li>Weight of solution displaced = m x g = ............ g wt.&nbsp;</li>
      </ul>

      <h3 className={classes.secondaryTag}>Least count of the spring balance :</h3>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        5 divisions = 25 g.wt
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        1 division = 25/5
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        =5 g.wt
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <div>
        1.&nbsp;&nbsp; The string used to hang the spring balance should have
        negligible weight.
      </div>

      <div>
        2.&nbsp;&nbsp; The metallic block should be gradually immersed in water.
      </div>

      <div>
        3.&nbsp;&nbsp; Reading of spring balance should be taken only when it is
        stable.
      </div>

      <div>
        4.&nbsp;&nbsp; When immersing the metallic block in water, care should
        be taken that displaced water does not spill.
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Verification of Archimedes' Principle.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=72&cnt=2
        </Typography>
      </div>
    </div>
  );
}
