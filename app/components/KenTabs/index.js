import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { getFirstLetterInUpperCase } from '../../utils/helpers/stringHelpers';
import { Typography } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.KenColors.kenWhite,
  },
  appBar: {
    borderBottom: `0.5px solid ${theme.palette.KenColors.gradeSectionBorder}`,
  },
}));

export default function KenTabs(props) {
  const {
    data,
    onTabChange,
    tabValue = 0,
    tabPanelProps,
    dataPlaceHolder,
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(tabValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange && onTabChange(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          {data &&
            data.map((el, index) => {
              return (
                <Tab
                  label={
                    el?.titleCase?.toLowerCase() === 'titlecase'
                      ? getFirstLetterInUpperCase(el.title)
                      : el.title
                  }
                  {...a11yProps(index)}
                  disabled={el.disabled}
                  style={{
                    textTransform:
                      el?.titleCase?.toLowerCase() === 'titlecase'
                        ? 'none'
                        : 'uppercase',
                  }}
                />
              );
            })}
        </Tabs>
      </AppBar>
      {data &&
        data.map((el, index) => {
          return (
            <TabPanel value={value} index={index} {...tabPanelProps}>
              {el.content}
            </TabPanel>
          );
        })}
      {dataPlaceHolder && <Typography>{dataPlaceHolder}</Typography>}
    </div>
  );
}
