import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import KenCard from '../../../../../../../../global_components/KenCard/index';
import Theory from './ohmsLaw_theory';
import Procedure from './ohmsLaw_procedure';
import Animation from './ohmsLaw_animation';
import Simulator from './ohmsLaw_simulator';
import Video from './ohmsLaw_video';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ minHeight: '76vh' }}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  mainGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 9px #d6e0ff',
    background: '#fff',
    marginTop: 10,
    borderRadius: 3,
    padding: '20px !important',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  subName: {
    color: '#FF8B00',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  tabs: {
    // borderRight: `1px solid`,
    // color: KenColors.primary,
  },
  selected: {
    color: '#00218D',
    // boxShadow: 'inset 3px 0px 0px #00218D',
    backgroundColor: 'none',
    // marginTop: '10px !important',
    borderTop: 'none',
    borderTopRightRadius: 'unset',
    borderBottom: 'none',
  },
  indicator: {
    boxShadow: 'none',
    backgroundColor: 'none',
    borderTopRightRadius: '25%',
  },
  tabView: {
    border: '1px solid #e6dfdf',
  },
  TabPanel: {
    background: 'white',
  },
}));

export default function OhmsLaw() {
  const classes = useStyles();
  const [value, setValue, age] = React.useState(0);

  const array = [
    {
      title: 'Theory',
      titleDetails: [
        {
          id: 'exp_12_phy_01',
          content: <Theory />,
        },
      ],
    },
  ];

  const data = [
    {
      title: 'Theory',
    },
    {
      title: 'Procedure',
    },
    {
      title: 'Animation',
    },
    {
      title: 'Simulator',
    },
    {
      title: 'Video',
    },
    {
      title: 'Resource',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box p={2}>
      <Grid className={classes.mainGrid} container>
        <KenCard className={classes.subCard}>
          <Typography className={classes.subName}>
            Ohm's law and resistance
          </Typography>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            scrollButtons="off"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            classes={{ indicator: classes.indicator }}
          >
            {data.map((el, index) => {
              return (
                <Tab
                  classes={{ wrapper: classes.wrapper }}
                  label={el.title}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <Theory />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Procedure />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Animation />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Simulator />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Video />
            </TabPanel>
          </SwipeableViews>
        </KenCard>
      </Grid>
    </Box>
  );
}
