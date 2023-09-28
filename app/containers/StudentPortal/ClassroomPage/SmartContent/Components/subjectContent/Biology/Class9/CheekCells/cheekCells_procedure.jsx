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

import CheekProcedure1 from '../../../../../../../../../assets/Images/Subjects/Biology/OnionProcedure1.jpg';
import CheekProcedure2 from '../../../../../../../../../assets/Images/Subjects/Biology/OnionProcedure2.jpg';

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
        To Prepare Stained Temporary Mount of Onion Peel
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img alt="" src={CheekProcedure1} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Pour some distilled water into a watch glass.</li>
        <li>
          Peel off a leaf from half a piece of onion and using the forceps, pull
          out a piece of transparent onion peel (epidermis) from the leaf.
        </li>
        <li>
          Put the epidermis in the watch glass containing distilled water.
        </li>
        <li>
          Take a few drops of safranin solution in a dropper and transfer this
          into another watch glass.
        </li>
        <li>
          Using a brush, transfer the peel into the watch glass containing the
          safranin solution.
        </li>
        <li>
          Let this remain in the Safranin solution for 30 seconds, so that the
          peel is stained.
        </li>
        <li>
          Take the peel from the Safranin solution using the brush and place it
          in the watch glass containing the distilled water.
        </li>
        <li>
          Take a few drops of glycerine in a dropper and pour 2-3 drops at the
          center of a dry glass slide.
        </li>
        <li>
          Using the brush, place the peel onto the slide containing glycerine.
        </li>
        <li>
          Take a cover slip and place it gently on the peel with the aid of a
          needle.
        </li>
        <li>Remove the extra glycerine using a piece of blotting paper.</li>
        <li>
          Place this glass side on the stage of the compound microscope and view
          it.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>
          There are a large number of regularly shaped cells lying side by side
          and each cell has a distinct cell wall.
        </li>
        <li>A distinct nucleus is present on the periphery of each cell.</li>
        <li>Lightly stained cytoplasm is observed in each cell.</li>
        <li>
          A large vacuole is present at the centre of each cell, and is
          surrounded by the cytoplasm.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        As cell walls and large vacuoles are clearly observed in all the cells,
        the cells placed for observation are plant cells.
      </p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Use a brush to transfer the peel from one apparatus to another.</li>
        <li>Staining of peel should neither be too dark, nor too light.</li>
        <li>Extra glycerine stain should be removed using blotting paper.</li>
      </ul>

      <h1 className={classes.headTag}>
        To Prepare Stained Temporary Mount of Human Cheek Cells
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img alt="" src={CheekProcedure2} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Gently scrape the inner side of the cheek using a toothpick, which
          will collect some cheek cells.
        </li>
        <li>Place the cells on a glass slide that has water on it.</li>
        <li>
          Mix the water and the cheek cells using &nbsp;a needle and spread
          them.
        </li>
        <li>
          Take a few drops of Methylene blue solution using a dropper and add
          this to the mixture on the slide.
        </li>
        <li>
          Take a few drops of glycerine using a dropper and add this to the test
          mixture.
        </li>
        <li>
          Take a clean cover slip and lower it carefully on the mixture with the
          aid of a needle.
        </li>
        <li>
          Using a brush and needle, press the cover slip gently to spread the
          epithelial cells.
        </li>
        <li>
          Remove any extra liquid around the cover slip using a blotting paper.
        </li>
        <li>
          Place this glass side on the stage of the compound microscope and view
          it.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>A large number of flat and irregular-shaped cells are observed.</li>
        <li>
          The cells do not have a cell wall. However, each cell has a thin cell
          membrane.
        </li>
        <li>
          A deeply stained nucleus is observed at the centre of each cell.
        </li>
        <li>No prominent vacuoles are observed in the cells.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        As the cells observed do not have a cell wall, nor a prominent vacuole,
        the cells of the specimen on the slide are animal cells.
      </p>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <ul>
        <li>
          The ‘Select view’ drop down list allows you to select either the
          Microscope or Binocular View (It is the 'Binocular view' through which
          you can see the cell structure as viewed through the microscope).
        </li>
        <li>
          To select the sample, you can use the ‘Select sample’ drop down list.
        </li>
        <li>
          To change the power of the lens, you can choose a lens from the
          ‘Select objective lens’ drop down list.
        </li>
        <li>
          For coarse adjustments, you can either click on the up and down arrow
          of ‘Coarse adjustment’ knob, or click on the left and right arrows of
          'Course Adjustment' seen on the left controls panel.
        </li>
        <li>
          For fine adjustments, you can click on the left and right arrows of
          ‘Fine adjustment’ seen on the left controls panel.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>
          Ensure toothpick used to scrape the cheek is clean, so it does not
          cause infection to the cheek.
        </li>
        <li>Extra glycerine stain should be removed using blotting paper.</li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2013). Onion and Cheek Cells. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=125&cnt=269 
        </Typography>
      </div>
    </div>
  );
}
