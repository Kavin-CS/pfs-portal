import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SalivaThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Saliva1/saliva-the1.jpg';


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
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        Our aim is to study the effect of different temperatures and pH on the
        activity of salivary content, amylase on starch.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        All living beings need energy to survive. It is from the food we consume
        that we get our energy. We know that the energy we are getting is by the
        process of digestion that breaks down the complex substance of starch
        into simpler molecules of glucose, which are further metabolized into
        CO2 and water through the process of glycolysis. The human digestive
        tract starts at the mouth and ends at the anus.
      </p>

      <h2 className={classes.secondaryTag}>In the Beginning</h2>

      <p>
        The digestion of the food starts as soon as we put food in our mouth.
        Our teeth cut the food into small pieces and the salivary glands secrete
        saliva that mixes with these food materials. The saliva contains an
        enzyme called salivary amylase which hydrolyses starch into maltose. The
        complete digestion of starch occurs only in the small intestine by the
        action of pancreatic amylase.
      </p>

      <p>
        <img
          alt=""
          src={SalivaThe1}
          maxWidth="70%;"
        />
      </p>

      <p>
        The activity of enzymes is strongly affected by several factors, such as
        temperature and pH.
      </p>

      <h2 className={classes.secondaryTag}>Effect of Temperature</h2>

      <p>
        All enzymes are proteinaceous in nature. At a lower temperature, the
        enzyme salivary amylase is deactivated and at the higher temperature,
        the enzyme is denaturated. Therefore, more time will be taken by an
        enzyme to digest the starch at lower and higher temperatures. Optimum
        temperature for the enzymatic activity of salivary amylase ranges from
        32 °C to 37 °C. The optimum temperature means that the temperature at
        which the enzyme shows the maximum activity.&nbsp; At this optimum
        temperature, the enzyme is most active and hence, takes less time to
        digest the starch.
      </p>

      <h2 className={classes.secondaryTag}>Effect of pH</h2>

      <p>
        The optimum pH for the enzymatic activity of salivary amylase ranges
        from 6 to 7. Above and below this range, the reaction rate reduces as
        enzymes get denaturated. The enzyme salivary amylase is most active at
        pH 6.8.&nbsp; Our stomach has high level of acidity which causes the
        salivary amylase to denature and change its shape. So the salivary
        amylase does not function once it enters the stomach.
      </p>

      <h2 className={classes.secondaryTag}>How to test it?</h2>

      <p>
        The effect of temperature and pH on the activity of salivary amylase on
        starch can be studied by using the Iodine test.&nbsp; If we add saliva
        on starch, the salivary amylase present in saliva gradually acts on
        starch and converts it into maltose.&nbsp; Starch keeps on giving blue
        colour with iodine till it is completely digested into maltose.&nbsp; At
        this point, no blue colour is formed.&nbsp; This is the end point or
        achromic point.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          Students understand the process of digestion of starch by salivary
          amylase.
        </li>
        <li>
          Students understand the effect of temperature and pH on the activity
          of salivary amylase on starch.
        </li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Action of Salivary Amylase on Starch.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=236&cnt=1
        </Typography>
      </div>
    </div>
  );
}
