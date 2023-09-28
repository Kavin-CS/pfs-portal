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
      <h1 className={classes.headTag}>Materials Required</h1>

      <ul>
        <li>Orchid Plant</li>
        <li>Hibiscus Plant</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          You will need an orchid plant and a hibiscus plant that have roots,
          leaves and flowers.
        </li>
        <li>
          Study the venation, leaves, nature of root system, stem and flowers of
          both the plants.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>
          From the shown four choices select the correct plant part from the
          left window pane that relates to the shown plant.
        </li>
        <li>
          Drag your selected choice and place it near the plant.&nbsp; If the
          choice is wrong the selection goes back.
        </li>
        <li>
          You can try this for different plant parts by clicking on the ‘Reset’
          button.
        </li>
        <li>
          If you have any doubt, you can click on the help button that provides
          you with hints.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>Record the observations in a table.</p>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="greyTable"
        width="600"
      >
        <thead>
          <tr>
            <th scope="col" width="140">
              Property
            </th>
            <th scope="col">Orchid Plant</th>
            <th scope="col">Hibiscus Plant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Venation</td>
            <td>Orchid has parallel venation.</td>
            <td>Hibiscus has reticulate venation.</td>
          </tr>
          <tr>
            <td>Leaves</td>
            <td>Leaves of orchid plant are sessile.</td>
            <td>Leaves of hibiscus plant have stalks.</td>
          </tr>
          <tr>
            <td>Root</td>
            <td>Orchid plant has adventitious roots.</td>
            <td>Hibiscus plant has taproots.</td>
          </tr>
          <tr>
            <td>Stem</td>
            <td>Orchid has weak stem.</td>
            <td>Hibiscus has strong stem.</td>
          </tr>
          <tr>
            <td>Flower</td>
            <td>Three petals and three sepals.</td>
            <td>Five petals and five sepals.</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Conclusion</h1>

      <p>
        From the above observation it can be concluded that the orchid is a
        monocot plant and the hibiscus is a dicot plant.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Plant and Animal Tissues. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=131&cnt=2
        </Typography>
      </div>
    </div>
  );
}
