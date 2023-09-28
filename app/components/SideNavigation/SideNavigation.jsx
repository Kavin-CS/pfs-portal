import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { Link, NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {
  getUserDetails,
  getParentDetails,
} from '../../utils/helpers/storageHelper';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import history from '../../utils/history';
import { useTranslation } from 'react-i18next';
import ken42Logo from '../../assets/Ken42logo.png';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import configContext from '../../utils/helpers/configHelper';
import {
  KEY_USER_TYPE,
  KEY_PORTAL_TYPE,
  KEY_FIRE_REG_TOKEN,
  KEY_PARENT_DETAILS,
  KEY_USER_DETAILS,
} from '../../utils/constants';
import Routes from '../../utils/routes.json';
import { unsubscribeMessage } from '../../utils/MessageHelper';
import { getMarketplaceURL } from '../../utils/ApiService';
import context from '../../utils/helpers/context';
import ProtectedComponent from '../../utils/rbac/ProtectedComponent';
import IconButton from '@material-ui/core/IconButton';

//icons
import Home from '@material-ui/icons/Home';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined'; // classroom
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'; // event
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined'; //time table
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined'; // course , report card
import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined'; //essentials
import EventOutlinedIcon from '@material-ui/icons/EventOutlined'; // course
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'; // my student
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined'; // market
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined'; // account
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined'; // fee
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // flex: 1,
  },
  root1: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  displayDrawer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 8,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 0, 2),
    padding: theme.spacing(0, 2, 2, 2),
  },
  poweredBy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px 10px',
  },
  logo: {
    maxHeight: 40,
    maxWidth: 40,
  },
  title: {
    fontSize: '10px',
    margin: theme.spacing(0, 2),
    color: theme.palette.KenColors.kenWhite,
    textAlign: 'end',
  },
  resources: {
    // margin: theme.spacing(0, 2),
    // paddingLeft: '32px',
    // marginLeft: 25,
    padding: 0,
  },
  subLevel: {
    // marginLeft: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    color: theme.palette.KenColors.kenWhite,
    height: 'auto',
    // '&:hover': {
    //   color: 'white',
    // },
  },
  link: {
    textDecoration: 'none',
    color:
      theme.palette.KenColors.sideNavColor || theme.palette.KenColors.primary,
  },
  userName: {
    marginTop: 20,
    fontSize: 20,
    color: theme.palette.KenColors.kenWhite,
  },
  studentClassItem: {
    marginTop: 20,
    fontSize: 14,
    color: theme.palette.KenColors.kenWhite,
  },
  heading: {
    marginLeft: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.KenColors.kenWhite,
  },
  subHeading: {
    marginLeft: 32,
    fontSize: '0.875rem',
    color: theme.palette.KenColors.kenWhite,
  },
  contentDisabled: {
    // cursor: "not-allowed",
    textDecoration: 'none',
    pointerEvents: 'none',
  },
  menuIcon: {
    color: theme.palette.KenColors.kenWhite,
  },
  subListItem: {
    padding: '6px 36px',
    marginLeft: 4,
    '&:hover': {
      backgroundColor: theme.palette.KenColors.sideNavItemHoverBackground,
      '& $subLevel': {
        color: theme.palette.KenColors.sideNavItemHoverColor,
      },
      '& $heading': {
        color: theme.palette.KenColors.sideNavItemHoverColor,
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'turquoise',
      color: 'white',
      fontWeight: 600,
    },
  },
  listItem: {
    padding: '12px 20px',
    // marginLeft: 4,
    '&:hover': {
      backgroundColor: theme.palette.KenColors.sideNavItemHoverBackground,
      '& $subLevel': {
        color: theme.palette.KenColors.sideNavItemHoverColor,
      },
      '& $heading': {
        color: theme.palette.KenColors.sideNavItemHoverColor,
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'turquoise',
      color: 'white',
      fontWeight: 600,
    },
  },
  listItemSubLevel: {
    height: 'auto',
  },
  divider: {
    background: theme.palette.KenColors.background,
    height: 2,
  },
  active: {
    '& $listItem': {
      borderLeft: `4px solid ${theme.palette.KenColors.kenWhite}`,
      marginLeft: 0,
      backgroundColor: theme.palette.KenColors.sideNavItemActiveBackground,
    },

    '& $subListItem': {
      borderLeft: `4px solid ${theme.palette.KenColors.kenWhite}`,
      marginLeft: 0,
      backgroundColor: theme.palette.KenColors.sideNavItemActiveBackground,
    },

    '& $heading': {
      color: theme.palette.KenColors.sideNavItemActiveColor,
    },
    '& $subLevel': {
      color: theme.palette.KenColors.sideNavItemActiveColor,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.KenColors.sideNavItemActiveBackground,
      color: 'white',
      fontWeight: 600,
      '&:hover': {
        backgroundColor: theme.palette.KenColors.sideNavItemActiveBackground,
        // color: 'white',
      },
    },
  },
  FS: {
    color: theme.palette.KenColors.neutral100,
    fontSize: '14px',
    marginLeft: '32px',
  },
  gradeIcon: {
    color: theme.palette.KenColors.neutral100,
  },
  displayPic: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  name: {
    fontSize: '14px',
    color: theme.palette.KenColors.primary,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: theme.palette.KenColors.sideNavBackground,
  },
  drawerOpen: {
    // background: theme.palette.KenColors.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // background: theme.palette.KenColors.primary,
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    [theme.breakpoints.down('xs')]: {
      width: 65,
    },
    [theme.breakpoints.up('xs')]: {
      width: 69,
    },
  },
  closeIcon: {
    color: theme.palette.KenColors.kenWhite,
    marginRight: 10,
    cursor: 'pointer',
  },
}));

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);

