import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Tab,
  Tabs,
} from '@material-ui/core';
import KenCard from '../../../../../../global_components/KenCard/index';
//images
import Prepositions from '../../../../../../assets/Images/Subjects/English/Learning-Prepositions-of-Location.jpg';
import Correction from '../../../../../../assets/Images/Subjects/English/Correction-and-Omission-Activity.jpg';
import PrepPicture from '../../../../../../assets/Images/Subjects/English/preppicture.jpg';
import PrepDirection from '../../../../../../assets/Images/Subjects/English/prepdirection.jpg';
import ActiveToPassive from '../../../../../../assets/Images/Subjects/English/Active-to-Passive-Voice-Conversion.jpg';
import PassiveToActive from '../../../../../../assets/Images/Subjects/English/Passive-to-Active-Voice-Conversion.jpg';
import Tense from '../../../../../../assets/Images/Subjects/English/tense.jpg';
import Comprehension from '../../../../../../assets/Images/Subjects/English/Improving-Comprehension-Skills.jpg';
import Direct from '../../../../../../assets/Images/Subjects/English/Direct-to-Indirect-Speech.jpg';
import Reported from '../../../../../../assets/Images/Subjects/English/Reported-Speech.jpg';
import SubVerb from '../../../../../../assets/Images/Subjects/English/subverb.jpg';
import SinPlu from '../../../../../../assets/Images/Subjects/English/sinplu.jpg';

import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import history from '../../../../../../utils/history';

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
    // justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 9px #d6e0ff',
    background: '#fff',
    marginTop: 10,
    borderRadius: 3,
    // padding: '20px !important',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  subCard: {
    width: '100% !important',
  },
  classHead: {
    marginBottom: 10,
    borderBottom: '1px solid #F4F5F7',
  },
  cardDetails: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: 10,
    // minWidth: '440px'
    marginBottom: 10,
  },
  // cardWrap: {
  //   '&:first-child': {
  //     paddingRight: '52px',
  //   },
  // },
  labelWrap: {
    fontSize: 14,
    color: '#00218D',
    fontWeight: '500',
    margin: 8,
    width: '80%',
  },
  subName: {
    color: '#FF8B00',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  classImg: {
    width: '120px',
    border: '3px solid #DDD',
    margin: 8,
    maxWidth: '100%',
  },
}));

const array = [
  {
    ClassName: 'Prepositions',
    classDetails: [
      {
        subId: 'pre_01',
        subject: 'English',
        classImage: Prepositions,
        Label: 'Learning Prepositions of Location',
      },
      {
        subId: 'pre_02',
        subject: 'English',
        classImage: Correction,
        Label: 'Correction and Omission Activity',
      },
      {
        subId: 'pre_03',
        subject: 'English',
        classImage: PrepPicture,
        Label: 'Learning Prepositions of Location (Picture Dictation)',
      },
      {
        subId: 'pre_04',
        subject: 'English',
        classImage: PrepDirection,
        Label: 'Learning Preposition of direction',
      },
    ],
  },
  {
    ClassName: 'Active and Passive Voice',
    classDetails: [
      {
        subId: 'active_01',
        subject: 'English',
        classImage: ActiveToPassive,
        Label: 'Passive to Active Voice Conversion',
      },
      {
        subId: 'active_02',
        subject: 'English',
        classImage: PassiveToActive,
        Label: 'Active to Passive Voice Conversion',
      },
    ],
  },
  {
    ClassName: 'Tenses',
    classDetails: [
      {
        subId: 'tense_01',
        subject: 'English',
        classImage: Tense,
        Label: 'Tense Conversion',
      },
    ],
  },
  {
    ClassName: 'Comprehension',
    classDetails: [
      {
        subId: 'comp_01',
        subject: 'English',
        classImage: Comprehension,
        Label: 'Improving Comprehension Skills',
      },
    ],
  },
  {
    ClassName: 'Direct and Indirect Speech',
    classDetails: [
      {
        subId: 'direct_01',
        subject: 'English',
        classImage: Direct,
        Label: 'Direct to Indirect Speech',
      },
      {
        subId: 'direct_02',
        subject: 'English',
        classImage: Reported,
        Label: 'Reported Speech',
      },
    ],
  },
  {
    ClassName: 'Subject-Verb Agreement',
    classDetails: [
      {
        subId: 'subverb_01',
        subject: 'English',
        classImage: SubVerb,
        Label: 'Subject-Verb Agreement',
      },
    ],
  },
  {
    ClassName: 'Singular And Plural',
    classDetails: [
      {
        subId: 'sinplu_01',
        subject: 'English',
        classImage: SinPlu,
        Label: 'Singular to Plural Conversion',
      },
    ],
  },
];

