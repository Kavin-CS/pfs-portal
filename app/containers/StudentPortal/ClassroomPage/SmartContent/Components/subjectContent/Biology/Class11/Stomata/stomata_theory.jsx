import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import StomataThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Stomata1/stomata-the1.jpg';
import StomataThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Stomata1/stomata-the2.png';


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
        Our objective is to study the stomatal distribution on the upper and
        lower leaf surfaces and to calculate the stomatal index.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What is a Stomata?</h2>

      <p>
        Stomata are minute pores found on the epidermis of leaves and young
        shoots of plants that are used to control exchange of gases. The pore is
        surrounded by a pair of specialised cells called the guard cells that
        are responsible in regulating the size of the opening.
      </p>

      <p>
        Water is released through the stomata into the atmosphere in the form of
        water vapour through the process called transpiration. Besides this, the
        exchange of oxygen and carbon dioxide in the leaf also occurs through
        the stomata.
      </p>

      <h2 className={classes.secondaryTag}>Distribution of Stomata</h2>

      <p>
        Distribution of stomata varies between monocots and dicots, between
        plant species, and between the underside and top side of the leaves on a
        plant.&nbsp;
      </p>

      <p>
        Stomata are found more on plant surfaces thriving under higher light,
        lower atmospheric carbon dioxide concentrations and in moist
        environments.
      </p>

      <p>
        Usually the lower surface of a dicot leaf has a greater number of
        stomata while in a monocot leaf they are more or less equal on both
        surfaces. In most of the floating plants, stomata are found only on the
        upper epidermis.
      </p>

      <p>
        <img alt="" src={StomataThe1} />
      </p>

      <h2 className={classes.secondaryTag}>Calculation of Stomatal Index</h2>

      <p>
        The distribution of stomata on the upper and lower surfaces of the leaf
        can be studied by removing the peels of the leaf from the upper and
        lower surfaces and observing the same under a microscope.
      </p>

      <p>
        The count of the the number of stomata and epidermal cells in the
        microscopic field is taken&nbsp; and the stomatal index of each surface
        of the leaf can be calculated using the following formula:
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mo»§nbsp;«/mo»«mtext»Stomatal«/mtext»«mo»§nbsp;«/mo»«mtext»index«/mtext»«mo»§nbsp;«/mo»«mtext»=«/mtext»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo»:«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo»:«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»o«/mi»«mo»:«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»s«/mi»«/mrow»«/mfrac»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mn»100«/mn»«/math»"
          class="Wirisformula"
          src={StomataThe2}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students get to know what a Stomata is.</li>
        <li>
          Students understand the distribution of stomata on different plants.
        </li>
        <li>Students learn how to calculate the stomatal index.</li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Study of distribution of stomata.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=7&sim=128&cnt=1
        </Typography>
      </div>
    </div>
  );
}
