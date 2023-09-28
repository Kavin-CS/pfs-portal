import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CarbohydratesThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Carbohydrates1/carbohydrates-the1.jpg';
import CarbohydratesThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Carbohydrates1/carbohydrates-the2.png';
import CarbohydratesThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Carbohydrates1/carbohydrates-the3.png';
import CarbohydratesThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Carbohydrates1/carbohydrates-the4.png';
import CarbohydratesThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Carbohydrates1/carbohydrates-the5.jpg';

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
      <h1 className={classes.headTag}>Our objective</h1>

      <p>Our objective is to study some simple tests of carbohydrates.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What are Carbohydrates?</h2>

      <p>
        Carbohydrates are most abundant organic compounds found in living
        organisms and are composed of carbon, hydrogen and oxygen. Carbohydrates
        act as the primary source to provide energy for functioning of living
        organisms. These are called carbohydrates because they can be considered
        as hydrates of carbon. Most of them have the general formula Cx(H
        <sub>2</sub>O)y.
      </p>

      <p>
        <img
          alt=""
          src={CarbohydratesThe1}
        />
      </p>

      <p>
        Generally carbohydrates are defined as polyhydroxy aldehydes or
        polyhydroxy ketones or the compounds which produces such products on
        hydrolysis. Carbohydrates are called saccharides. Some of them have
        sweet taste and are called sugars.
      </p>

      <h2 className={classes.secondaryTag}>How do you classify carbohydrates based on reactivity?</h2>

      <p>
        Based on the reactivity with Tollen’s, Benedict’s or Fehling’s reagent,
        carbohydrates are classified as;
      </p>

      <h3 className={classes.secondaryTag}>Reducing sugars</h3>

      <p>
        Carbohydrates that can reduce Tollen’s, Benedict’s or Fehling’s reagents
        are called reducing sugars (sugar with free aldehyde or ketone group).
        All monosaccharides and most of the disaccharides are reducing sugars.
        Some examples are Maltose and Lactose.
      </p>

      <h3 className={classes.secondaryTag}>Non-reducing sugars</h3>

      <p>
        Carbohydrates that cannot reduce Tollen’s, Benedict’s or Fehling’s
        reagents are called non-reducing sugars. Sucrose is a non-reducing
        sugar.
      </p>

      <h2 className={classes.secondaryTag}>Some Important Tests for the Detection of Carbohydrates</h2>

      <h3 className={classes.secondaryTag}>
        <strong>Molisch’s test</strong>
      </h3>

      <p>
        Molisch’s reagent is 10% alcoholic solution of α-naphthol. This is a
        common chemical test to detect the presence of carbohydrates.
        Carbohydrates undergo dehydration by sulphuric acid to form furfural
        (furfuraldehyde) that reacts with α-naphthol to form a violet coloured
        product.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Fehling's test</strong>
      </h3>

      <p>
        This is an important test to detect the presence of reducing sugars.
        Fehling’s solution A is copper sulphate solution and Fehling’s solution
        B is potassium sodium tartrate. On heating, carbohydrate reduces deep
        blue solution of copper (II) ions to red precipitate of insoluble copper
        oxide.
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable»«mtr»«mtd»«munder»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/munder»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«mrow»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»I«/mi»«/mrow»«/munder»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»4«/mn»«/msub»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mi mathvariant=¨normal¨»C«/mi»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»G«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«/mtd»«/mtr»«/mtable»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»Cu«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»OH«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»NaOH«/mi»«mo»§nbsp;«/mo»«munderover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»s«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»T«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munderover»«mo»§nbsp;«/mo»«mtable»«mtr»«mtd»«munder»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/munder»«mi mathvariant=¨normal¨»O«/mi»«msup»«mi mathvariant=¨normal¨»O«/mi»«mo»-«/mo»«/msup»«mi mathvariant=¨normal¨»N«/mi»«msup»«mi mathvariant=¨normal¨»a«/mi»«mo»+«/mo»«/msup»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«mrow»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»I«/mi»«/mrow»«/munder»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»4«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mi mathvariant=¨normal¨»C«/mi»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»f«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«/mtd»«/mtr»«/mtable»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»C«/mi»«msub»«mi mathvariant=¨normal¨»u«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo».«/mo»«/mrow»«/munder»«/math»"
          class="Wirisformula"
          src={CarbohydratesThe2}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Benedict's test</strong>
      </h3>

      <p>
        Benedict’s test distinguishes reducing sugar from non-reducing sugar.
        Benedict’s reagent contains blue copper (II) ions (Cu<sup>2+</sup>,
        cupric ions) that are reduced to copper (I) ions (Cu<sup>+</sup>,
        cuprous ions) by carbohydrates. These ions form precipitate as red
        coloured cuprous (copper (I) oxide.&nbsp;
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«msub»«mi mathvariant=¨normal¨»CuSO«/mi»«mn»4«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»Cu«/mi»«mrow»«mn»2«/mn»«mo»+«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msup»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»4«/mn»«/msub»«mrow»«mn»2«/mn»«mo»-«/mo»«/mrow»«/msup»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«msup»«mi mathvariant=¨normal¨»Cu«/mi»«mrow»«mn»2«/mn»«mo»+«/mo»«/mrow»«/msup»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Reducing«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»sugar«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msup»«mi mathvariant=¨normal¨»Cu«/mi»«mo»+«/mo»«/msup»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«msup»«mi mathvariant=¨normal¨»Cu«/mi»«mo»+«/mo»«/msup»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Cu«/mi»«msup»«mrow/»«mn»2«/mn»«/msup»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={CarbohydratesThe3}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Tollen’s test</strong>
      </h3>

      <p>
        Tollen’s reagent is ammoniacal silver nitrate solution. On reacting with
        carbohydrate elemental silver is precipitating out of the solution,
        occasionally onto the inner surface of the reaction vessel. This
        produces silver mirror on the inner wall of the reaction vessel.
      </p>

      <p>
        &nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«msub»«mi mathvariant=¨normal¨»AgNO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»NO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»AgOH«/mi»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mn»2«/mn»«mi mathvariant=¨normal¨»AgOH«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Ag«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«msub»«mi mathvariant=¨normal¨»Ag«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mo»[«/mo»«mi mathvariant=¨normal¨»Ag«/mi»«munder»«mrow»«mo»(«/mo»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»3«/mn»«/msub»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»]«/mo»«mi mathvariant=¨normal¨»OH«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mtable»«mtr»«mtd»«munder»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/munder»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«/mtd»«/mtr»«mtr»«mtd»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»4«/mn»«/msub»«mo»§nbsp;«/mo»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mover»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mover»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»G«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»cos«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«mo»§nbsp;«/mo»«/mrow»«/munder»«/mtd»«/mtr»«/mtable»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Ag«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»§nbsp;«/mo»«mover»«mo»§#8594;«/mo»«mrow»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«/mrow»«/mover»«mo»§nbsp;«/mo»«mtable»«mtr»«mtd»«munder»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/munder»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«/mtd»«/mtr»«mtr»«mtd»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»H«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»4«/mn»«/msub»«/mtd»«/mtr»«mtr»«mtd»«munder»«mrow»«mover»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mover»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»G«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»)«/mo»«/mrow»«/munder»«/mtd»«/mtr»«/mtable»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»g«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»)«/mo»«/mrow»«/munder»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={CarbohydratesThe4}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Iodine test</strong>
      </h3>

      <p>
        Iodine test is used to detect the presence of starch. Iodine is not much
        soluble in water so iodine solution is prepared by dissolving iodine in
        water in presence of potassium iodide. Iodine dissolved in an aqueous
        solution of potassium iodide reacts with starch to form a starch/iodine
        complex which gives characteristics blue black colour to the reaction
        mixture.
      </p>

      <p>
        <img alt="" src={CarbohydratesThe5} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand various identification tests for carbohydrates.
        </li>
        <li>
          Students acquire the skill to distinguish reducing and non-reducing
          sugars.
        </li>
        <li>
          Students acquire skill to perform the experiment in the real lab.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Qualitative Analysis of Carbohydrates.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=209&cnt=1
        </Typography>
      </div>
    </div>
  );
}