export default function EnglishClass(props) {
  const classes = useStyles();
  const { sub } = props.match.params;
  const { history } = props;
  const { drawerChanges } = props;

  const [value, setValue, age] = React.useState(0);

  const data = [
    {
      title: 'Prepositions',
    },
    {
      title: 'Active and Passive Voice',
    },
    {
      title: 'Tenses',
    },
    {
      title: 'Comprehension',
    },
    {
      title: 'Direct and Indirect Speech',
    },
    {
      title: 'Subject-Verb Agreement',
    },
    {
      title: 'Singular And Plural',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
    console.log(index, 'index');
  };

  React.useEffect(() => {
    drawerChanges('show');
  }, []);

  return (
    <Box p={2}>
      <Grid className={classes.mainGrid} container spacing={3}>
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
            {array &&
              array.map(item =>
                item.ClassName == 'Prepositions' ? (
                  <Grid item>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <>
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${el.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={el.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {el.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </>
                        ) : (
                          // <div>no data</div>
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {array &&
              array.map(item =>
                item.ClassName == 'Active and Passive Voice' ? (
                  <Grid item>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <Link
                            className={classes.link}
                            to={`/subjectContent/${el.subId}`}
                          >
                            <Grid className={classes.cardWrap}>
                              <img
                                src={el.classImage}
                                className={classes.classImg}
                              />
                              <h2 className={classes.labelWrap}>{el.Label}</h2>
                            </Grid>
                          </Link>
                        ) : (
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>

          <TabPanel value={value} index={2}>
            {array &&
              array.map(item =>
                item.ClassName == 'Tenses' ? (
                  <Grid item>
                    <Grid
                      className={classes.cardDetails}
                      container
                      sm={12}
                      xs={12}
                    >
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <Link
                            className={classes.link}
                            to={`/subjectContent/${el.subId}`}
                          >
                            <Grid className={classes.cardWrap}>
                              <img
                                src={el.classImage}
                                className={classes.classImg}
                              />
                              <h2 className={classes.labelWrap}>{el.Label}</h2>
                            </Grid>
                          </Link>
                        ) : (
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {array &&
              array.map(item =>
                item.ClassName == 'Comprehension' ? (
                  <Grid item>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <Link
                            className={classes.link}
                            to={`/subjectContent/${el.subId}`}
                          >
                            <Grid className={classes.cardWrap}>
                              <img
                                src={el.classImage}
                                className={classes.classImg}
                              />
                              <h2 className={classes.labelWrap}>{el.Label}</h2>
                            </Grid>
                          </Link>
                        ) : (
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {array &&
              array.map(item =>
                item.ClassName == 'Direct and Indirect Speech' ? (
                  <Grid item>
                    <Grid
                      className={classes.cardDetails}
                      container
                      sm={12}
                      xs={12}
                    >
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <Link
                            className={classes.link}
                            to={`/subjectContent/${el.subId}`}
                          >
                            <Grid className={classes.cardWrap}>
                              <img
                                src={el.classImage}
                                className={classes.classImg}
                              />
                              <h2 className={classes.labelWrap}>{el.Label}</h2>
                            </Grid>
                          </Link>
                        ) : (
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {array &&
              array.map(item =>
                item.ClassName == 'Subject-Verb Agreement' ? (
                  <Grid item>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <>
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${el.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={el.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {el.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </>
                        ) : (
                          // <div>no data</div>
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
          <TabPanel value={value} index={6}>
            {array &&
              array.map(item =>
                item.ClassName == 'Singular And Plural' ? (
                  <Grid item>
                    <Grid className={classes.cardDetails} sm={12} xs={12}>
                      {item.classDetails.map((el, index) =>
                        el.subject == sub ? (
                          <>
                            <Link
                              className={classes.link}
                              to={`/subjectContent/${el.subId}`}
                            >
                              <Grid className={classes.cardWrap}>
                                <img
                                  src={el.classImage}
                                  className={classes.classImg}
                                />
                                <h2 className={classes.labelWrap}>
                                  {el.Label}
                                </h2>
                              </Grid>
                            </Link>
                          </>
                        ) : (
                          // <div>no data</div>
                          ''
                        )
                      )}
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )
              )}
          </TabPanel>
        </SwipeableViews>
        {/* </KenCard> */}
      </Grid>
      {/* </Link> */}
    </Box>
  );
}
