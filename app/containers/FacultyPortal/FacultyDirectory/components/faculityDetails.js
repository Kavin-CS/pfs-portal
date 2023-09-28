import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Grid, Avatar, Typography, Icon } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import PhoneIcon from '../../../../assets/icons/phone.svg';
import MailIcon from '../../../../assets/icons/Mail.svg';
import PublIcon from '../../../../assets/icons/Publication-green.svg';
import AwardIcon from '../../../../assets/icons/StarOutline-orange.svg';
import AffilicationIcon from '../../../../assets/icons/award-orange.svg';
import Tabs from './Tabs';
import AwardIcon2 from '../../../../assets/Badge/Target.svg';
import AwardIcon3 from '../../../../assets/Badge/Affiliation.svg';
import BreadCurmb from '../../../../components/BreadCrumb/BreadCrumb';
import { useTranslation } from 'react-i18next';
import Routes from '../../../../utils/routes.json';

const useStyles = makeStyles(theme => ({
  facultyDetails: {
    minHeight: '82vh',
    padding: '24px',
    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  avatar: {
    height: 72,
    width: 72,
  },
  namesWrap: {
    paddingLeft: 16,
  },
  name: {
    color: theme.palette.KenColors.neutral700,
    marginBottom: 8,
    fontWeight: '600',
  },
  contactTxt: {
    color: theme.palette.KenColors.neutral400,
    marginBottom: 9,
    marginTop: 7,
  },
  icon: {
    height: 16,
  },
  contactDetWrap: {
    marginBottom: 7,
  },
  contactDet: {
    paddingLeft: 16,
  },
  kpiTxt: {
    fontSize: 28,
    fontWeight: 600,
  },
  PubCount: {
    color: theme.palette.KenColors.tertiaryTeal200,
  },
  AwardCount: {
    color: theme.palette.KenColors.tertiaryYellow300,
  },
  AffiliationCount: {
    color: theme.palette.KenColors.secondaryPeach1,
  },
  facultyContent: {
    padding: 10,
  },
  Link: {
    textDecoration: 'none',
    color: theme.palette.KenColors.primary,
  },
}));

const facultyDet = {
  name: 'S.Pranchal Kumar',
  position: 'Sr. Professor (Resident)',
  dep: 'Department of computer science',
  phone: '+91 9878546724',
  email: 'pranchal@gmail.com',
  publicationsCount: 13,
  awardsCount: 12,
  affiliationCount: 13,
  about1:
    'Professor Pranchal Kumar is currently a Visiting Faculty, Canara Bank Chair in Banking & Finance and Chair of the Centre for Capital Markets and Risk Management at IIMB',

  about:
    'He has held tenured professorship at Purdue University, Rutgers University and San Diego State University. He has served as the faculty advisor to the Aztec Equity Fund and has received college and university-wide teaching awards.He has held tenured professorship at Purdue University, Rutgers University and San Diego State University',
  interests: ['International Relations', 'Foreign Language', 'Policy Making'],
  awards: [
    {
      icon: AwardIcon,
      name: 'Best Teacher 2018-2019',
      date: 'Jun 2020',
    },
    {
      icon: AwardIcon2,
      name: 'Best Teacher 2018-2019',
      date: 'Jun 2020',
    },
    {
      icon: AwardIcon3,
      name: 'Top Teacher 2000-2001',
      date: 'Jun 2002',
    },
    {
      icon: AwardIcon,
      name: 'Top Teacher 2000-2001',
      date: 'Jun 2002',
    },
  ],
};

function FacultyDetails(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { drawerChanges } = props;
  const arrayBreadCrumb = [
    { head: 'Home', url: `/${Routes.home}` },
    { head: 'FacultyDirectory', url: `/${Routes.facultyDirectory}` },
    { head: 'FacultyDetails', url: `/${Routes.facultyDetails}`, color: 'grey' },
  ];
  function handleClick(event) {
    event.preventDefault();
    props.history.push(event.target.name);
  }

  React.useEffect(() => {
    drawerChanges('hide');
  }, []);

  return (
    <Box>
      <Box pt={1} pb={1}>
        <BreadCurmb array={arrayBreadCrumb} handleClick={handleClick} />
      </Box>
      <Card className={classes.facultyDetails}>
        <Box className={classes.facultyContent}>
          <Grid container>
            <Grid item container xs={12} md={6} lg={3}>
              <Grid item>
                <Avatar
                  className={classes.avatar}
                  alt="User-image"
                  src={ProfileImage}
                />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.namesWrap}
                >
                  <Typography variant="body1" className={classes.name}>
                    {facultyDet.name}
                  </Typography>
                  <Typography variant="body2" style={{ marginBottom: 3 }}>
                    {facultyDet.position}
                  </Typography>
                  <Typography variant="body2">
                    <Link className={classes.Link}>{facultyDet.dep}</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="subtitle2" className={classes.contactTxt}>
                {t('Contact')}
              </Typography>
              <Grid container className={classes.contactDetWrap}>
                <img src={PhoneIcon} className={classes.icon} />
                <Typography
                  variant="body2"
                  color="primary"
                  className={classes.contactDet}
                >
                  {facultyDet.phone}
                </Typography>
              </Grid>
              <Grid container className={classes.contactDetWrap}>
                <img src={MailIcon} className={classes.icon} />
                <Typography
                  variant="body2"
                  color="primary"
                  className={classes.contactDet}
                >
                  {facultyDet.email}
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={12} md={6} spacing={3}>
              <Grid item>
                <Typography className={classes.kpiTxt}>
                  <img src={PublIcon} />{' '}
                  <span className={classes.PubCount}>
                    {facultyDet.publicationsCount}
                  </span>
                </Typography>
                <Typography variant="body2">
                  {t('headings:Publications')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.kpiTxt}>
                  <img src={AwardIcon} />{' '}
                  <span className={classes.AwardCount}>
                    {facultyDet.awardsCount}
                  </span>
                </Typography>
                <Typography variant="body2">{t('headings:Awards')}</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.kpiTxt}>
                  <img src={AffilicationIcon} />

                  <span className={classes.AffiliationCount}>
                    {facultyDet.affiliationCount}
                  </span>
                </Typography>
                <Typography variant="body2">
                  {t('headings:Affiliation')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Tabs facultyDet={facultyDet} />
        </Box>
      </Card>
    </Box>
  );
}

export default withRouter(FacultyDetails);
