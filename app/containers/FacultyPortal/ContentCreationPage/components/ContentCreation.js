import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import DisplaySwitch from './DisplaySwitch';
import {useTranslation} from 'react-i18next';


const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: -1,
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    maxWidth: '23vw',
    flexWrap: "wrap",
    borderLeft: `3px solid ${theme.palette.KenColors.tertiaryTeal200}`,
    margin: 8,
    [theme.breakpoints.only("xs")]: {
      flexWrap: 'none',
      maxWidth: 'none',
      margin: '0px 0px 8px 0px',
      padding: 0,
    }
  },
  title: {
    color: theme.palette.KenColors.primary,
    fontSize: '14px',
    lineHeight: '22px',
  },
  date: {
    color: theme.palette.KenColors.neutral900,
    fontSize: '10px',
    lineHeight: '14px',
    marginTop: 16,
  },
  facultyTasks: {
    width: "100%"
  }

}));

export default function ContentCreationCard(props) {
  const { data } = props;
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Card elevation={0} className={classes.root} >
      <Grid container direction="column"  >
        <Box p={2} className={classes.facultyTasks}>
          <Grid item  >
            <Typography className={classes.title} >
              {data.title}
            </Typography>
          </Grid>
          <Grid container item justify="space-between" alignItems="center" >
            <Grid item>
              <Typography className={classes.date}><span>{t("headings:Last_Updated")}:</span> {data.date} </Typography>
            </Grid>
            <Grid item>
              <DisplaySwitch />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Box >
        <img src={props.data.icon} className={classes.marginIcon} ></img>
      </Box>

    </Card>
  );
}
