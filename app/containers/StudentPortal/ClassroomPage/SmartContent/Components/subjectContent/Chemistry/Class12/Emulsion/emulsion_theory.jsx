import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import EmulsionThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Emulsion1/emulsion-the1.jpg';
import EmulsionThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Emulsion1/emulsion-the2.jpg';
import EmulsionThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Emulsion1/emulsion-the3.jpg';
import EmulsionThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Emulsion1/emulsion-the4.jpg';


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
        Our objective is to study the effectiveness of different common oils
        (castor oil, cotton seed oil, coconut oil, kerosene oil, mustard oil) in
        forming emulsions.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What are Emulsions?</h2>

      <p>
        Emulsions are an important class of the colloidal system. It is a
        liquid-liquid colloidal system in which the dispersed phase and
        dispersion medium are liquids. Emulsions are a mixture of two or more
        immiscible liquids that are normally immiscible. They have the property
        to scatter the light passed through them, called Tyndall effect.
      </p>

      <p>
        If the emulsion scatters all light equally, it becomes white. If the
        emulsion is dilute, the low wavelength light will be scattered more and
        it becomes bluer and if it is more concentrated, the longer wavelength
        light will be more scattered and emulsion becomes more yellow.
      </p>

      <p>A few examples are milk and mayonnaise.</p>

      <p>
        <img alt="" src={EmulsionThe1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>How can we classify Emulsions?</h2>

      <p>Emulsions can be classified into different types.</p>

      <ol>
        <li>
          <strong>Oil-in-Water Emulsions:</strong> In this emulsion oil is
          dispersed in water, i.e.. oil is the dispersed phase and water is the
          dispersion medium. A few examples are milk, foundation cream and
          vanishing cream.
        </li>
        <li>
          <strong>Water-in-Oil Emulsions:</strong> In this emulsion water is
          dispersed in oil, i.e., water is the dispersed phase and oil is the
          dispersion medium. A few examples are butter and cod-liver oil.
        </li>
        <li>
          <strong>Multiple emulsions:</strong> In this emulsion, oil-in-water or
          water-in-oil emulsion is dispersed in another liquid medium. They are
          of two types:
          <ol>
            <li>
              <strong>Oil-in-Water-in-Oil emulsions:</strong> In this emulsion,
              very small globules of oil is dispersed in water globules of
              water-in-oil emulsion.
            </li>
            <li>
              <strong>Water-in-Oil-in-Water emulsions: </strong>In this
              emulsion, droplets of water is dispersed in the oily phase of
              oil-in-water emulsion.
            </li>
          </ol>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>
        <img
          alt=""
          src={EmulsionThe2}
        />
      </h2>

      <h2 className={classes.secondaryTag}>Instability in Emulsions</h2>

      <p>
        Stability of an emulsion refers its ability to resist the change in its
        properties. Emulsions are often recognised by their cloudy white
        appearance, since the substances do not mix together in a unified
        manner. After a short time, the mixed substances separate into different
        layers by various manners. This is called the instability of emulsion.
        There are four different types of instability in emulsions:
      </p>

      <ul>
        <li>
          <strong>Flocculation:</strong> It occurs where there is an attractive
          force between droplets. They stick together to form clumps or flocs
          like bunches of grapes. So that the dispersed phase is no longer
          evenly distributed through the dispersion medium.
        </li>
        <li>
          <strong>Coalescence:</strong> It occurs when small droplets bump into
          each other and combine together to form a large droplet. As a result,
          the average droplet size increases and the emulsion become unstable.
        </li>
        <li>
          <strong>Creaming:</strong> It occurs when droplets rise to the top of
          the emulsion by the influence of buoyancy (an upward force exerted by
          a fluid that opposes the weight of an immersed object) or by the
          influence of centripetal force.
        </li>
        <li>
          <strong>Breaking:</strong> When coalescence and creaming combine, the
          dispersed particles completely separated from the dispersion medium
          and floats to the top in a single continuous layer.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        <img
          alt=""
          src={EmulsionThe3}
        />
      </h2>

      <h2 className={classes.secondaryTag}>What is emulsification?</h2>

      <p>
        The process of making emulsions is known as emulsification. Emulsions
        can be obtained by vigorously agitating a mixture of both the liquids.
        But these emulsions are thermodynamically unstable because the dispersed
        droplets at once come together and form separate layers. The emulsions
        therefore need to be stabilised.
      </p>

      <h2 className={classes.secondaryTag}>How do we stabilise emulsions?</h2>

      <p>
        There are several ways by which emulsions can be stabilised. One method
        is the addition of small quantity of third substances known as
        emulsifying agents.
      </p>

      <h2 className={classes.secondaryTag}>What are emulsifying agents?</h2>

      <p>
        An emulsifying agent also called emulsifier is a substance that
        stabilises the emulsion by lowering the interfacial tension between the
        two immiscible liquids. It is also called stabiliser because it
        stabilises the emulsion. Soaps and detergents are most commonly used
        emulsifiers. They coat the drops of the emulsion and check them from
        coming together and stabilises the emulsion.
      </p>

      <p>
        For example, soap molecules have a polar head and a non-polar
        hydrocarbon tail. The polar head is hydrophilic (water loving) in nature
        and the non-polar tail is hydrophobic (oil loving) in nature. When soap
        solution is added into an emulsion of oil-in-water, the polar head
        dissolves in the water phase and the non-polar tail dissolves in the oil
        droplets there by stabilising the emulsion.
      </p>

      <p>
        <img alt="" src={EmulsionThe4} />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the terms colloids, emulsions, Tyndall effect and
          emulsifying agents.
        </li>
        <li>
          Students acquire the skill to perform the experiment using different
          oils.
        </li>
        <li>
          Students understand the effect of stabilising agent in the emulsion of
          different oils.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Effectiveness of Different Common Oils
          in Forming Emulsions. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=35&cnt=1
        </Typography>
      </div>
    </div>
  );
}
