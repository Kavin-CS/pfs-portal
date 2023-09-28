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
    <div className={classes.divContent}>
      <h1 className={classes.headTag}>Materials Required</h1>

      <ol>
        <li>
          Permanent or prepared slides of;
          <ul>
            <li>Binary fission in Amoeba</li>
            <li>Budding in yeast</li>
          </ul>
        </li>
        <li>Compound microscope</li>
      </ol>

      <h1 className={classes.headTag}>Binary fission in Amoeba</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Take the prepared slide of binary fission in amoeba and place it on
          the stage of the compound microscope.
        </li>
        <li>
          Adjust the mirror of the microscope so that maximum light is reflected
          from the mirror on to the slide.
        </li>
        <li>
          Focus the slide under the microscope’s lens carefully, first under low
          power and then under high power.
        </li>
        <li>
          Observe the different phases of binary fission in Amoeba through the
          lens of the compound microscope.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>Amoeba cells are irregular in shape.</li>
        <li>
          Karyokinesis can be observed in some stages, with the mother cell
          elongating and its nucleus dividing into two.
        </li>
        <li>
          Cytokinesis can be observed in some stages, with the division in
          cytoplasm that forms two daughter cells.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        This slide shows the nucleus of Amoeba in the process of division. The
        body of Amoeba is elongated and has a constriction in the middle. Hence
        the given slide is the one that shows the asexual reproduction process
        of binary fission in Amoeba.
      </p>

      <h1 className={classes.headTag}>Budding In Yeast</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Take the prepared slide of budding in Yeast and place it on the stage
          of the compound microscope.
        </li>
        <li>
          Adjust the mirror of the microscope so that maximum light is reflected
          from the mirror on to the slide.
        </li>
        <li>
          Focus the slide under the microscope’s lens carefully, first under low
          power and then under high power.
        </li>
        <li>
          Observe the different phases of budding in Yeast through the lens of
          the compound microscope.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>
          We can observe that the yeast cells are spherical or oval in shape.
        </li>
        <li>
          Outgrowths called buds can be seen on the yeast cells. At times a
          chain of buds are seen on the parent cells.
        </li>
        <li>
          Buds that have separated from the parent cells can also be seen.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        The slide shows some yeast cell protuberance or buds. In a few yeast
        cells a chain of buds can be observed. Hence the given slide is one that
        shows the asexual reproduction process of budding in Yeast.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          Before placing the slide on the stage of the microscope, ensure the
          settings of the microscope mirror and diaphragm are correct.
        </li>
        <li>
          Focus the slide under the microscope’s lens carefully, first under low
          power and then under high power.
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Asexual Reproduction in Amoeba and
          Yeast. Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=134&cnt=1
        </Typography>
      </div>
    </div>
  );
}
