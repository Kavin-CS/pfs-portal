import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContentCreationCard from './ContentCreation';
import AssignmentIcon from '../../../../assets/icons/clipboard.svg';
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
                <Box p={3}>
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginTop: 5,
        marginRight: 8,
    }
}));

export default function FullWidthTabs() {
    const {t} = useTranslation();
    const data = [
        {
            title: `${t("headings:Assignment")} (5)`,
        },
        {
            title: `${t("headings:Assesments")} (4)`,
        },
        {
            title: `${t("Lesson")} (10)`,
        },
        {
            title: `${t('Notes')} (0)`,
        },
    ]
    const datapage1 = [
        {
            title: "Pretest: Learning grammer",
            date: "21/06/19"
        },
        {
            title: "Pretest: Create a conversation between shopkeeper and customer",
            date: "21/08/19"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "17/10/19"
        },
        {
            title: "Pretest: Submission of unit testing",
            date: "25/12/19"
        },
        {
            title: "Pretest: Learn about problem solving skills",
            date: "12/01/20"
        },
        {
            title: "Pretest: Learn about quiz skills",
            date: "18/02/20"
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
            <Grid container direction="row" justify="space-between">
                <Grid item>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="off"
                        aria-label="full width tabs example"
                    >
                        {data.map((el, index) => {
                            return <Tab icon={<img className={classes.image} src={AssignmentIcon}></img>} classes={{ wrapper: classes.wrapper }} label={el.title} {...a11yProps(index)} />
                        })}


                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Grid container direction="row" >
                                {datapage1.map((el) => { return (<ContentCreationCard data={el} />) })}

                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            {t("Coming_soon")} ...
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            {t("Coming_soon")} ...
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            {t("Coming_soon")} ...
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}
