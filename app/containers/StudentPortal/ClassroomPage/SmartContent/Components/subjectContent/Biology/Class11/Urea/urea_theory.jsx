import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import UreaThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Urea1/urea-the1.jpg';

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

      <p>To detect the presence of urea in the given sample of urine.</p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Urine is a liquid produced by the kidneys to remove waste products from
        the bloodstream. Human urine is yellow in color and contains various
        chemical components. It primarily consists of water, organic substance
        such as urea, uric acid, trace amounts of enzymes, carbohydrates and
        hormones. The handling of urea by the kidneys is an important part of
        mammalian metabolism.
      </p>

      <h2 className={classes.secondaryTag}>Let’s see how urea is produced in our body.</h2>

      <p>
        Urea is present mainly in the urine of all mammals, but it also occurs
        in blood, bile and milk. Urea is naturally produced during the process
        of breakdown of proteins. Due to this process, amino groups are removed
        from the amino acid present in the proteins. These amino groups are
        converted to highly toxic ammonia (NH3), and the ammonia thus produced
        is finally converted to urea by the liver. The urea thus formed then
        passes to the kidneys and is finally excreted from the body through the
        urine.
      </p>

      <p>
        <img alt="" src={UreaThe1} />
      </p>

      <p>
        A healthy adult person normally excretes about 15g of nitrogen per day.
        Among this, about 95% of this nitrogen is excreted as urea through
        urine. If the liver is not healthy, it may not efficiently break down
        proteins. Similarly, if the kidneys are not healthy, they may not
        properly filter urea. Either of these problems leads to changes in the
        amount of urea nitrogen in our body.&nbsp; If the urine is kept exposed
        to the atmosphere, it splits and ammonia gets released due to bacterial
        activity. Due to this process the stored urine becomes alkaline. &nbsp;
        <br />
        Generally urease tests are used to detect the presence of urea in the
        urine sample. The enzyme urease decomposes urea into ammonia and carbon
        dioxide. On adding an alkaline substance, ammonium carbonate to it,
        changes the slightly acidic urine to an alkaline solution.&nbsp; The
        colour of phenol red indicator changes from yellow to red in this
        reaction mixture.
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>Students understand the characteristics of urea.</li>
        <li>Students understand how urea is produced in our body.</li>
        <li>
          Students understand the test to detect the presence of urea in the
          urine sample.
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
          amrita.olabs.edu.in,. (2015). Detection of Urea in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=206&cnt=1
        </Typography>
      </div>
    </div>
  );
}
