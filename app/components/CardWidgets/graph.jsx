import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import CardDetail from '../../components/CardWidgets/card';
import GraphIcon from '../../assets/icons/Card/Card area graph.png';
import GraphIconBlue from '../../assets/icons/Card/skyBlueGraph.png';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  boxMargin: {
    marginLeft: 16,
    [theme.breakpoints.only('xs')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: 0,
    },
  },
}));
export default function GraphCard(props) {
  const { data } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction="row"
      style={{ minWidth: '70vw', marginBottom: '16px' }}
      spacing={3}
    >
      <Grid item xs={12} sm={12} md={6}>
        <CardDetail
          cardDetail={data?.Percentage_of_classes_attended__c}
          cardName={t('Avg_Attendance')}
          imgSrc={GraphIcon}
          showPercentage={true}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <CardDetail
          cardDetail={data?.hed__Grade__c}
          cardName={t('Overall_Grade')}
          imgSrc={GraphIconBlue}
          showPercentage={false}
        />
      </Grid>
      {/* <Grid item xs={12} sm={12} md={6}>
                <Box >
                    <CardDetail cardDetail={props.data.hed__Grade__c} cardName={"ASSIGNMENT SUBMISSION"} imgSrc={GraphIconGreen} showPercentage={false} />
                </Box>

            </Grid >
            <Grid item xs={12} sm={12} md={6}>
                <Box className={classes.boxMargin}>
                    <CardDetail cardDetail={"At Risk"} cardName={"STANDING"} imgSrc={AtRisk} showPercentage={false} color="#FF7452" />
                </Box>

            </Grid> */}
    </Grid>
  );
}
