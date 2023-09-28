import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ParentServiceCard from '../../../components/CardWidgets/Service';
import {useTranslation} from 'react-i18next';

const array = [{
    Heading: "Literature Club",
    Description: "The Literary Club is a place where students can meet to read and write.It is based upon using the creativity skills it takes to be a writer. Club members meet to discuss books and the craft of writing.",
}, {
    Heading: "Quiz Club",
    Description: "Quiz Club offers a unique and exciting way to motivate, inspire, encourage and reward children in their quest for knowledge and provide them with the opportunity to celebrate their achievement as part of a high profile, national competition.",
}, {
    Heading: "Finance Club",
    Description: "The Finance Society at FMS has been organizing various events like round table discussions by luminaries from the finance ministry, workshops by reputed global business information providers like Dun and Bradstree,Finance Quizzes.",

}, {
    Heading: "Sports Club",
    Description: "Larger sports clubs are characterized by having professional and amateur departments in various sports such as bike polo, football, basketball, futsal, cricket, volleyball.",

}, {
    Heading: "Debate Club",
    Description: "A debate club gives students of all abilities a fun way of developing their oracy skills. You can use different activities to help students with their critical thinking and confident communication.",

}];



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
    const {t} = useTranslation()
    const data = [
        {
            title: t("Headings:Health"),
        },
        {
            title: t('Sports'),
        },
        {
            title: t('Gallery'),
        },
        {
            title: t("Clubs"),
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
                            return <Tab label={el.title} {...a11yProps(index)} />
                        })}


                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        {/* <TabPanel value={value} index={0} dir={theme.direction}>
                            {/* <Grid container direction="row" >
                                {datapage1.map((el) => { return (<ContentCreationCard data={el} />) })}

                            </Grid> */}
                        {/* </TabPanel>  */}
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            Coming soon ...
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Coming soon ...
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Coming soon ...
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>

                            <Grid container spacing={3}>

                                {
                                    array && array.map(item => (
                                        <Grid item xs={12} sm={6} md={4}><ParentServiceCard data={item} dimensions={{ minHeight: "100px" }} /></Grid>
                                    ))
                                }
                            </Grid>

                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            Coming soon ...
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}
