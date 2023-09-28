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
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.header}>Books:</h1>

      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/443445/parenchyma"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/443445/parenchyma
          </a>
        </li>
        <li>
          <a
            href="http://www.britannica.com/EBchecked/topic/529119/sclerenchyma"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/529119/sclerenchyma
          </a>
        </li>
        <li>
          <a
            href="http://hyperphysics.phy-astr.gsu.edu/hbase/biology/nervecell.html"
            target="_blank"
          >
            http://hyperphysics.phy-astr.gsu.edu/hbase/biology/nervecell.html
          </a>
        </li>
        <li>
          <a href="http://noelle20050.tripod.com/id29.html" target="_blank">
            http://noelle20050.tripod.com/id29.html
          </a>
        </li>
        <li>
          <a
            href="http://users.rcn.com/jkimball.ma.ultranet/BiologyPages/P/PlantTissues.html"
            target="_blank"
          >
            http://users.rcn.com/jkimball.ma.ultranet/BiologyPages/P/PlantTissues.html
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=otoiSr7lb88" target="_blank">
            //www.youtube.com/watch?v=otoiSr7lb88
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=XoP1diaXVCI" target="_blank">
            //www.youtube.com/watch?v=XoP1diaXVCI
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=1bC0FG6a0W0" target="_blank">
            //www.youtube.com/watch?v=1bC0FG6a0W0
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=H6m9V0QCfVM" target="_blank">
            https://www.youtube.com/watch?v=H6m9V0QCfVM
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Plant and Animal Tissues. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=131&cnt=272
        </Typography>
      </div>
    </div>
  );
}
