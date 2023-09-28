import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, Grid, Button } from '@material-ui/core';
import KenColors from '../../../../utils/themes/KenColors';
import Assignments from '../../../StudentClassroomDetails/components/Assignments/assignments';
import Assessments from '../../../StudentClassroomDetails/components/Assessments/assessments';
import ClassroomDocument from './ClassroomDocument';
import ClassroomLessons from './ClassroomLessons';
import { wrap } from 'lodash';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pl={2} >
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    selected: {
        color: KenColors.primary,
        backgroundColor: 'none',
    },
    indicator: {
        boxShadow: 'none',
        backgroundColor: 'none',
    },
    container: {
        display: 'flex',
        maxWidth: '50vw',
    },
    detailsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        textTransform: 'none',
        padding: 0,
        color: theme.palette.KenColors.primary,

    },
    firstName: {
        background: "#EAE6FF",
        color: "#00218D",
        padding: 4,
        marginTop: 10,
        borderRadius: 3
    },
    lastName: {
        background: "#E6FCFF",
        color: "#008DA6",
        padding: 4,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 3

    },
    eventContent: {
        borderLeft: "4px solid #CEE75C",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#F4F6FC",
        padding: 5,
        flexWrap: "wrap",
        height:40,
        marginTop: 10

    },
    eventTime: {
        fontSize: 12,
        marginLeft: 24
    }
}));

export default function SubjectDetails() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const docData = [
        {
            title: "Event Management by Swara Lois"
        },
        {
            title: "Attendence Sheet by Ramkumar Dev"
        },
        {
            title: "Learning vocabulary by Steve smith"
        },
        {
            title: "Advanced Grammer by Jodhimani"
        },
        {
            title: "Types of Tense's by Swara Lois"
        },
        {
            title: "Active and Passive voice by Jodhimani"
        }
    ]


    const lessonData = [
        {
            title: 'Computing prime numbers in the area',
            price: '₹ 230'
        },
        {
            title: "Types of Tense's",
            price: '₹ 480'

        },
        {
            title: 'Advanced Grammer by Jodhimani',
            price: '₹ 330'

        },
        {
            title: 'Event management skills',
            price: '₹ 260'

        },
        {
            title: 'Active and Passive voice',
            price: '₹ 230'

        },
        {
            title: 'Learning vocabulary by Steve smith',
            price: '₹ 500'

        }
    ]
    return (
        <Grid className={classes.root}>
            <Grid item cotainer className={classes.detailsContainer}>
                <Grid item container direction="row" justify='space-between'>
                    <div>
                        <Typography variant='body2'>FACULTY</Typography>
                        <div style={{ display: 'flex' }}>
                            <Typography variant='body2' className={classes.firstName} >Prof. S Badrinath</Typography>
                            <Typography variant='body2' className={classes.lastName}>Prof. PK Sharma</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography variant='body2' className={classes.eventContent}>Next: Rapid Reader
                         <Typography className={classes.eventTime}>10:00 am to 11:00 am</Typography>
                         {/* <Button className={classes.button} variant="outlined">
                            start
                        </Button> */}
                        </Typography>
                        
                    </div>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <Grid item className={classes.container}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{ indicator: classes.indicator }}
                >
                    <Tab classes={{ selected: classes.selected }} label="Assignments (7)" {...a11yProps(0)} />
                    <Tab classes={{ selected: classes.selected }} label="Assessments (5)" {...a11yProps(1)} />
                    <Tab classes={{ selected: classes.selected }} label="Documents (5)" {...a11yProps(2)} />
                    <Tab classes={{ selected: classes.selected }} label="Lessons (10)" {...a11yProps(3)} />
                </Tabs>


            </Grid>
            <Grid item >
                <TabPanel value={value} index={0} >
                    <Box mt={2}>
                        <Assignments />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box mt={2}>
                        <Assessments />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ClassroomDocument data={docData} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ClassroomLessons data={lessonData} />
                </TabPanel>
            </Grid>

        </Grid >
    );
}
