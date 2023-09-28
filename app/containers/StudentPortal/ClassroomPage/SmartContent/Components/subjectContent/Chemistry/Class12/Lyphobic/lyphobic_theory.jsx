import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import LyphobicThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lyphobic1/lyphobic-the1.jpg';
import LyphobicThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lyphobic1/lyphobic-the2.png';
import LyphobicThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lyphobic1/lyphobic-the3.png';
import LyphobicThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lyphobic1/lyphobic-the4.png';
import LyphobicThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lyphobic1/lyphobic-the5.jpg';

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

      <p>Our objective is to prepare:</p>

      <ol>
        <li>
          Lyophilic Sols of
          <ul>
            <li>Starch</li>
            <li>Gum</li>
            <li>Egg albumin</li>
          </ul>
        </li>
        <li>
          Lyophobic Sols of
          <ul>
            <li>
              Ferric hydroxide [Fe(OH)<sub>3</sub>]
            </li>
            <li>
              Aluminium hydroxide [Al(OH)<sub>3</sub>]
            </li>
            <li>
              Arsenious sulphide [As<sub>2</sub>S<sub>3</sub>]
            </li>
          </ul>
        </li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>
        <img
          alt=""
          src={LyphobicThe1}
        />
      </h2>

      <h2 className={classes.secondaryTag}>What is Surface Chemistry?</h2>

      <p>
        Surface chemistry is a branch of chemistry that deals with the study of
        the nature of surfaces, and physical and chemical reactions occur at the
        interface of two phases. It is closely related to colloid science. The
        foundation of colloidal chemistry was laid down by Thomas Graham, a
        Scottish scientist.
      </p>

      <h2 className={classes.secondaryTag}>What are Colloids?</h2>

      <p>
        Colloids are the dissolved state of substances that either do not pass,
        or pass very slowly through a parchment paper or animal membrane. A few
        examples of colloids are starch, glue and&nbsp; gelatin.
      </p>

      <p>
        A colloid is not a substance, but it depicts a particular state of a
        substance that depends upon the size of its particles. The size of a
        particle in a colloidal system is&nbsp; between 1-100 nm. A colloidal
        system is a two phase heterogeneous system in which one phase is called
        the dispersed phase and the other is called the dispersion medium.
      </p>

      <p>
        <strong>Dispersed phase:</strong> It is the component present in a small
        proportion.
      </p>

      <p>
        <strong>Dispersion medium: </strong>It is the component present in
        excess.
      </p>

      <p>
        For example, in a colloidal solution of silver in water, silver is the
        dispersed phase and water is the dispersion medium.
      </p>

      <h2 className={classes.secondaryTag}>How do we classify colloids?</h2>

      <p>
        Based on the physical state of the dispersed phase and dispersion
        medium, colloids can be classified into different types.
      </p>

      <p>
        One important class of colloidal system is sols. In sols, the dispersed
        phase is solid and dispersion medium is liquid.
      </p>

      <p>
        Depending upon the nature of the interaction between the dispersed phase
        and dispersion medium sols can be classified into two types.
      </p>

      <ol>
        <li>Lyophilic sols</li>
        <li>Lyophobic sols</li>
      </ol>

      <h2 className={classes.secondaryTag}>What are Lyophilic Sols?</h2>

      <p>
        The word meaning of lyophilic means ‘liquid-loving’ or ‘solvent-
        attracting’. This means that in this colloidal solution there is a
        strong attraction between the dispersed phase and dispersion medium,
        i.e., the dispersed phase has great affinity for the dispersion medium
        that results in the extensive solvation of the colloidal particles. In
        such solids, the dispersed phase does not easily precipitate and the
        sols are quite stable. These sols are reversible in nature. The
        dispersed phase obtained by the evaporation can be easily converted to
        the sol state by simply agitating it with the dispersion medium.
        Additional stabilisers are not required during their preparation. If
        water is used as the dispersion medium, lyophilic sols are called
        hydrophilic sols. Starch, gum, gelatin, egg albumin etc. are examples of
        lyophilic sols.
      </p>

      <ul>
        <li>Starch Sol</li>
      </ul>

      <p>
        Starch forms lyophilic sol when water is used as the dispersion medium.
        The formation of sol is accelerated by heating. Starch sol can be
        prepared by heating it and water at 100 °C. It is quite stable and is
        not affected by the presence of any electrolytic impurity.
      </p>

      <ul>
        <li>Gum Sol</li>
      </ul>

      <p>
        Like starch gum also form lyophilic sol with water. Instead of boiling
        water, warm water is used to for the preparation of sol because gum is
        quite soluble in warm water.
      </p>

      <ul>
        <li>
          <strong>Egg Albumin Sol</strong>
        </li>
      </ul>

      <p>
        Egg albumin which is obtained from eggs forms lyophilic sol with cold
        water. The sol is quite stable and is not affected by the presence of
        traces of impurities.
      </p>

      <h2 className={classes.secondaryTag}>What are Lyophobic Sols?</h2>

      <p>
        The word lyophobic means ‘liquid-hating’. That means in these sols,
        there is little or no interaction between the dispersed phase and the
        dispersion medium ie, dispersed phase has little affinity for dispersion
        medium. These sols are easily precipitated by the addition of small
        amounts of electrolyte, by heating or by shaking, therefore these sols
        are relatively less stable than lyophilic sols. They need stabilising
        agents for their preparation. If water is used as the dispersion medium,
        lyophobic sols are called hydrophobic sols. Examples of lyophobic sols
        include sols of metals and their insoluble compounds like sulphides and
        oxides.
      </p>

      <ul>
        <li>Ferric Hydroxide Sol</li>
      </ul>

      <p>
        Ferric hydroxide forms lyophobic sols on treatment with water. Ferric
        hydroxide sol is prepared by the hydrolysis of ferric chloride with
        boiling distilled water. The reaction takes place is as follows.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«munder»«mrow»«msub»«mi mathvariant=¨normal¨»FeCl«/mi»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»aq«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»F«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»c«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mn»0«/mn»«mo»(«/mo»«mi mathvariant=¨normal¨»l«/mi»«mo»)«/mo»«mover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/mover»«munder»«mrow»«mi mathvariant=¨normal¨»Fe«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»OH«/mi»«msub»«mo»)«/mo»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»S«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»R«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»d«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«mi mathvariant=¨normal¨»HCl«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»aq«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={LyphobicThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        The hydrolysis reaction produces insoluble ferric hydroxide particles
        which undergo agglomerisation to yield bigger particles of colloidal
        dimensions. These particles absorb Fe3+ ions preferentially from the
        solution to give positive charge to the sol particles. Stability of sol
        is due to the charge on the sol particles. Hydrochloric acid produced
        during hydrolysis must be removed from the sol because it destabilizes
        the sol. HCl can be removed from the sol by dialysis process otherwise
        sol will not be stable.
      </p>

      <ul>
        <li>Aluminium Hydroxide Sol</li>
      </ul>

      <p>
        It is also hydrophobic in nature and is obtained by the hydrolysis of
        aluminium chloride.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»C«/mi»«msub»«mi mathvariant=¨normal¨»l«/mi»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»q«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»m«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»l«/mi»«mo»)«/mo»«mover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/mover»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»l«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»W«/mi»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»e«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«mi mathvariant=¨normal¨»HCl«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»aq«/mi»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={LyphobicThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        Hydrochloric acid produced during the hydrolysis is removed by dialysis
        because aluminium hydroxide sol is affected by the presence of ionic
        impurities.
      </p>

      <ul>
        <li>Arsenious Sulphide Sol</li>
      </ul>

      <p>
        It is a lyophobic sol obtained by the hydrolysis of arseniuos oxide with
        boiling distilled water, followed by passing H<sub>2</sub>S gas through
        it.
      </p>

      <p>
        <img
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«msub»«mi mathvariant=¨normal¨»s«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»O«/mi»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»a«/mi»«mi mathvariant=¨normal¨»q«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»x«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»l«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«mover»«mo»§#8594;«/mo»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/mover»«munder»«mrow»«mn»2«/mn»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»O«/mi»«mi mathvariant=¨normal¨»H«/mi»«msub»«mo»)«/mo»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»n«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»u«/mi»«mi mathvariant=¨normal¨»s«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»h«/mi»«mi mathvariant=¨normal¨»y«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»r«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»x«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»d«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/munder»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mn»2«/mn»«mi mathvariant=¨normal¨»As«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»OH«/mi»«msub»«mo»)«/mo»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»3«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»S«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»g«/mi»«mo»)«/mo»«mo»§nbsp;«/mo»«mo»§#8594;«/mo»«mo»§nbsp;«/mo»«munder»«mrow»«mi mathvariant=¨normal¨»A«/mi»«msub»«mi mathvariant=¨normal¨»s«/mi»«mn»2«/mn»«/msub»«msub»«mi mathvariant=¨normal¨»S«/mi»«mn»3«/mn»«/msub»«mo»(«/mo»«mi mathvariant=¨normal¨»s«/mi»«mo»)«/mo»«/mrow»«mrow»«mi mathvariant=¨normal¨»Y«/mi»«mi mathvariant=¨normal¨»e«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»w«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»o«/mi»«mi mathvariant=¨normal¨»l«/mi»«/mrow»«/munder»«mo»§nbsp;«/mo»«mo»+«/mo»«mo»§nbsp;«/mo»«mn»6«/mn»«msub»«mi mathvariant=¨normal¨»H«/mi»«mn»2«/mn»«/msub»«mi mathvariant=¨normal¨»O«/mi»«mo»(«/mo»«mi mathvariant=¨normal¨»l«/mi»«mo»)«/mo»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={LyphobicThe4}
          title="Double click to edit"
        />
      </p>

      <h2 className={classes.secondaryTag}>Comparison between Lyophilic and Lyophobic sols</h2>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <thead>
          <tr>
            <th scope="col">Lyophilic Sol</th>
            <th scope="col">Lyophobic Sol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Relatively stable as strong force of interaction exists between
              dispersed phase and dispersion medium
            </td>
            <td>
              Less stable as weak force of interaction exists between dispersed
              phase and dispersion medium.
            </td>
          </tr>
          <tr>
            <td>
              Can be prepared directly by mixing dispersed phase with dispersion
              medium.
            </td>
            <td>
              Cannot be prepared directly by mixing dispersed phase and
              dispersion medium.
            </td>
          </tr>
          <tr>
            <td>No need of stabilisers during preparation.</td>
            <td>Additional stabilisers are required during preparation.</td>
          </tr>
          <tr>
            <td>They are reversible in nature.</td>
            <td>They are irreversible in nature.</td>
          </tr>
          <tr>
            <td>
              These are usually formed by organic substances like starch, gum,
              proteins etc.
            </td>
            <td>
              These are usually formed by inorganic materials like metals and
              their oxides, sulphides etc.
            </td>
          </tr>
          <tr>
            <td>
              They are highly viscous and have higher viscosity than that of the
              medium.
            </td>
            <td>They have nearly the same viscosity as that of the medium.</td>
          </tr>
          <tr>
            <td>They are highly hydrated.</td>
            <td>They are not much hydrated.</td>
          </tr>
          <tr>
            <td>Particles cannot be detected even under an ultramicroscope.</td>
            <td>Particles can be detected under an ultramicroscope.</td>
          </tr>
          <tr>
            <td>
              Charge on the lyophilic sol can be postive, negative or netural.
            </td>
            <td>
              Charge on the lyophobic sol can be postive or negative. As
              <sub>2</sub>S<sub>3</sub> sol is -ve and Fe(OH)<sub>3</sub> sol is
              +ve in nature.
            </td>
          </tr>
          <tr>
            <td>
              Depending on the charge, their particles migrate to either
              direction of an electric field.
            </td>
            <td>
              Depending on the charge, their particles migrate only in one
              direction of an electric field.
            </td>
          </tr>
          <tr>
            <td>
              Surface tension is usually lower than that of the dispersion
              medium.
            </td>
            <td>
              Surface tension is nearly the same as that of the dispersion
              medium.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className={classes.secondaryTag}>Purification of Colloids</h2>

      <p>
        The colloidal solutions obtained from various preparation methods are
        not pure. The impurities present in colloids are generality suspended
        particles and electrolytes. The presence of electrolytes in a smaller
        concentration stabilises a sol but their presence in a higher
        concentration destabilises it. So it is necessary to purify the
        colloidal solution by removing the electrolyte impurities present in
        them. The important methods used for the purification of colloids are;
      </p>

      <ol>
        <li>Dialysis</li>
        <li>Electrodislysis</li>
        <li>Ultra-filtration</li>
        <li>Ultra-centrifugation</li>
      </ol>

      <p>
        We will look at the purification of colloids through the process of
        dialysis.
      </p>

      <h3 className={classes.secondaryTag}>Dialysis</h3>

      <p>
        The process of separating particles of colloid from that of the
        crystalloid by means of diffusion through a suitable membrane is called
        dialysis. Colloidal particles cannot be passed through a parchment
        membrane, but the ions of the electrolyte can pass through it. This
        property is used in dialysis. The apparatus used in this method is
        called dialyzer.&nbsp; It consist of a parchment bag that is filled with
        a colloidal solution and is suspended in a tank through which pure water
        is circulated. The impurities of the colloidal solution are slowly
        diffused out of the bag leaving behind the pure colloidal solution. The
        water in the beaker should be changed otherwise the impurities
        rediffuses back into the parchment bag.
      </p>

      <p>
        <img
          alt=""
          src={LyphobicThe5}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms lyophilic sols, lyophobic sols etc.
        </li>
        <li>
          Students acquire the skill to prepare lyophilic sols using starch, gum
          and egg albumin.
        </li>
        <li>
          Students acquire the skill to prepare lyophobic sols using ferric
          chloride, aluminium chloride and arsenious oxide.
        </li>
        <li>
          Students acquire the skill to purify the sols by dialysis method.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Lyophilic and Lyophobic
          Sols. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=34&cnt=1
        </Typography>
      </div>
    </div>
  );
}
