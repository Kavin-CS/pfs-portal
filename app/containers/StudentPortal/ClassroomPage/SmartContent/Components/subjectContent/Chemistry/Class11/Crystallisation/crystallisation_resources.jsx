import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
  },
  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Books:</h1>

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
        <li>
          Text book for Class XI Chemistry Part I, National Council of
          Educational Research and Training
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="https://www.google.co.in/?gfe_rd=cr&amp;ei=mxVRU9CdKsPM8geSw4DoBQ#q=potash+alum"
            target="_blank"
          >
            www.google.co.in/
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Copper%28II%29_sulfate"
            target="_blank"
          >
            en.wikipedia.org/wiki/Copper%28II%29_sulfate
          </a>
        </li>
        <li>
          <a
            href="http://www.google.co.in/imgres?imgurl=http%3A%2F%2Fwww.daviddarling.info%2Fimages%2Funit_cell_triclinic.jpg&amp;imgrefurl=http%3A%2F%2Fwww.daviddarling.info%2Fencyclopedia%2FC%2Fcrystal.html&amp;h=366&amp;w=300&amp;tbnid=EAwzZwbjbZVJHM%3A&amp;zoom=1&amp;docid=zzEvoJc4GQVvrM&amp;ei=fhdRU-_GG8rprQfcyYDgDg&amp;tbm=isch&amp;ved=0CHUQMygQMBA&amp;iact=rc&amp;uact=3&amp;dur=726&amp;page=2&amp;start=5&amp;ndsp=15"
            target="_blank"
          >
            www.google.co.in/imgres
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Benzoic_acid" target="_blank">
            en.wikipedia.org/wiki/Benzoic_acid
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Purification of Impure Samples by
          Crystallization. Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=110&cnt=337
        </Typography>
      </div>
    </div>
  );
}
