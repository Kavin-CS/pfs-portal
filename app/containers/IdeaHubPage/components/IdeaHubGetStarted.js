import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GetStartedArticles from './GetStartedCard';
import HowTo from './HowTo/HowTo';
import Webinar from './Webinar/Webinar';
import {useTranslation} from 'react-i18next';

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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    wrapper: {
        fontSize: '10px',
        lineHeight: '14px',
        textTransform: 'none',
        padding: 0,
    },
    root2: {
        minWidth: '100px',
        height: '10px',
    },
    title: {
        margin: '16px 0px 8px 16px', 
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        textTransform: 'uppercase',
        color: theme.palette.KenColors.neutral100,
    },
}));

export default function FullWidthTabs(props) {
   const {t} = useTranslation();
    const data = [
        {
            title: t("Articles"),
        },
        {
            title: t("How_To"),
        },
        {
            title: t("Webinars"),
        },
    ]
    
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="space-between">
                <Typography className={classes.title}>{t("headings:Get_Started")}</Typography>
                <Grid item >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="off"
                        aria-label="full width tabs example"
                        style={{width: '100%'}}
                        // className={classes.tabs}
                    >
                        {data.map((el, index) => {
                            return <Tab classes={{ wrapper: classes.wrapper, root: classes.root2 }} label={el.title} {...a11yProps(index)} />
                        })}


                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <GetStartedArticles />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <HowTo />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Webinar />
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div >
    );
}
