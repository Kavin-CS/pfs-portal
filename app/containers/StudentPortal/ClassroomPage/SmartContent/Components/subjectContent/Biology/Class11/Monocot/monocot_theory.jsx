import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MonocotThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the1.jpg';
import MonocotThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the2.jpg';
import MonocotThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the3.jpg';
import MonocotThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the4.jpg';
import MonocotThe5 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the5.jpg';
import MonocotThe6 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-the6.jpg';


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
        Our objective is to prepare temporary stained glycerine mounts of
        transverse sections of the stem and root of Dicot and Monocot plants.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What is plant anatomy?</h2>

      <p>
        Stems and roots of plants are made up of different types of tissues.
        These tissues form different layers in the composition of stems and
        roots.&nbsp; Plant anatomy is the general term for the study of the
        internal structure of plants.
      </p>

      <p>
        To study the structural details of the stem or root of a monocot or
        dicot plant, it is essential to be familiarized with the sectioning and
        staining techniques used with plant materials.&nbsp; It is also
        necessary to take the sections with uniform thickness so that the light
        passes through them equally and the different tissues found in the
        material are clearly visible under the microscope. To examine the
        tissues clearly, it is desirable to stain the section with suitable
        stains, as different stains colour the tissues differently.
      </p>

      <h1 className={classes.headTag}>Anatomy of Plant Stems and Roots</h1>

      <p>
        We will now look at the anatomy of dicot and monocot stems and roots.
      </p>

      <h3 className={classes.secondaryTag}>Comparison of the Anatomy of Dicot&nbsp; and Monocot Stems</h3>

      <p>
        <img alt="" src={MonocotThe1} />
      </p>

      <p>
        <img alt="" src={MonocotThe2} />
      </p>

      <p>
        <img alt="" src={MonocotThe3} />
      </p>

      <h3 className={classes.secondaryTag}>Comparison of the Anatomy of Dicot and Monocot Roots</h3>

      <p>
        <img alt="" src={MonocotThe4} />
      </p>

      <p>
        <img alt="" src={MonocotThe5} />
      </p>

      <p>
        <img alt="" src={MonocotThe6} />
      </p>

      <h1 className={classes.headTag}>Points to Note</h1>

      <p>Conjoint:&nbsp; Xylem and phloem occurs in same bundle.</p>

      <p>
        Collateral: Phloem lies towards the outerside and xylem occurs towards
        the inner side.
      </p>

      <p>Open: Cambium is present between phloem and xylem.</p>

      <p>Closed: Cambium is absent between phloem and xylem.</p>

      <p>
        Exarch: Protoxylem lies towards the outerside and metaxylem towards the
        centre.
      </p>

      <p>
        Endarch: Metaxylem lies towards the outer side and protoxylem towards
        the inner side.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students learn sectioning and staining techniques used with plant
          materials.
        </li>
        <li>
          Students learn about anatomy of monocot and dicot stems and roots.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Dicot and Monocot
          Stem and Root. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=192&cnt=1
        </Typography>
      </div>
    </div>
  );
}
