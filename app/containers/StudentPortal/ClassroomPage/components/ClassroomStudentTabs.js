import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, Grid } from '@material-ui/core';
import KenColors from '../../../../utils/themes/KenColors';
import SubjectDetails from './SubjectDetails';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from "../../../../components/Inputs/Select"


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
                <Box pl={2}>
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
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        // color: KenColors.primary,
    },
    selected: {
        color: KenColors.primary,
        // boxShadow: 'inset 3px 0px 0px #00218D',
        backgroundColor: 'none',
    },
    indicator: {
        boxShadow: 'none',
        backgroundColor: 'none',
    },
    container: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    container: {
        display: "flex",
        minHeight: '80vh',
        [theme.breakpoints.only('xs')]: {
            display: 'none',
        },
    },
    // container: {
    //     [theme.breakpoints.only('cd')]: {
    //         flexDirection: 'column',
    //     },
    // },


    dropdownContent: {
        display: "flex",
        background: "#FAFBFC",
        border: "1px solid #DFE1E6",
        marginLeft: "4%",
        width: "96%",
        borderRadius: 3,
        marginBottom: 10
    }
}));

 

export default function ClassroomStudentTabs(props) {
    const { dropdownValue } = props
    const classes = useStyles();
    const [value, setValue, age] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.container}>
                <Paper>
                    <Box component="div" display={{ xs: 'none', sm: 'block', md: 'none', lg: 'block' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            scrollButtons="off"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            classes={{ indicator: classes.indicator }}
                        >
                            <Tab classes={{ selected: classes.selected, indicator: classes.indicator }} label="ENGLISH" {...a11yProps(0)} />
                            <Tab classes={{ selected: classes.selected }} label="BIOLOGY" {...a11yProps(1)} />
                            <Tab classes={{ selected: classes.selected }} label="PHYSICS" {...a11yProps(2)} />
                            <Tab classes={{ selected: classes.selected }} label="CHEMISTRY" {...a11yProps(3)} />
                            <Tab classes={{ selected: classes.selected }} label="MATHS" {...a11yProps(4)} />
                            <Tab classes={{ selected: classes.selected }} label="COMPUTER" {...a11yProps(5)} />
                        </Tabs>


                    </Box>

                </Paper>


            </Grid>
            <Box component="div" display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }}>
                <FormControl className={classes.dropdownContent}>
                    <Select options={dropdownValue} className={classes.selectValue}>
                    </Select>
                </FormControl>
            </Box>
            <Grid item style={{ flex: 1 }}>
                <TabPanel value={value} index={0}>
                    <Paper style={{ padding: '16px' }}>
                        <SubjectDetails />
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Coming soon ...
      </TabPanel>
                <TabPanel value={value} index={2}>
                    Coming soon ...
      </TabPanel>
                <TabPanel value={value} index={3}>
                    Coming soon ...
      </TabPanel>
                <TabPanel value={value} index={4}>
                    Coming soon ...
      </TabPanel>
                <TabPanel value={value} index={5}>
                    Coming soon ...
      </TabPanel>
            </Grid>

        </Grid>
    );
}
