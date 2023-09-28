import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ImbibitionThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Imbibition1/imbibition-the1.gif';


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
        The objective of doing this experiment is to determine the percentage of
        water imbibed by raisins.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Raisins when soaked in water swell up due to imbibition. As a result of
        absorption or imbibition of water, the size of the raisins increases.
        The difference in mass between the swollen and dry raisins gives the
        amount of water imbibed by the raisins.
      </p>

      <h2 className={classes.secondaryTag}>Transportation of water in plants</h2>

      <p>
        Water is the most important constituent of plants and is essential for
        the maintenance of life, growth and development. Transportation of water
        into and through a plant takes place by different processes like
        osmosis, diffusion and imbibition.
      </p>

      <h2 className={classes.secondaryTag}>What is Imbibition?</h2>

      <p>
        Imbibition is the process of adsorption of water by substances without
        forming a solution. Swelling of seeds when immersed in water is an
        example of imbibition. Imbibition is the temporary increase in the
        volume of the cell. Imbibition is a passive transport of materials that
        does not require energy during the process.
      </p>

      <p>
        <img alt="" src={ImbibitionThe1} />
      </p>

      <p>
        The substance that imbibes water is called imbibant and the liquid which
        is imbibed is called adsorbent. The process of imbibition occurs mainly
        due to the presence of hydrophilic or lyophilic colloids. Water is
        imbibed through the sub microscopic capillaries present on the surface
        of the body. Substances such as cellulose and starch are hydrophilic and
        are imbibants. (Hydrophilic means ' water loving, or{' '}
        <span class="st">readily absorbing moisture' .)</span>
      </p>

      <p>
        The movement of water into the plant parts continues until a dynamic
        equilibrium is attained. Imbibition of water increases the volume of the
        imbibant, which results in imbibitional pressure. This pressure can be
        of tremendous magnitude. This fact can be demonstrated by a method used
        to split rocks.&nbsp; Here, dry wooden stalks are inserted into the
        crevices of the rocks and soaked in water, a technique used by early
        Egyptians to cleave stone blocks.
      </p>

      <p>
        Imbibing does not necessarily mean the ability to imbibe all kinds of
        liquids. For example, dry plant parts immersed in ether do not swell
        appreciably, however, a rubber plant imbibes ether and swells if
        submerged in it. On the other hand, the product rubber does not imbibe
        water.
      </p>

      <h2 className={classes.secondaryTag}>Factors affecting the rate of Imbibition</h2>

      <ul>
        <li>
          Nature of imbibant:Different types of organic substances have
          different imbibing capacities. Proteins have a very high imbibing
          capacity, starch has less capacity and cellulose is the weakest
          imbiber. That is why proteinaceous pea seeds swell more on imbibition
          than starchy wheat seeds
        </li>
        <li>
          Temperature:The rate of imbibition increases with the increase in
          temperature.
        </li>
        <li>
          Concentration of the solute: Increase in concentration of the solute
          decreases imbibition due to a decrease in the diffusion pressure
          gradient between the imbibant and the liquid being imbibed.
        </li>
        <li>
          Surface area of imbibant:The imbibition will be greater when the
          surface area of imbibant is larger.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Biological importance of Imbibition</h2>

      <ul>
        <li>
          Imbibition is dominant in the initial stage of water absorption by
          roots.
        </li>
        <li>Seed germination is initiated by imbibition.</li>
        <li>
          Imbibition force is useful in adhering water to the walls of xylem
          elements.
        </li>
        <li>Fruits retain water by imbibition.</li>
        <li>
          The movement of water into ovules that are ripening into seeds is made
          possible by the process of imbibition.
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol>
        <li>Students understand the terms imbibition and imbibant.</li>
        <li>
          Students understand factors affecting the rate of imbibition and the
          biological importance of imbibition.
        </li>
        <li>
          Students will acquire skills to detect the process of imbibition
          through the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=123&amp;cnt=243">
            animated demonstrations
          </a>{' '}
          and{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=123&amp;cnt=4">
            simulations
          </a>
          .
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Imbibition by Raisins. Retrieved 7 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=123&cnt=1
        </Typography>
      </div>
    </div>
  );
}