export default function SideDrawer(props) {
  const { openDrawer, setOpenDrawer } = props;
  const { config } = useContext(configContext);
  const { handleSnackbarOpen } = useContext(context);
  const theme = useTheme();
  var showDrawer = props.showDrawer;

  const [menuItem, setMenuItem] = React.useState([]);

  // for language translation
  const { t } = useTranslation();
  const appConfig = {
    logo: 'https://inazstgpfs3001.blob.core.windows.net/assets/ken42_logo.png',
    logoAlt: 'logoAlt',
    title: KEY_PORTAL_TYPE.faculty,
    studentTitle: KEY_PORTAL_TYPE.student,
    parentTitle: KEY_PORTAL_TYPE.parent,
  };

  const handleDrawerOpen = () => {
    // setOpen(true);
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const classes = useStyles();
  const [poweredBy] = React.useState(false);
  const [showResources] = React.useState(false);
  //const [toggleClass, setToggleClass] = React.useState(false);

  // const profile = getUserDetails();
  const parentProfile = getParentDetails();

  const [profile, setProfile] = React.useState(getUserDetails());

  const logout = () => {
    unsubscribeMessage(
      config,
      profile,
      parentProfile,
      localStorage.getItem(KEY_FIRE_REG_TOKEN)
    );
    localStorage.clear();
    localStorage.removeItem(KEY_USER_DETAILS);
    history.push('/');
  };

  const getCurrentProfile = () => {
    return profile.Type === KEY_USER_TYPE.parent ? parentProfile : profile;
  };

  const handleMarketPlace = async () => {
    const currentProfile = getCurrentProfile();
    if (currentProfile?.Name && currentProfile?.mail) {
      let firstName = currentProfile.Name.split(' ')[0];
      let params = `email=${currentProfile.mail}&first_name=${firstName}`; //`/${UrlEndPoints.authenticate}?UniqueId=${email}` "email"
      const url = await getMarketplaceURL(params);
      window.open(url, '_blank');
    } else {
      handleSnackbarOpen(KEY_STATUS.warning, t('messages:Marketplace_Error'));
    }
  };

  const getParentName = () => {
    return JSON.parse(localStorage.getItem(KEY_PARENT_DETAILS));
  };

  const faculty = [
    {
      id: 1,
      icon: <Home />,
      label: 'Home',
      link: `/${Routes.home}`,
      callback: '',
    },
    {
      id: 2,
      icon: <ClassOutlinedIcon />,
      label: 'Classroom',
      link: `/${Routes.classroom}`,
      callback: '',
    },
    {
      id: 3,
      icon: <GroupOutlinedIcon />,
      label: 'My Students',
      link: `/${Routes.students}`,
      callback: '',
      feature: 'myStudents',
      action: 'view',
    },
    {
      id: 8,
      icon: <EventNoteOutlinedIcon />,
      label: 'Grades',
      link: `/${Routes.grades}`,
      callback: '',
      feature: 'grades',
      action: 'view',
    },
    {
      id: 4,
      icon: <EventAvailableOutlinedIcon />,
      label: 'Events',
      link: `/${Routes.events}`,
      callback: '',
      feature: 'events',
      action: 'view',
    },
    {
      id: 5,
      icon: <EventOutlinedIcon />,
      label: 'Course Content',
      link: `/${Routes.courseContentCreation}`,
      callback: '',
      feature: 'courseContent',
      action: 'view',
    },
    {
      id: 6,
      icon: <TableChartOutlinedIcon />,
      label: 'Timetable',
      link: `/${Routes.timetable}`,
      callback: '',
      feature: 'timetable',
      action: 'view',
    },
    {
      id: 7,
      icon: <StoreOutlinedIcon />,
      label: 'Market Place',
      // link: 'marketPlace',
      callback: handleMarketPlace,
      feature: 'marketsPlace',
      action: 'view',
    },
  ];

  const student = [
    {
      id: 1,
      icon: <Home />,
      label: 'Home',
      link: `/${Routes.home}`,
      callback: '',
    },
    {
      id: 2,
      icon: <LibraryAddCheckOutlinedIcon />,
      label: 'Essentials',
      callback: '',
      subItem: [
        {
          id: 1,
          label: 'Smart Content',
          link: `/${Routes.smartContent}`,
          callback: '',
          feature: 'smartContent',
          action: 'view',
        },
      ],
    },
    {
      id: 3,
      icon: <EventNoteOutlinedIcon />,
      label: 'Report card',
      link: `/${Routes.reports}`,
      callback: '',
      feature: 'reportsCard',
      action: 'view',
    },
    {
      id: 4,
      icon: <EventAvailableOutlinedIcon />,
      label: 'Events',
      link: `/${Routes.events}`,
      callback: '',
      feature: 'events',
      action: 'view',
    },
    {
      id: 5,
      icon: <EventOutlinedIcon />,
      label: 'Course Content',
      link: `/${Routes.courseContentCreation}`,
      callback: '',
      feature: 'courseContent',
      action: 'view',
    },
    {
      id: 6,
      icon: <TableChartOutlinedIcon />,
      label: 'Timetable',
      link: `/${Routes.timetable}`,
      callback: '',
      feature: 'timetable',
      action: 'view',
    },
    {
      id: 7,
      icon: <StoreOutlinedIcon />,
      label: 'Market Place',
      link: 'marketPlace',
      callback: handleMarketPlace,
      feature: 'marketsPlace',
      action: 'view',
    },
  ];

  const parent = [
    {
      id: 1,
      icon: <Home />,
      label: 'Home',
      link: `/${Routes.home}`,
      callback: '',
    },
    {
      id: 2,
      icon: <AutorenewOutlinedIcon />,
      label: 'Fee Payment',
      link: `/${Routes.feePayment}`,
      callback: '',
    },
    {
      id: 3,
      icon: <EventNoteOutlinedIcon />,
      label: 'Report Card',
      link: `/${Routes.reports}`,
      callback: '',
    },
    {
      id: 4,
      icon: <EventAvailableOutlinedIcon />,
      label: 'Events',
      link: `/${Routes.events}`,
      callback: '',
    },
    {
      id: 5,
      icon: <TableChartOutlinedIcon />,
      label: 'Timetable',
      link: `/${Routes.timetable}`,
      callback: '',
    },
    {
      id: 6,
      icon: <StoreOutlinedIcon />,
      label: 'Store',
      link: 'marketPlace',
      callback: handleMarketPlace,
    },
    {
      id: 7,
      icon: <AccountBalanceOutlinedIcon />,
      label: 'Account Details',
      link: `/${Routes.accountDetail}`,
      callback: '',
    },
  ];

  React.useEffect(() => {
    let profileArr = [];

    switch (profile?.Type?.toLowerCase()) {
      case KEY_USER_TYPE?.faculty?.toLowerCase():
        profileArr = faculty;
        break;
      case KEY_USER_TYPE?.student?.toLowerCase():
        profileArr = student;
        break;

      case KEY_USER_TYPE?.parent?.toLowerCase():
        profileArr = parent;
        break;

      default:
        profileArr = [];
    }

    return setMenuItem(profileArr);
  }, [profile]);

  return (
    <div className={classes.root}>
      <Drawer
        variant={props.variant}
        onClose={() => {
          props.drawerChanges();
        }}
        open={props.openDrawer}
        container={props.container}
        anchor={props.anchor}
        ModalProps={{
          keepMounted: props.ModalProps,
        }}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
      >
        <Box className={classes.root1}>
          <Hidden mdUp>
            <Grid container>
              <Grid item>
                <Box ml={1}>
                  <Avatar alt="">
                    {profile.Type === KEY_USER_TYPE.parent
                      ? getParentName()?.Name[0]
                      : profile.Name[0]}
                  </Avatar>
                </Box>
              </Grid>
              <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                <Box className={classes.name} pl={2}>
                  {profile.Type === KEY_USER_TYPE.student ? (
                    <Link
                      to={`/${Routes.studentDetails}/` + profile.ContactId}
                      className={classes.link}
                    >
                      {profile.Name}
                    </Link>
                  ) : parentProfile &&
                    parentProfile.Type === KEY_USER_TYPE.parent ? (
                    <Link
                      to={`/${Routes.studentDetails}/` + profile.ContactId}
                      className={classes.link}
                    >
                      {getParentName()?.Name}
                    </Link>
                  ) : (
                    <Typography>{profile.Name}</Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Hidden>
        </Box>
        <Grid container justify="space-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
           {openDrawer === true ? (  
            <img src={config?.logo || ken42Logo} className={classes.logo} />)
            :( <div >
              <FormatAlignLeftIcon
                className={classes.closeIcon}
              />
            </div>)
          }
          </IconButton>
          {openDrawer === true ? (
            <div className={classes.toolbar}>
              <FormatAlignRightIcon
                onClick={handleDrawerClose}
                className={classes.closeIcon}
              />
            </div>
          ) : (
            ''
          )}
        </Grid>

        <div className={classes.displayDrawer}>
          <Grid>
            {menuItem?.map((item, index) => (
              <ProtectedComponent feature={item?.feature} action={item?.action}>
                <NavLink
                  key={index}
                  className={classes.link}
                  to={
                    item?.link === null || item?.link === undefined ? (
                      <Typography>{item?.link}</Typography>
                    ) : (
                      item?.link
                    )
                  }
                  activeClassName={classes.active}
                >
                  <ListItem
                    onClick={item.callback}
                    classes={{
                      root: classes.listItem,
                      selected: classes.active,
                    }}
                    button
                  >
                    {openDrawer === false ? (
                      <LightTooltip title={item.label} placement="right-end">
                        <span className={classes.menuIcon}>
                          <Typography>{item.icon}</Typography>
                        </span>
                      </LightTooltip>
                    ) : (
                      <span className={classes.menuIcon}>
                        <Typography>{item.icon}</Typography>
                      </span>
                    )}
                    <span className={classes.heading}>{item.label}</span>
                  </ListItem>
                  {openDrawer
                    ? item?.subItem?.map((subLabel, index) => (
                        <ProtectedComponent
                          feature={item?.feature}
                          action={item?.action}
                        >
                          <NavLink
                            key={index}
                            className={classes.link}
                            to={subLabel.link}
                            activeClassName={classes.active}
                          >
                            <ListItem
                              onClick={subLabel.callback}
                              classes={{
                                root: classes.subListItem,
                                selected: classes.active,
                              }}
                              button
                            >
                              <span className={classes.subHeading}>
                                {subLabel.label}
                              </span>
                            </ListItem>
                          </NavLink>
                        </ProtectedComponent>
                      ))
                    : null}
                </NavLink>
              </ProtectedComponent>
            ))}

            <Hidden mdUp>
              <Link className={classes.link}>
                <ListItem className={classes.listItem} button key="signOut">
                  <span>
                    <ArrowBackOutlinedIcon />
                  </span>
                  <span className={classes.heading} onClick={logout}>
                    {t('Sign_Out')}
                  </span>
                </ListItem>
              </Link>
            </Hidden>
          </Grid>
        </div>
      </Drawer>
    </div>
  );
}
