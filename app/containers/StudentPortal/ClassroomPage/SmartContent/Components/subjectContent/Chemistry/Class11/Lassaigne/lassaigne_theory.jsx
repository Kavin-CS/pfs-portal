import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import LassaigneThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the1.png';
import LassaigneThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the2.png';
import LassaigneThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the3.png';
import LassaigneThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the4.png';
import LassaigneThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the5.png';
import LassaigneThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the6.png';
import LassaigneThe7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the7.png';
import LassaigneThe8 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the8.png';
import LassaigneThe9 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the9.png';
import LassaigneThe10 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the10.png';
import LassaigneThe11 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the11.png';
import LassaigneThe12 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the12.png';
import LassaigneThe13 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the13.png';
import LassaigneThe14 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the14.png';
import LassaigneThe15 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the15.png';
import LassaigneThe16 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the16.png';
import LassaigneThe17 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-the17.png';


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
      <h1 className={classes.headTag}>Objective:</h1>

      <p>
        Our objective is to detect the presence of nitrogen, sulphur, chlorine,
        bromine and iodine in organic compounds by Lassaigne's test.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <p>
        Carbon is the main constituent element of all organic compounds.
        Hydrogen is also present in most of the organic compounds, but there are
        few exceptions, such as: CCl<sub>4</sub>, CS<sub>2</sub> , etc. Elements
        other than these elements such as nitrogen, sulphur and halogens
        (chlorine, bromine and iodine) may also be present in organic compounds.
        These extra elements are usually detected by Lassaigne's Test that was
        developed by the French Chemist J.L Lassaigne. In this test, the organic
        compound is fused with metallic sodium to convert these elements into
        water soluble sodium salt. Usual qualitative tests are performed on this
        extract for the detection of respective elements.
      </p>

      <h2 className={classes.secondaryTag}>Detection of Nitrogen</h2>

      <p>
        If nitrogen is present in the compound, the Lassaigne's extract would
        contain sodium cyanide formed during fusion. Sodium cyanide is converted
        to sodium ferrocyanide on treating with ferrous sulphate. On further
        treating it with ferric chloride, a prussian blue complex,
        ferricferrocyanide is formed.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Na«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»C«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»N«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»From«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»organic«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»compound«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mover»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»NaCN«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe1}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»FeSO«/mi»«mn»4«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»NaOH«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»G«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo».«/mo»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Na«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»SO«/mi»«mn»4«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={LassaigneThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Fe«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»OH«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»NaCN«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»From«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Sodium«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»extract«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Fe«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»CN«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»NaOH«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Fe«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»CN«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»4«/mn»«mi mathvariant=¨normal¨»NaCN«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»a«/mi»«mn»4«/mn»«/msub»«mo»[«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»N«/mi»«msub»«mo»)«/mo»«mn»6«/mn»«/msub»«mo»]«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»y«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«/math»"
          class="Wirisformula"
          src={LassaigneThe4}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt=""
          src={LassaigneThe5}
        />
      </p>

      <h2 className={classes.secondaryTag}>Detection of Sulphur</h2>

      <h3 className={classes.secondaryTag}>1. Sodium nitroprusside test</h3>

      <p>
        During the preparation of Lassaigne's extract, sulphur from the organic
        compound reacts with sodium to form sodium sulphide. It gives a purple
        colour with sodium nitroprusside due to the formation of sodium
        thionitroprusside.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»2«/mn»«mi mathvariant=¨normal¨»Na«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mi mathvariant=¨normal¨»S«/mi»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Na«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»S«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«munder»«mrow»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»S«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»x«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»a«/mi»«mn»2«/mn»«/msub»«mo»[«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»N«/mi»«msub»«mo»)«/mo»«mn»5«/mn»«/msub»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»O«/mi»«mo»]«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»a«/mi»«mn»4«/mn»«/msub»«mo»[«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»N«/mi»«msub»«mo»)«/mo»«mn»5«/mn»«/msub»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»S«/mi»«mo»]«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»V«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«/mrow»«/munder»«/math»"
          class="Wirisformula"
          src={LassaigneThe7}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>2. Lead acetate test</h3>

      <p>
        Sodium sulphide formed during the preparation of Lassaigne's extract
        reacts with lead acetate to yield lead sulphide as black precipitate.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»Na«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»S«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mo»(«/mo»«msub»«mi mathvariant=¨normal¨»CH«/mi»«mn»3«/mn»«/msub»«mi mathvariant=¨normal¨»COO«/mi»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»Pb«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»P«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»S«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»k«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»CH«/mi»«mn»3«/mn»«/msub»«mi mathvariant=¨normal¨»COONa«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe8}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Detection of halogens</h2>

      <h3 className={classes.secondaryTag}>1. Silver nitrate test</h3>

      <p>
        <strong>a. Chlorine</strong>
      </p>

      <p>
        During the preparation of Lassaigne's extract, chlorine form the organic
        compound reacts with sodium to form sodium chloride. Sodium chloride
        gives a white precipitate of silver chloride with silver nitrate
        solution. The precipitate is soluble in ammonium hydroxide.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Na«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»NaCl«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe9}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»NaCl«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»AgNO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«munder»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»W«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo».«/mo»«mo»)«/mo»«/mrow»«/munder»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NaNO«/mi»«mn»3«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={LassaigneThe10}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»AgCl«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»NH«/mi»«mn»4«/mn»«/msub»«mi mathvariant=¨normal¨»OH«/mi»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mo»[«/mo»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»g«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»N«/mi»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»3«/mn»«/msub»«msub»«mo»)«/mo»«mn»2«/mn»«/msub»«mo»]«/mo»«mi mathvariant=¨normal¨»C«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe11}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>b. Bromine</strong>
      </p>

      <p>
        Sodium bromide formed during the preparation of Lassaigne's extract
        reacts with silver nitrate to form pale yellow precipitate of silver
        bromide, which is sparingly soluble in ammonium hydroxide.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Na«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«munder»«mrow»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»r«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»NaBr«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe12}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»NaBr«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»AgNO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»r«/mi»«/mrow»«munder»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»P«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»y«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»w«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo».«/mo»«mo»)«/mo»«/mrow»«/munder»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NaNO«/mi»«mn»3«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={LassaigneThe13}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>c. Iodine</strong>
      </p>

      <p>
        Sodium iodide formed during the preparation of sodium fusion extract
        reacts with silver nitrate solution to form yellow precipitate of silver
        iodide, which is insoluble in ammonium hydroxide.
      </p>

      <p>
        &nbsp;
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Na«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mi mathvariant=¨normal¨»I«/mi»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mi mathvariant=¨normal¨»NaI«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe14}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»NaI«/mi»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»AgNO«/mi»«mn»3«/mn»«/msub»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mrow»«munder»«mrow»«mi mathvariant=¨normal¨»S«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»Y«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»w«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo».«/mo»«mo»)«/mo»«/mrow»«/munder»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»NaNO«/mi»«mn»3«/mn»«/msub»«/math»"
          class="Wirisformula"
          src={LassaigneThe15}
          title="Double click to edit"
        />
      </p>

      <h3 className={classes.secondaryTag}>2. Carbon disulphide test</h3>

      <p>
        When sodium bromide and sodium iodide in the Lassaigne's extract is
        treated with chlorine water, the bromide and iodide oxidise to the
        corresponding halogens. This halogen dissolves in carbon disulphide.
        Bromine imparts orange colour and iodine imparts violet colour in carbon
        disulphide layer.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»Cl«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»r«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»x«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»Br«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»NaCl«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe16}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»Cl«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»N«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»I«/mi»«/mrow»«mrow»«mo»(«/mo»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo».«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»x«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»)«/mo»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«msub»«mi mathvariant=¨normal¨»I«/mi»«mn»2«/mn»«/msub»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»2«/mn»«mi mathvariant=¨normal¨»NaCl«/mi»«/math»"
          class="Wirisformula"
          src={LassaigneThe17}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students acquire the skill to prepare Lassaigne's extract.</li>
        <li>
          Students understand various tests to detect the presence of nitrogen,
          sulphur and halogens in an organic compound.
        </li>
        <li>
          Students understand the chemical reactions and their balanced
          equations that takes place during each test.
        </li>
        <li>
          Students acquire the skill to perform the experiment in the real lab
          once they understand different steps in the procedure.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Elements: Lassaigne's Test.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=149&cnt=1
        </Typography>
      </div>
    </div>
  );
}
