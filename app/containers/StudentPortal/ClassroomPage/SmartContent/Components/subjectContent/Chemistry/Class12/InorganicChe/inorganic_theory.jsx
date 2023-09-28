import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import InorganicThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/InorganicChe1/inorganic-the1.png';
import InorganicThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/InorganicChe1/inorganic-the2.png';
import InorganicThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/InorganicChe1/inorganic-the3.png';

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
      <h1 className={classes.headTag}>Objectives</h1>

      <p>Our objectives are to prepare:</p>

      <ul>
        <li>
          A pure sample of ferrous ammonium sulphate (Mohr’s salt) [FeSO
          <sub>4</sub>. (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>. 6H
          <sub>2</sub>O]
        </li>
        <li>
          A pure sample of potash alum (Fitkari) [K<sub>2</sub>SO<sub>4</sub>.
          Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>. 24H<sub>2</sub>O]
        </li>
        <li>
          A pure sample of the complex potassium trioxalatoferrate (III), K
          <sub>3</sub>[Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]. 3H
          <sub>2</sub>O
        </li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>
        <b>What is an inorganic compound?</b>
      </h2>

      <p>
        Inorganic compounds are substances that do not come from living things.
        They are formed by non-living natural processes or by laboratory
        preparation methods. The branch of chemistry that deals with the
        behaviour and properties of inorganic compounds is called Inorganic
        Chemistry. Inorganic compounds are found in nature in the form of
        minerals.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>
        <b>What are the different types of inorganic compounds?</b>
      </h2>

      <p>
        The two important classes of inorganic compounds are Coordination
        Compounds and Double Salts.
      </p>

      <h3 className={classes.secondaryTag}>
        <b>Coordination compounds (complex compounds)</b>
      </h3>

      <p>
        Complex compounds are formed by a large number of transition metals in
        which the metal atom is bound to neutral molecules or to negatively
        charged species called ligands. The elements of group 3-12 are called
        transition metals.
      </p>

      <p>
        These compounds are also called coordination compounds. The ligands
        donate electrons to the metal atoms and the metal atoms accept these
        electrons to form a ligand-metal coordinate bond. The number of ligands
        directly bonded to the central metal atom is called the coordination
        number of a complex. The structure of coordination compounds was first
        proposed by Alfred Werner.&nbsp; He proposed the concept of a primary
        valence and secondary valence for a metal ion. Primary valences are
        satisfied by the central ions and secondary valences are satisfied by
        the ligands. Secondary valence is equal to the coordination number.
      </p>
      <p>On example is Potassium trioxalatoferrate (III)</p>
      <p>
        Potassium trioxalatoferrate (III) is a coordination compound. In this
        complex, iron is the central metal ion and oxalate [(C<sub>2</sub>O
        <sub>4</sub>)<sup>2-</sup>] is the ligand. Oxalate is a bidentate ligand
        in which two oxygen atoms donate electrons to the central iron atom. It
        is an octahedral transition metal complex in which iron is in the +3
        oxidation state. So we can say that in complex potassium
        trioxalatoferrate (III), the central Fe<sup>3+</sup> ion is octahedrally
        surrounded by bidentate oxalate ligands.&nbsp; Potassium acts as the
        counter ion, and the Fe<sup>3+</sup> ion, along with the ligand,
        constitute the coordination sphere. &nbsp;The structure is shown below.
      </p>

      <p>
        &nbsp;
        <img alt="" src={InorganicThe1} />
      </p>

      <p>
        Other examples are &nbsp;[Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>,
        [PtCl<sub>4</sub>]<sup>2-</sup>, Ni(CO)<sub>4</sub>.
      </p>

      <p>
        In coordination compounds, the central metal ion and the ligands
        attached to it are enclosed in a square bracket and are collectively
        termed as the coordination sphere. The ionisible group is written
        outside the bracket and is called counter ion. For example, in the
        complex, K<sub>2</sub>[PdCl<sub>4</sub>], the coordination sphere is
        [PdCl<sub>4</sub>]<sup>2-</sup> and the counter ion is K<sup>+</sup>.
      </p>

      <h3 className={classes.secondaryTag}>
        <b>Double Salts</b>
      </h3>

      <p>
        Double salts are compounds that contain more than one cation or anion.
        Double salts are obtained by the combination of two different salts. The
        two salts crystallise together to form a single substance, but it
        ionises as two distinct salts when dissolved in water. The properties of
        double salts are different from its component single salts.
      </p>

      <p>
        One example is Ferrous ammonium sulphate (Mohr’s salt) [FeSO<sub>4</sub>
        .(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.6H<sub>2</sub>O]
      </p>

      <p>
        Ferrous ammonium sulphate is a double salt of ferrous sulphate and
        ammonium sulphate (Mohr’s salt). It has the formula FeSO<sub>4</sub>.(NH
        <sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.6H<sub>2</sub>O. &nbsp;It
        contains two different cations Fe<sup>2+</sup> and NH4<sup>+</sup>. It
        is used as a primary standard in volumetric analysis. The crystals are
        light green coloured and are monoclinic in shape.&nbsp;
      </p>

      <p>
        &nbsp;&nbsp;
        <img alt="" src={InorganicThe2} />
      </p>

      <p>
        Another example is Alum.&nbsp; Alums are the most common examples of
        double salts. These are double sulphates having general formula X
        <sub>2</sub>SO<sub>4</sub>.M<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.24H
        <sub>2</sub>O
      </p>

      <p>
        Where X = monovalent cation such as K<sup>+</sup>, Na<sup>+</sup>, NH4
        <sup>+</sup> etc.
      </p>

      <p>
        M = trivalent cation such as Al<sup>3+</sup>, Fe<sup>3+</sup>,Cr
        <sup>3+</sup> etc.
      </p>

      <p>
        If you take Potash alum (Fitkari) [K<sub>2</sub>SO<sub>4</sub>.Al
        <sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.24H<sub>2</sub>O], it is a
        double salt of potassium sulphate and aluminium sulphate. The crystals
        of potash alum are octahedral in shape and are highly soluble in water.
        It is commonly used in the purification of water.
      </p>

      <p>
        &nbsp;
        <img alt="" src={InorganicThe3} />
      </p>

      <p>
        Other examples are&nbsp; Soda alum (Na<sub>2</sub>SO<sub>4</sub>.Al
        <sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.24H<sub>2</sub>O), Ferric alum
        (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>. Fe<sub>2</sub>(SO
        <sub>4</sub>)<sub>3</sub>. 24H<sub>2</sub>O) etc.
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        These are crystalline solids and are soluble in water. Due to
        hydrolysis, their aqueous solutions have acidic character.
      </p>

      <h1 className={classes.headTag}>
        <b>Learning Outcomes</b>
      </h1>

      <ul>
        <li>
          Students understand the terms ‘inorganic compounds, double salts and
          coordination compounds.
        </li>
        <li>
          Students will acquire the skills to prepare&nbsp; Mohr’s salt
          ,&nbsp;Potash alum &nbsp;and &nbsp;Potassium trioxalatoferrate
        </li>
        <li>
          Students will identify the chemicals and apparatus required for the
          preparation of Mohr’s salt, potash alum and potassium
          trioxalatoferrate.
        </li>
        <li>
          Once students understand the concept of the experiment and the
          different steps, they can perform the experiment in the real lab more
          accurately and quickly.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Inorganic Compounds.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=114&cnt=1
        </Typography>
      </div>
    </div>
  );
}
