import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ContentCreationCard from './ContentCreation';
import Awards from './Awards';
import PublicationCard from '../../../../components/CardWidgets/PublicationCard';
import TargetIcon from '../../../../assets/icons/Target.svg';
import PublicationIcon from '../../../../assets/icons/Publication.svg';
import AwardsIcon from '../../../../assets/icons/StarOutline.svg';
import AffiliationIcon from '../../../../assets/icons/Affiliation.svg';
import EducationIcon from '../../../../assets/icons/Education.svg';
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
    },
    Heading:{
        color:theme.palette.KenColors.neutral100,
        fontSize:14,
        fontWeight:600,
    },
    desc:{
        fontSize:12,
        color:theme.palette.KenColors.neutral400,
        marginTop:16,
    },
    Interest:{
        display:"flex",
        flexDirection:"column",
        fontSize:10,
    },
    Degree:{
        color:theme.palette.KenColors.neutral900,
        fontSize:14,
    },
    University:{
        color:theme.palette.KenColors.neutral100,
        fontSize:14,
    }
}));

export default function FullWidthTabs(props) {
    const {t} = useTranslation();
    const { facultyDet } = props;
    const data = [
        {
            title: "Biography",
            img:TargetIcon,
        },
        {
            title: "Education",
            img:EducationIcon,
        },
        {
            title: "Publications",
            img:PublicationIcon,
        },
        {
            title: "Awards",
            img:AwardsIcon,
        },
        {
            title: "Affiliations",
            img:AffiliationIcon,
        },

    ]
    const datapage1 = [
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
        {
            title: "Pretest: General Principles and Processes of Isolation of Elements",
            date: "21/06/20"
        },
    ]
    const interest = [
        {int:"International Relations",background:"#EAE6FF",color:'#403294'},
        {int:"Foreign Language",background:"#DEEBFF",color:'#0747A6'},
        {int:"Policy maKing",background:"#E6FCFF",color:'#008DA6'}
    ];

    const Education = [
        {Degree:"Ph.D, in Finance & Accounting",University:"Standford University"},
        {Degree:"PGDM, Finance ",University:"IIM-Bangalore"},
        {Degree:"MSc, Forensic Studies",University:"King’s University"},
        {Degree:"BSc, Forensic Studies",University:"Loyola College"},
    ];   
    
    const Publication = [
        {data:"Derwing, T. M., Rossiter, M. J., & Munro, M. J. (2002). Teaching native speakers to listen to foreign-accented speech. Journal of Multilingual and Multicultural Development, 23(4), 245-259."},
        {data:"Derwing, T. M., Rossiter, M. J., & Munro, M. J. (2002). Teaching native speakers to listen to foreign-accented speech. Journal of Multilingual and Multicultural Development, 23(4), 245-259."},
        {data:"Derwing, T. M., Rossiter, M. J., & Munro, M. J. (2002). Teaching native speakers to listen to foreign-accented speech. Journal of Multilingual and Multicultural Development, 23(4), 245-259."},
        {data:"Derwing, T. M., Rossiter, M. J., & Munro, M. J. (2002). Teaching native speakers to listen to foreign-accented speech. Journal of Multilingual and Multicultural Development, 23(4), 245-259."},
    ];

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
                            return <Tab icon={<img className={classes.image} src={el.img}></img>} classes={{ wrapper: classes.wrapper }} label={el.title} {...a11yProps(index)} />
                        })}


                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Grid container >
                                <Box>
                                    <Typography className={classes.Heading}>
                                        {t("About")}
                                    </Typography>
                                    <Typography className={classes.desc}>
                                        {facultyDet.about1}
                                    </Typography>
                                    <Typography  className={classes.desc}>
                                        {facultyDet.about}
                                    </Typography>
                                </Box>
                                <Box mt={6}>
                                    <Typography className={classes.Heading}>
                                        {t("INTERESTS")}
                                    </Typography>
                                    <Typography className={classes.Interest}>
                                        {
                                            interest && interest.map(ele=>(
                                                <span style={{borderRadius:"3px",marginTop:"5px",padding:"5px",background:`${ele.background}`,color:`${ele.color}`}}>
                                                    {ele.int}
                                                </span>
                                            ))
                                        }
                                    </Typography>
                                </Box>

                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Box>
                                {
                                    Education && Education.map(item=>(
                                        <Box mb={5}>
                                            <Typography className={classes.Degree}>{item.Degree}</Typography>
                                            <Typography className={classes.University}>{item.University}</Typography>
                                        </Box>
                                    ))
                                }               
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Grid container spacing={2}>
                                {
                                    Publication && Publication.map(item=>(
                                        <Grid item xs={12} sm={6} md={6}><PublicationCard data={item} /></Grid>
                                    ))
                                }
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <Awards awards={facultyDet.awards} />
                           
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                           <Typography>{t("Coming_soon")}......</Typography>
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}
