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
import ProcedureImg from '../../../../../../../../../assets/Images/Subjects/Chemistry/kmno4_procedure.jpg';
import ProcedureMaterialImg from '../../../../../../../../../assets/Images/Subjects/Chemistry/material1.jpg';

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
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>
        &nbsp;A. To determine of the strength of the given KMnO<sub>4</sub>{' '}
        solution using standard oxalic acid solution
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt="Procedure"
          src={ProcedureImg}
          className={classes.ProcedureImg}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h2 className={classes.secondaryTag}>
        Preparation of standard solution of oxalic acid [250 ml M/10 (0.1 M)
        solution]
      </h2>

      <ul>
        <li>
          &nbsp;Using an electronic balance, first weigh exactly 3.15g of oxalic
          acid crystals in a weighing bottle.
        </li>
        <li>Transfer these into a 250ml beaker.</li>
        <li>
          Then wash the weighing bottle 2 or 3 times with distilled water and
          transfer all the washings into the beaker.
        </li>
        <li>
          Dissolve the oxalic acid crystals in the beaker by gentle stirring
          with a clean glass rod.
        </li>
        <li>
          When the oxalic acid crystals in the beaker are completely dissolved,
          transfer the entire solution from the beaker into a 250ml standard
          flask through a funnel and a glass rod.
        </li>
        <li>
          &nbsp;Wash the beaker 2 to 3 times with distilled water and transfer
          all the washings into the standard flask.
        </li>
        <li>
          Finally wash the funnel thoroughly with distilled water to transfer
          the drops of the solution on the sides of the funnel into the standard
          flask.
        </li>
        <li>
          &nbsp;Add enough distilled water to the standard flask so that the
          level is just below the calibration mark on it.
        </li>
        <li>
          Add the last few drops of distilled water with a pipette until the
          lower level of the meniscus just touches the mark on the standard
          flask.
        </li>
        <li>
          &nbsp;Stopper the measuring flask and shake gently to make the
          solution uniform throughout.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Determination of strength of given KMnO<sub>4</sub>
      </h2>

      <ul>
        <li>Take a burette and wash it with distilled water.</li>
        <li>
          Rinse and fill the burette with the given KMnO<sub>4</sub> solution
          and set the initial burette reading as zero.
        </li>
        <li>Clamp it vertically to the burette stand.</li>
        <li>
          Rinse the pipette with water and then with the given oxalic acid
          solution.
        </li>
        <li>
          Then pipette out 20ml of the given oxalic acid solution into a conical
          flask and add one test tube (~20ml) full of dil.H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Heat the contents of the conical flask to 60-70°C.</li>
        <li>
          Titrate it against the KMnO<sub>4</sub> solution taken in the burette
          till the colour of the solution in the conical flask changes from
          colourless to light pink.
        </li>
        <li>Note down the final burette reading.</li>
        <li>Repeat the titration until concordant values are obtained.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        The readings are recorded in a tabular form as shown and the molarity of
        the given KMnO<sub>4</sub> solution can be calculated using the molarity
        equation given in the theory.
      </p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          height="85"
          width="700"
        >
          <tbody>
            <tr>
              <td>SI. No</td>
              <td>Initial burette reading</td>
              <td>Final burette reading</td>
              <td>
                Volume of KMnO<sub>4</sub> (in ml)
              </td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>The Result</h2>

      <p>
        The strength of the given KMnO<sub>4</sub> solution =
        ............g/litre
      </p>

      <h1 className={classes.headTag}>
        B. To determine the strength of the given KMnO<sub>4</sub> solution
        using standard solution of Mohr’s salt
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt="Procedure"
          src={ProcedureMaterialImg}
          className={classes.ProcedureImg}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h2 className={classes.secondaryTag}>
        Preparation of standard solution of Mohr’s salt (Ferrous Ammonium
        Sulphate).[250 ml M/20 (0.05 M) solution]
      </h2>

      <ul>
        <li>
          &nbsp;Using an electronic balance weigh exactly 4.9g of Mohr’s salt
          crystals in a weighing bottle.
        </li>
        <li>Transfer these into a 250ml beaker.</li>
        <li>
          Add 5ml conc.H<sub>2</sub>SO<sub>4</sub> into the beaker.
        </li>
        <li>
          Wash the weighing bottle well with distilled water and transfer all
          the washings into the beaker.
        </li>
        <li>
          Dissolve Mohr’s salt crystals in the beaker by gentle stirring with a
          clean glass rod.
        </li>
        <li>
          When the crystals in the beaker are completely dissolved, transfer the
          entire solution from the beaker into a 250ml standard flask through a
          funnel and a glass rod.
        </li>
        <li>
          Wash the beaker thoroughly with distilled water and transfer all the
          washings into the standard flask.
        </li>
        <li>
          Finally, wash the glass rod and the funnel thoroughly with distilled
          water to transfer the solution on the sides of the funnel into the
          standard flask.
        </li>
        <li>
          Add enough distilled water to the standard flask so that the level is
          just below the calibration mark on it.
        </li>
        <li>
          Add the last few drops of distilled water with a pipette until the
          lower level of the meniscus just touches the mark on the standard
          flask.
        </li>
        <li>
          Stopper the measuring flask and shake gently to make the solution
          uniform throughout.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Determination of strength of KMnO<sub>4</sub>
      </h2>

      <ul>
        <li>Take a burette and wash it with distilled water.</li>
        <li>
          &nbsp;Rinse and fill the burette with the given KMnO<sub>4</sub>{' '}
          solution and set the initial burette reading as zero.
        </li>
        <li>Clamp it vertically to the burette stand.</li>
        <li>
          Rinse the pipette with water and then with the given Mohr’s salt
          solution.
        </li>
        <li>
          Pipette out 20ml of the given Mohr’s salt solution into a conical
          flask and add one test tube (~20ml) full of dil.H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>
          Titrate it against the KMnO<sub>4 </sub>solution taken in the burette
          till the colour of the solution in the conical flask changes from
          colourless to light pink.
        </li>
        <li>Note down the final burette reading.</li>
        <li>Repeat the titration until concordant values are obtained.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        The readings are recorded in a tabular form as shown and the molarity of
        the given KMnO<sub>4</sub> solution can be calculated using the molarity
        equation given in the theory.
      </p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          width="700"
        >
          <tbody>
            <tr>
              <td>SI. No</td>
              <td>Initial burette reading</td>
              <td>Final burette reading</td>
              <td>
                Volume of KMnO<sub>4</sub> (in ml)
              </td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>The Result</h2>

      <p>
        The strength of the given KMnO<sub>4</sub> solution =
        .............g/litre
      </p>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <h2 className={classes.secondaryTag}>Titrate: Mohr's Salt</h2>

      <ul>
        <li>
          Select the titrate 'Mohr's Salt' from the 'Titrate' drop down list.
        </li>
        <li>You can adjust the drops rate using the 'Drops rate' slider.</li>
        <li>
          Use the respective sliders to select the molarity and volume of the
          titrate.
        </li>
        <li>
          Drag the test tube containing Dil. H<sub>2</sub>SO<sub>4</sub> to the
          conical flask to pour the solution in it.
        </li>
        <li>Drag the conical flask and place it on tile.</li>
        <li>
          Click on the 'Start' button or on the 'Nozzle' of the burette to start
          the titration.
        </li>
        <li>The zoomed view of the burette reading is shown.</li>
        <li>
          You can see the volume of KMnO<sub>4</sub> used for the titration by
          clicking on the 'Show the volume of titrant' check box.
        </li>
        <li>
          The end point is reached when a pink colour develops, at this point
          stop the titration either click on the 'Stop' button or click on the
          'Nozzle' of the burette.
        </li>
        <li>
          You can see the chemical equation of the reaction on the side menu.
        </li>
        <li>
          Find out the number of moles of the titrate (n1) and that of the
          titrant (n2) from the chemical equation and enter the values in the
          respective text boxes and verify the values.
        </li>
        <li>
          Calculate the molarity of the titrant using the given equation and
          enter the value in the corresponding text box and verify the value.
        </li>
        <li>The molar mass of the titrant is shown on the side menu.</li>
        <li>
          Calculate the strength of the given titrant (in g/lit) and enter the
          value in the corresponding text box and verify the result.
        </li>
        <li>
          You can alternatively use the embedded worksheet to find the values by
          entering the data in the specific fields.
        </li>
        <li>To redo the experiment click the 'Reset' button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h2 className={classes.secondaryTag}>Titrate: Oxalic Acid</h2>

      <ul>
        <li>
          Select the titrate 'Oxalic Acid' from the 'Titrate' drop down list.
        </li>
        <li>You can adjust the drops rate using the 'Drops rate' slider.</li>
        <li>
          Use the respective sliders to select the molarity and volume of the
          titrate.
        </li>
        <li>
          Drag the test tube containing Dil. H<sub>2</sub>SO<sub>4</sub> to the
          conical flask to pour the solution in it.
        </li>
        <li>Drag the conical flask and place it over the Bunsen burner.</li>
        <li>
          Light the burner by clicking on the knob and heat it till the
          temperature reacher 70<sup>o</sup>C to 80<sup>o</sup>C.
        </li>
        <li>Drag the conical flask and place it on tile.</li>
        <li>
          Click on the 'Start' button or on the 'Nozzle' of the burette to start
          the titration.
        </li>
        <li>The zoomed view of the burette reading is shown.</li>
        <li>
          You can see the volume of KMnO<sub>4</sub> used for the titration by
          clicking on the 'Show the volume of titrant' check box.
        </li>
        <li>
          The end point is reached when a pink colour develops, at this point
          stop the titration either click on the 'Stop' button or click on the
          'Nozzle' of the burette.
        </li>
        <li>
          You can see the chemical equation of the reaction on the side menu.
        </li>
        <li>
          Find out the number of moles of the titrate (n1) and that of the
          titrant (n2) from the chemical equation and enter the values in the
          respective text boxes and verify the values.
        </li>
        <li>
          Calculate the molarity of the titrant using the given equation and
          enter the value in the corresponding text box and verify the value.
        </li>
        <li>The molar mass of the titrant is shown on the side menu.</li>
        <li>
          Calculate the strength of the given titrant (in g/lit) and enter the
          value in the corresponding text box and verify the result.
        </li>
        <li>
          You can alternatively use the embedded worksheet to find the values by
          entering the data in the specific fields.
        </li>
        <li>To redo the experiment click the 'Reset' button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Handle the apparatus and chemicals carefully.</li>
        <li>
          Rinse the pipette and burette first with distilled water then with the
          corresponding solutions.
        </li>
        <li>Close the pipette with the index finger.</li>
        <li>
          Always keep the lower end of the pipette in the liquid when sucking
          it.
        </li>
        <li>
          Do not blow out the last drop of the solution from the jet end of the
          pipette.
        </li>
        <li>
          KMnO<sub>4</sub> solution is always taken in the burette.
        </li>
        <li>
          Avoid the use of burette having a rubber tap as KMnO<sub>4</sub>{' '}
          reacts with rubber.
        </li>
        <li>
          Carefully fill the burette with the solution and see that the stopcock
          does not leak.
        </li>
        <li>Do not allow any air bubbles to remain inside the burette.</li>
        <li>
          Read the upper meniscus while taking burette reading with KMnO
          <sub>4</sub> solution.
        </li>
        <li>
          Let no drops of solution be at the tip of the burette at the end
          point.
        </li>
        <li>
          Add about an equal volume of dil.H<sub>2</sub>SO<sub>4</sub> to the
          solution to be titrated before adding KMnO<sub>4</sub>.
        </li>
        <li>
          If oxalic acid or some oxalate is to be titrated, add required amount
          of dil.H<sub>2</sub>SO<sub>4</sub> and heat the flask to 60°-70°C.
        </li>
        <li>In case of ferrous salt, no warming is required.</li>
        <li>
          No external indicator is required for KMnO<sub>4</sub> titration
          because KMnO<sub>4</sub> acts as self indicator.
        </li>
        <li>Do not rinse the titration flask with the solution.</li>
        <li>
          Give a rotatory motion to the titration flask throughout the
          titration.
        </li>
        <li>
          Place the titration flask containing solution on a white tile to see
          the colour change correctly.&nbsp;
        </li>
      </ul>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Determination of concentration of KMnO₄
          solution. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=115&cnt=551
        </Typography>
      </div>
    </div>
  );
}
