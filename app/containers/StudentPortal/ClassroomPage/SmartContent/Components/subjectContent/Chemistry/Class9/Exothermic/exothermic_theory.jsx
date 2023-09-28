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
      <h2 className={classes.secondaryTag}>
        <span color="#000000;">Objective:&nbsp;</span>
      </h2>

      <p>
        <span color="#000000;">
          To study exothermic and endothermic reaction.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span color="#000000;">Theory:</span>
      </h2>

      <ol>
        <li>
          <span fontSize="14px;">
            <strong>Exothermic reaction :&nbsp;</strong>
            <span color="rgb(0, 0, 0); line-height: 1.6;">
              An exothermic reaction is a chemical reaction that releases energy
              in the form of light or heat.It gives net energy to its
              surroundings. That is, the energy needed to initiate the reaction
              is less than the energy that is subsequently released.
            </span>
          </span>
        </li>
      </ol>

      <p textAlign="center;">
        <span fontSize="14px;">
          <span color="#000000;">
            <strong>reactants → products + energy</strong>
          </span>
        </span>
      </p>

      <p textAlign="left; margin-left: 40px;">
        <span fontSize="14px;">
          <span color="#000000;">
            <em fontWeight="normal">
              <strong>Examples of exothermic reactions:</strong>
            </em>
          </span>
        </span>
      </p>

      <ul marginLeft="40px;">
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              Calcium oxide reacts vigorously with water to produce slaked
              lime(Calcium hydroxide) used in white washing releasing large
              amount of heat.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              Burning of natural gas:&nbsp;when methane reacts with oxygen it
              releases vast amount of heat and cabon oxide and water.
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;CH<sub>4</sub>+2O<sub>2</sub>-------&gt;CO<sub>2</sub>+H
              <sub>2</sub>O&nbsp;
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              Respiration: During digestion, food is broken down into
              simpler&nbsp;substances. For example, rice, potatoes and bread
              contain&nbsp;carbohydrates. These carbohydrates are broken down to
              form glucose.&nbsp;This glucose combines with oxygen in the cells
              of our body and provides&nbsp;energy. The special name of this
              reaction is respiration
            </span>
            <span color="#000000;">.</span>
          </span>
        </li>
      </ul>

      <ol start="2">
        <li>
          <span fontSize="14px;">
            <strong>Endothermic reaction :&nbsp;</strong>
            <span color="rgb(0, 0, 0);" line-height="1.6;">
              An endothermic reaction is any chemical reaction that absorbs heat
              from its environment.
            </span>
          </span>
        </li>
      </ol>

      <p textAlign="center;">
        <span fontSize="14px;">
          <span color="#000000;">
            <strong>reactants + energy → products</strong>
          </span>
        </span>
      </p>

      <p marginLeft="40px;">
        <span fontSize="14px;">
          <span color="#000000;">
            <em fontWeight="normal">
              <strong>Example of endothermic reactions :</strong>
            </em>
          </span>
        </span>
      </p>

      <ul marginLeft="40px;">
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              Melting of ice: Ice takes heat from the surroundings and turns in
              to liquid water.&nbsp;
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              Decomposition of Calcium Carbonate: When limestone is heated at
              above 900&nbsp;ºC it decomposes into quick lime and releases
              carbondioxide.
            </span>
            <br />
            <span color="rgb(0, 0, 0);" lineHeight="1.6;">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;CaCO<sub>3</sub>(limestone)-------------&gt;
              CaO(quick lime) + CO<sub>2</sub>
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span color="#000000;">
              SilverChloride turns grey when exposed to sunlight.Due to
              decomposition of silver chloride into silver and chlorine
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; 2AgCl ----------------&gt;2Ag+Cl<sub>2</sub>
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Exothermic and Endothermic Reactions.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=92&cnt=1
        </Typography>
      </div>
    </div>
  );
}
