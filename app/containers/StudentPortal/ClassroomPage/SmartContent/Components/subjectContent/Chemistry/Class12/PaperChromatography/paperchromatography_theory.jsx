import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PaperChromatographyThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the1.jpg';
import PaperChromatographyThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the2.jpg';
import PaperChromatographyThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the3.png';
import PaperChromatographyThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the4.jpg';
import PaperChromatographyThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the5.png';
import PaperChromatographyThe6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PaperChromatography1/paperchromatography-the6.jpg';

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

      <p>Our objective is to;</p>

      <ol>
        <li>
          Separate the coloured components present in the mixture of red and
          blue inks by ascending paper chromatography and find their Rf values.
        </li>
        <li>
          Separate the coloured components present in the extract of spinach
          leaves by ascending paper chromatography and find their Rf values.
        </li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>
        <img alt="" src={PaperChromatographyThe1} />
      </h2>

      <h2 className={classes.secondaryTag}>Are all organic componds pure?</h2>

      <p>
        No, most organic compounds obtained from natural sources and synthesised
        in laboratories are not pure. Various methods are used for the
        purification of organic compounds that are based on the nature of the
        compound and the impurity present in it. Among the various separation
        techniques, chromatography is one of the most important separation
        technique extensively used to separate mixtures into their components
        and the purification of the compounds.
      </p>

      <h2 className={classes.secondaryTag}>What is Chromatography?</h2>

      <p>
        The word chromatography originated from two greek words 'chroma' meaning
        'colour' and 'graphine' meaning 'to write'. Chromatography means colour
        writing and it was first employed by a Russian scientist Mikhail Tsvet.
        This method was first used for the separation of coloured substances in
        plants.
      </p>

      <p>
        In the chromatographic technique, the mixture of substances is applied
        onto a phase called the stationary phase. The stationary phase may be
        solid or liquid. A moving phase that can be a pure solvent or a mixture
        of solvents, or a gas is allowed to move slowly over the stationary
        phase. This moving phase is called the mobile phase. When the mobile
        phase is moved over the mixture on the stationary phase, the components
        of the mixture gradually separates from one another.
      </p>

      <h2 className={classes.secondaryTag}>Classification of Chromatography</h2>

      <p>
        Depending on the basic principle involved in chromatography, it is
        mainly classified into two.
      </p>

      <h3 className={classes.secondaryTag}>1. Adsorption chromatography</h3>

      <p>
        It is based on the differential adsorption of the components on the
        adsorbent (stationary phase). This means that different compounds are
        adsorbed on an adsorbent at different degrees. Following are the two
        main types of chromatographic techniques based on the principle of
        differential adsorption.
      </p>

      <ul>
        <li>Column Chromatography</li>
        <li>Thin layer Chromatography</li>
      </ul>

      <p>
        <strong>Column chromatography</strong>
      </p>

      <p>
        In column chromatography, the stationary phase or adsorbent is a solid
        and the mobile phase is a liquid. The most commonly used stationary
        phases are silica gel and alumina. The mobile phase or eluent is a pure
        solvent or a mixture of solvents. It involves the separation of a
        mixture over a column of adsorbent packed in a glass tube called
        chromatography column. Chromatography column is a glass tube with
        diameter from 5 mm to 50 mm with length 5 cm to 1 m with a stopcork at
        the bottom. The mixture adsorbed is placed on the top of the adsorbent
        column packed in the chromatography column. An appropriate eluent is
        allowed to run down the column slowly. Depending upon the degree to
        which the components are adsorbed, complete separation takes place. The
        most readily adsorbed components are retained near the top and others
        come down to various distances in the column.
      </p>

      <p>
        <img alt="" src={PaperChromatographyThe2} />
      </p>

      <p>
        <strong>Thin Layer Chromatography</strong>
      </p>

      <p>
        Thin layer chromatography is another type of adsorption chromatography,
        which involves the separation of a mixture of substances over a thin
        layer of an adsorbent coated on a glass plate. In this case, the
        stationary phase is a glass plate of suitable size coated with a thin
        layer of stationary phase usually silica gel or alumina. This plate is
        known as thin layer chromatography plate (TLC plate) or chromaplate. The
        solution of mixture to be separated is applied as a small spot about 2
        cm above one end of the TLC plate. The glass plate is then placed in a
        closed jar (chromatography chamber) containing the mobile phase. As the
        mobile phase rises up the plate by capillary action, the components of
        the mixture move up along with the solvent to different distances
        depending on their degree of adsorption and separation takes place. The
        relative adsorption of each component of the mixture is expressed in
        terms of its Retardation factor (Rf) (Retention factor).
      </p>

      <p>What is Retention factor (Rf value)?</p>

      <p>
        It is defined as the distance moved up or travelled by the component
        from the original line to the distance travelled by the solvent from the
        original line.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»f«/mi»«/msub»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PaperChromatographyThe3}
          title="Double click to edit"
        />
      </p>

      <p>How do we detect the components on the TLC plate?</p>

      <ul>
        <li>
          The spots of coloured components are visible on the TLC plate due to
          their original colour. The spots of colourless components that are
          invisible to the eye but fluorescent in ultraviolet light can be
          detected by putting the plate under ultraviolet light.
        </li>
        <li>
          Another detection technique is to place the plate in a covered jar
          containing few crystals of iodine, spots of the components that absorb
          iodine, will seen as brown spots.
        </li>
        <li>
          Another method is to spray an appropriate reagent on the TLC plate.
          For example, amino acids may be detected by spraying the plate with
          ninhydrin solution.
        </li>
      </ul>

      <p>
        <img alt="" src={PaperChromatographyThe4} />
      </p>

      <h3 className={classes.secondaryTag}>2. Partition Chromatography</h3>

      <p>
        The basic principle of partition chromatography is the continuous
        differential partitioning of components of a mixture between the
        stationary phase and the mobile phase. An important partition
        chromatography is Paper Chromatography.
      </p>

      <p>
        <strong>Paper Chromatography</strong>
      </p>

      <p>
        In paper chromatography, the stationary phase is a special quality paper
        called chromatography paper. Mobile phase is a solvent or a mixture of
        solvents. A solution of the mixture is spotted on a line about 2 cm
        above from the bottom of the paper, called original line or base line
        and then suspended in a chromatography chamber containing suitable
        solvent. The solvent rises up the paper by capillary action and flows
        over the spot. The paper selectively retains different components
        according to their differing partition in the two phases. The paper
        strip so developed is called Chromatogram. The spots of the separated
        coloured compounds are visible at different heights from the position of
        initial spot on the chromatogram. The spots of the separated colourless
        components may be observed either under ultraviolet light or by the use
        of an appropriate spray reagent. The distance travelled by the solvent
        from the original line is called solvent front. The relative adsorption
        of each component of the mixture is expressed in terms of its
        Retardation factor (Rf) (Retention factor).
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msub»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»f«/mi»«/msub»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»p«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»b«/mi»«mi mathvariant=¨normal¨»y«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»v«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»t«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»f«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»g«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/math»"
          class="Wirisformula"
          src={PaperChromatographyThe5}
          title="Double click to edit"
        />
      </p>

      <p>
        <strong>Ascending and Descending Paper Chromatography</strong>
      </p>

      <p>
        The type of paper chromatography in which the solvent rises up is called
        Ascending paper chromatography. Alternatively, the solvent may be taken
        on the top in a container and be allowed to come down, in which case it
        is termed as Descending paper chromatography.&nbsp; Below is shown the
        ascending paper chormatography.
      </p>

      <p>
        <img alt="" src={PaperChromatographyThe6} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms chromatography, adsorption
          chromatography, partition chromatography, column chromatography, TLC,
          paper chromatography, retardation factor etc.
        </li>
        <li>
          Students understand the principle of adsorption chromatography and
          partition chromatography.
        </li>
        <li>
          Students acquire the skill to perform the experiment by observing
          animation, simulator, video etc.
        </li>
        <li>
          Students understand the basic requirements for performing a paper
          chromatography.
        </li>
        <li>
          Students understand the different components present in the extract of
          spinach leaves.
        </li>
        <li>Students can identify the components based on their Rf value.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Paper Chromatography. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=133&cnt=1
        </Typography>
      </div>
    </div>
  );
}
