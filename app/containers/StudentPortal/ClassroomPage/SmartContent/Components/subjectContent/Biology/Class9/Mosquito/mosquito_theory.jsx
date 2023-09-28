import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MosquitoThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Mosquito1/mosquito-the1.gif';
import MosquitoThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Mosquito1/mosquito-the2.gif';
import MosquitoThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Mosquito1/mosquito-the3.gif';
import MosquitoThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/Mosquito1/mosquito-the4.gif';
import MosquitoThe5 from '../../../../../../../../../assets/Images/Subjects/Biology/Mosquito1/mosquito-the5.gif';

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

      <p>Our objective is to study the life cycle of a mosquito.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        The mosquitoes are a family of small, midge-like flies. Like all flies,
        mosquitoes go through four stages in their life - egg, larva, pupa, and
        adult. We call this as the life cycle. &nbsp;Each of these stages is
        morphologically different from the other, with even the habitat of each
        stage differing. The first three stages - egg, larva and pupa are
        largely aquatic, whereas the adult stage is aerial.
      </p>

      <h2 className={classes.secondaryTag}>Mosquito Life Cycle</h2>

      <p>
        We will now look at the four distinct stages of development in the life
        cycle of a mosquito.
      </p>

      <p>
        <img alt="" src={MosquitoThe1} />
      </p>

      <h3 className={classes.secondaryTag}>Stage 1 - Egg</h3>

      <p>
        <img alt="" src={MosquitoThe2} />
      </p>

      <p>
        The eggs are laid one at a time and they float on the surface of the
        water. Normally the eggs are white when first deposited, then darken to
        near black within a day. They hatch in one to three days depending on
        the temperature. Eggs left on moist soil can last for up to a year,
        until the ground is flooded again, before hatching.
      </p>

      <p>
        In the case of Culex and Culiseta species, 200-300 eggs are stuck
        together in rafts. Anopheles and Aedes species do not make egg rafts but
        lay their eggs separately. Culex, Culiseta, and Anopheles lay their eggs
        on water while Aedes lay their eggs on damp mud. The eggs generally do
        not hatch until the place is flooded. Most eggs hatch into larvae within
        48 hours. When the larvae are ready to hatch, they use a small temporary
        ‘tooth’ on their head to break open the egg along a suture that was made
        by it.
      </p>

      <h3 className={classes.secondaryTag}>Stage 2 - Larva</h3>

      <p>
        <img alt="" src={MosquitoThe3} />
      </p>

      <p>
        Mosquito larvae, commonly called ‘wigglers’ or ‘wrigglers’, live in
        water from 7 to 14 days depending on the water temperature. Larvae swim
        either through propulsion with their mouth brushes, or by jerky
        movements of their entire bodies, giving them the common name of
        ‘wigglers’. The larva begins to feed on bacteria and decaying organic
        matter on the water surface, soon after they hatch out of eggs. They
        spend most of their time hanging upside down at the surface, sucking in
        oxygen through the siphon. The siphon is located at the base of their
        abdomen and is similar to a snorkel. Brushes that are located in front
        of their mouths collect the food. Anopheles larvae do not have a siphon
        and they lay parallel to the water surface. The larval stage lasts for a
        few days to a few weeks, during which the larvae shed several layers of
        their outer skin, called moulting. This allows further growth.
      </p>

      <h3 className={classes.secondaryTag}>Stage 3 - Pupa</h3>

      <p>
        <img alt="" src={MosquitoThe4} />
      </p>

      <p>
        After the larvae have completed moulting, they become pupae. This is the
        stage in which they undergo metamorphosis to become an adult mosquito.
        The pupal stage is a resting, non-feeding stage. Mosquito pupae are
        commonly called ‘tumblers’. The pupa is lighter than water and therefore
        floats at the surface. The mosquito pupa is comma-shaped. The head and
        thorax are merged into a cephalothorax, with the abdomen curving around
        underneath. At one end of these curved bodies is the large head and at
        the other end is the flippers used for swimming. They must take in
        oxygen from time to time through two breathing tubes known as
        ‘trumpets’. After a few days or longer, depending on the temperature and
        other circumstances, the pupa rises to the water surface, the dorsal
        surface of its cephalothorax splits, and the adult mosquito emerges.
      </p>

      <h3 className={classes.secondaryTag}>Stage 4 - Adult</h3>

      <p>
        <img alt="" src={MosquitoThe5} />
      </p>

      <p>
        The newly emerged adult rests on the surface of the water for a short
        time to allow itself to dry and harden its parts. Also, the wings have
        to spread out and dry properly before it can fly.
      </p>

      <p>
        Adult mosquitoes have a head with two large compound eyes, a thorax, a
        pair of scaled wings and six jointed legs. They also have antennae and a
        proboscis. Adult mosquitoes mate within the first few days after
        emerging from the pupal stage.
      </p>

      <p>
        It is the carbon dioxide that we exhale, and the lactic acid from our
        sweat that combine to make us smell like a mosquito buffet. Mosquitoes
        can pick up these smells from 100 feet, and they can also feel our body
        heat and notice movements.
      </p>

      <p>
        Only female mosquitoes have the mouth parts necessary for sucking blood.
        When biting with their proboscis, they stab two tubes into the skin, one
        is an anti-coagulant to keep the blood flowing and is a mild painkiller
        that helps them escape detection, the other helps to suck blood. They
        use the blood not for their own nourishment but as a source of protein
        for their eggs. For food, both males and females eat nectar and other
        plant sugars.
      </p>

      <h2 className={classes.secondaryTag}>Some interesting mosquito facts</h2>

      <ul>
        <li>There are over 2500 different species of mosquitoes.</li>
        <li>
          The feeding habits of mosquitoes are quite unique in that it is only
          the adult females that feed on blood. The male mosquitoes feed only on
          plant juices.
        </li>
        <li>
          Mosquitoes must have water in which to complete their life cycle.
        </li>
        <li>
          Most female mosquitoes need to feed on animal blood before they can
          develop eggs.
        </li>
        <li>A female can produce up to 500 eggs before she finally dies.</li>
        <li>
          Mosquitoes don't travel more than a mile from the place where they
          were hatched.
        </li>
        <li>
          The length of life of the adult mosquito usually depends on factors
          like - temperature, humidity, sex of the mosquito and time of the
          year.
        </li>
        <li>
          Once mosquitoes emerge from their pupal cocoons and take flight, male
          mosquitoes last less than a week and the females’ maybe a couple of
          months.
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the different stages of a Mosquito life cycle.
        </li>
        <li>
          Students get to know different types of Mosquitoes and the diseases
          spread by them.
        </li>
        <li>
          Students understand the differences in each stage of the mosquito life
          cycle through the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=138&amp;cnt=259">
            animated demonstrations
          </a>
          .
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Life Cycle of a Mosquito. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=138&cnt=1
        </Typography>
      </div>
    </div>
  );
}
