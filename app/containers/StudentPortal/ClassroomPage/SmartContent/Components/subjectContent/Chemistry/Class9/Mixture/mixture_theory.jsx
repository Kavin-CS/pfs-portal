import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MixtureThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Mixture1/mixture-the1.png';
import MixtureThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Mixture1/mixture-the2.jpg';
import MixtureThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Mixture1/mixture-the3.jpg';


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

      <p>To prepare:</p>

      <ol>
        <li>A mixture</li>
        <li>A compound</li>
      </ol>

      <p>
        Use iron filings and sulphur powder and distinguish between these on the
        basis of:
      </p>

      <ol>
        <li type="disc">Appearance, i.e., homogeneity and heterogeneity.</li>
        <li type="disc">Behaviour towards a magnet.</li>
        <li type="disc">Behaviour towards carbon disulphide as a solvent.</li>
        <li type="disc">Effect of heat.</li>
        <li type="disc">Effect of heating with dil. HCl.</li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h3 className={classes.secondaryTag}>Let’s study how matter is classified!</h3>

      <h3 className={classes.secondaryTag}>
        All matter can be classified into two categories: pure substances and
        mixtures.
      </h3>

      <h3 className={classes.secondaryTag}>
        A pure substance consists of elements or compounds. Furthermore,mixtures
        can be classified into homogeneous (uniform appearance and composition
        throughout) and heterogeneous(made of different substances).
      </h3>

      <h1 className={classes.headTag}>
        <img alt="" src={MixtureThe1} />
      </h1>

      <h2 className={classes.secondaryTag}>
        <br />
        What are elements and compounds?
      </h2>

      <h3 className={classes.secondaryTag}>Elements:</h3>

      <p>
        &nbsp;Elements are the simplest substances in nature. There are around
        90 naturally occurring elements on earth. They cannot be broken down
        into anything simpler by physical or chemical means. They consist of
        only one kind of atom and they can exist as either atoms (e.g.,&nbsp;
        argon, calcium, aluminium) or molecules (oxygen, nitrogen).
      </p>

      <p>
        &nbsp;
        <img alt="" src={MixtureThe2} />
      </p>

      <h3 className={classes.secondaryTag}>Compounds:</h3>

      <p>
        <strong>
          A compound is formed when two or more elements chemically combine
          together.
        </strong>
        The elements react chemically and form chemical bonds between the atoms
        of the elements. In compounds the constituent elements are always
        present in fixed proportions and therefore a compound has a definite
        chemical composition.
      </p>

      <p>
        <strong>
          The components of a compound lose their individual properties and the
          properties of a compound are different from their individual
          components.
        </strong>{' '}
        For example, Iron is an element which is metallic in nature and has
        magnetic properties and oxygen is an element which is a colorless
        odorless gas. When iron rusts, it reacts with atmospheric oxygen to form
        the compound iron oxide.&nbsp;
      </p>

      <p>
        Iron oxide has different properties from those of iron and sulphur. Iron
        oxide is a reddish brown colored solid and is non-magnetic in nature.
        <strong>
          The components of a compound may be separated only by chemical means.
        </strong>{' '}
        Compounds are homogeneous in nature and have fixed melting points and
        boiling points.
      </p>

      <p>
        Examples: water (H<sub>2</sub>O), sodium chloride (NaCl), ammonia (NH
        <sub>3</sub>), ethanol (C<sub>2</sub>H<sub>5</sub>OH)
      </p>

      <p>
        <br />
        <img alt="" src={MixtureThe3} />
      </p>

      <h2 className={classes.secondaryTag}>Now, what are mixtures and how they are classified?</h2>

      <h3 className={classes.secondaryTag}>Mixtures:</h3>

      <p>
        <strong>
          A mixture is a combination of two or more substances which are not
          chemically the same.{' '}
        </strong>
        The composition of a mixture is variable.&nbsp; In a mixture, the
        components are present in any proportion and they can be identified
        visually within the mixture. In a mixture, the individual components
        retain their own identities.
      </p>

      <p>
        For example, when carbon disulphide is added to a mixture of iron and
        sulphur, sulphur first dissolves and then reappears in its solid state.
        First add a small amount of CS<sub>2 </sub>into the mixture of iron
        filings and sulphur taken in a test tube and shake gently. After shaking
        the iron filings settle to the bottom of the beaker and sulphur
        dissolves in CS<sub>2</sub> to give a clear yellow solution.&nbsp;&nbsp;
        Then, pour this clear yellow solution into a china dish and after some
        time the yellow coloured sulphur powder reappears in the china dish as
        CS<sub>2</sub> evaporates.
      </p>

      <p>
        <strong>
          The properties of a mixture are the same as the properties of
          individual compounds. Individual components of a mixture may be
          separated by physical methods
        </strong>
        . For example, a magnet can be used to separate iron from a mixture of
        iron and sulphur.
      </p>

      <p>Mixtures can be homogeneous mixtures or heterogeneous mixtures.</p>

      <p>
        <strong>Homogeneous mixtures:</strong>{' '}
        <strong>
          Homogeneous mixtures have uniform composition and appearance
          throughout
        </strong>
        .A homogeneous mixture is also called a <strong>true solution.</strong>
      </p>

      <p>Example: sugar solution, ocean water, soft drinks, etc.</p>

      <p>
        <strong>
          Heterogeneous mixtures: Heterogeneous mixtures consist of different
          substances.
        </strong>
      </p>

      <p>
        Examples: mixture of iron and sulphur, mixture of sand and table salt,
        etc.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol start="1" type="1">
        <li>Students understand the terms ‘Mixture’ and ‘Compound’.</li>
        <li>
          Student acquires skill to distinguish a&nbsp; mixture of Fe &amp; S
          and compound of Fe &amp; S (FeS) by observing:
          <ul type="disc">
            <li>Appearance</li>
            <li>Behavior towards magnet</li>
            <li>Action of heat</li>
            <li>Behavior towards carbon disulphide</li>
            <li>Action with dil.HCl</li>
          </ul>
        </li>
        <li>
          Students obtain knowledge about the properties of mixture and
          compound.
        </li>
        <li>
          Students will be able to distinguish a mixture from a compound based
          on the acquired information.
        </li>
      </ol>

      <p>
        <strong>
          Let’s see how we can distinguish between a mixture and a compound!
        </strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Distinguish Between Mixture and
          Compound. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=70&cnt=1
        </Typography>
      </div>
    </div>
  );
}
