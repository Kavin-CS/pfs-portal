import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';



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
        Our objective is to perform the following basic laboratory techniques:
      </p>

      <ul>
        <li>Working of Bunsen burner</li>
        <li>Cutting a glass tube or glass rod</li>
        <li>Bending a glas tube</li>
        <li>Drawing a glass jet</li>
        <li>Use of wash bottle</li>
        <li>Boring a cork</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        In a chemical laboratory, we carry out some simple operations like
        bending or cutting a glass tube, boring a cork and studying the complex
        process of analysing substances qualitatively and quantitatively.
      </p>

      <p>
        We are going to learn some basic laboratory techniques that are easy as
        long as we concentrate on accuracy, cleanliness, and strict adherence to
        details when performing any techniques.&nbsp;
      </p>

      <p>
        Before we go ahead, we'll have to know that most laboratory techniques
        require knowledge of how to use the equipment.&nbsp; Let us study them
        in detail.
      </p>

      <h2 className={classes.secondaryTag}>Bunsen Burner</h2>

      <p>
        A<strong> </strong>Bunsen burner is a common heating device used in a
        laboratory.&nbsp; We'll first figure out the different parts of the
        burner and then see how it works.The Bunsen burner was named after
        Robert Bunsen, the German chemist who introduced it in 1855. The Bunsen
        burner was the forerunner of the gas-stove burner and the gas furnace.
      </p>

      <p>The Bunsen burner consists of the following parts:</p>

      <ul>
        <li>
          A Base that is made of cast iron that keeps the burner in a stable
          upright position.
        </li>
        <li>
          A Gas-inlet tube that fits horizontally into the side of the base and
          can be connected to the gas tap through a rubber tube.
        </li>
        <li>
          The Nipple made of a brass rod with a fine pin-hole running through
          it. At its lower end, the nipple is screwed into the base. At the
          upper end, it carries the burner base.
        </li>
        <li>
          The Burner tube that is a metallic tube with two opposite air holes
          near its lower end. It is screwed to the nipple and carries the air
          regulator.
        </li>
        <li>
          The Air adjusting disc that is a metallic ring that loosely fits at
          the lower end of the burner tube. It is pierced with two holes that
          exactly correspond to the two air holes of the burner tube. It can be
          rotated to regulate supply of air into the burner tube by partially or
          wholly closing the air holes.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>How a&nbsp; Bunsen Burner works:</h3>

      <p>
        The rubber tubing is connected to the gas tap and the burner is lit. As
        the gas escapes through the nipple, there is a fall of pressure
        resulting in air being sucked in through the air holes. The mixture of
        air and combustible gas burns at the top with a flame.&nbsp; Depending
        on the quantity of air mixed, the flame can be luminous or non-luminous.
      </p>

      <h3 className={classes.secondaryTag}>Types of flames produced by the Bunsen burner:</h3>

      <p>The Bunsen burner produces three different types of flames.</p>

      <p>
        The "coolest" flame is a yellow or orange coloured one.&nbsp; It is
        approximately 300<sup>o</sup>C and is not used to heat anything, only to
        show that the Bunsen burner is on.&nbsp; It is called the safety
        flame.&nbsp;&nbsp;
      </p>

      <p>
        The medium flame, also called the blue flame or the invisible flame is
        difficult to see in a well-lit room.&nbsp; It is the most commonly used
        flame. It is approximately 500<sup>o</sup>C.
      </p>

      <p>
        The hottest flame, called the roaring blue flame, is characterized by a
        light blue triangle in the middle and it is the only flame of the three
        that makes a noise.&nbsp; The Oxidising flame or non-luminous zone,
        which is hottest, is the portion that should be used for the purpose of
        heating.&nbsp; The Luminous zone is the brightest part of the flame. It
        is reducing in character and is used for reducing processes, such as in
        charcoal cavity test; match stick test and borax bead test of some
        radicals.&nbsp; It is approximately 700<sup>o</sup>C.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Wash-bottle</h2>

      <p>
        A wash-bottle is a container in which distilled water is taken.&nbsp;
        With the help of a wash-bottle a fine stream of water can be obtained
        for washing precipitate and for other purposes.
      </p>

      <p>
        Now-a-days, most laboratories use polythene wash bottles.&nbsp; It
        consists of&nbsp; flexible plastic material, is fitted with a plastic
        tube having a jet at its outer end.&nbsp; On squeezing the bottle, a
        fine stream of water comes out of the jet.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Glass rod</h2>

      <p>
        It is a piece of laboratory equipment used to mix chemicals and liqids
        for laboratory purposes. It is also called stirring rod. It is also used
        as an aid for transfering the liquid into the funnel. they are usually
        made of solid glass, about the thickness and slightly longer than a
        drinking straw, with rounded end.Glass rods are made of borosilicate.
      </p>

      <h2 className={classes.secondaryTag}>Glass tube</h2>

      <p>
        The glass tubes are hollow pieces of borosilicate glasses used primarily
        as a laboratory glassware.It is commercially available in various
        lengths and thicknesses and is frequently attached to rubber stoppers.
        Although modifying a glass tube is an essential laboratory technique, a
        glass cutter is used to break a long glass tube into small pieces.
        Freshly cut glass tubes are flame polished before use to remove the
        rough edge. Glass tubes can be bent by heating evenly over a Bunsen
        burner.
      </p>

      <h2 className={classes.secondaryTag}>Cork</h2>

      <p>
        The cork has a variety of important uses in laboratories. It is mainly
        used as a stopper for bottles. Boring a cork is required for setting an
        apparatus for the preparation of gas for carrying out ditillations etc.
        Above all, it is required for setting up a wash bottle. Cork is bored
        using a Cork borer, which is a metal tool for cutting a hole in a cork,
        or a rubber stopper to insert glass tubing. Choose a borer slightly
        smaller in diameter than that of the tube to be fitted in the cork. This
        will ensure tight fitting of the glass tube.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students understant some commonly used laboratory apparatus.</li>
        <li>
          Students understant the types of flames produced by the Bunsen burner.
        </li>
        <li>
          Students acquird skill to do the following laboratory techniques in
          the real lab.
          <ul>
            <li>Cutting a glass tube or a glass rod.</li>
            <li>Bending a glass tube.</li>
            <li>Extending a glass jet to obtain two jets.</li>
            <li>Boring a cork.</li>
          </ul>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Basic Laboratory Techniques. Retrieved
          30 March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=32&cnt=1
        </Typography>
      </div>
    </div>
  );
}
