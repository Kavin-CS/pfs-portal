import React from 'react';
import { Grid, makeStyles, Box, useTheme, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: theme.palette.KenColors.tertiaryYellow501,
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
  },
  cardAction: {
    color: theme.palette.KenColors.tertiaryYellow501,
    fontWeight: 'bold',
    cursor: 'pointer',
    height: '15px',
    width: '15px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  percentage: {
    fontWeight: 'bold',
    color: theme.palette.KenColors.tertiaryYellow502,
  },
  percentageSymbol: {
    fontWeight: 'bold',
    color: theme.palette.KenColors.tertiaryYellow502,
  },
  ratingsContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    color: theme.palette.KenColors.tertiaryGreen503,
  },
  upArrow: {
    backgroundColor: theme.palette.KenColors.tertiaryGreen504,
    borderRadius: '50%',
    color: theme.palette.KenColors.kenWhite,
    height: '15px',
    width: '15px',
  },
  downArrow: {
    backgroundColor: theme.palette.KenColors.secondaryPeach2,
    borderRadius: '50%',
    color: theme.palette.KenColors.tertiaryRed501,
    height: '15px',
    width: '15px',
  },
  stableArrow: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue100,
    borderRadius: '50%',
    color: theme.palette.KenColors.kenWhite,
    height: '15px',
    width: '15px',
  },
  forwardArrow: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue100,
    borderRadius: '50%',
    color: theme.palette.KenColors.kenWhite,
    height: '15px',
    width: '15px',
  },
  ratings: {
    fontWeight: 600,
    paddingLeft: '5px',
  },
}));

const RatingsStatusCard = props => {
  const {
    cardBackgroundColor,
    title,
    titleColor,
    cardAction,
    children,
    boldText,
    boldSubtext,
    status, //increased, decreased, stable
    ratings,
    ratingsText,
    ratingsSymbol,
    onIconClick,
    ratingsIcon,
    variant,
    ratingsTextColor,
    ratingsStatusTextColor,
  } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const classes = useStyles();

  const getStylesByStatus = key => {
    let obj;
    switch (status) {
      case 'stable': {
        obj = {
          icon: (
            <RemoveCircleIcon
              fontSize="small"
              className={classes.stableArrow}
            />
          ),
          ratingsText: t('labels:Rating_Stable'),
          ratingsStatusTextColor: theme.palette.KenColors.tertiaryBlue100,
          titleColor: theme.palette.KenColors.tertiaryYellow502,
        };
        break;
      }
      case 'increased': {
        obj = {
          icon: (
            <ArrowUpwardIcon fontSize="small" className={classes.upArrow} />
          ),
          ratingsText: t('labels:Rating_Up'),
          ratingsStatusTextColor: theme.palette.KenColors.tertiaryBlue100,
          titleColor: theme.palette.KenColors.tertiaryYellow502,
        };
        break;
      }
      case 'decreased': {
        obj = {
          icon: (
            <ArrowDownwardIcon fontSize="small" className={classes.downArrow} />
          ),
          ratingsText: t('labels:Rating_Down'),
          ratingsStatusTextColor: theme.palette.KenColors.tertiaryBlue100,
          titleColor: theme.palette.KenColors.tertiaryYellow502,
        };
        break;
      }

      default: {
        obj = {
          icon: null,
          ratingsText: t('labels:Rating_Default'),
          ratingsStatusTextColor: theme.palette.KenColors.tertiaryBlue100,
          titleColor: theme.palette.KenColors.tertiaryYellow502,
        };
        break;
      }
    }

    if (key === 'ratingsText' && ratingsText) return ratingsText;
    if (key === 'ratingsIcon' && ratingsIcon) return ratingsIcon;
    if (key === 'ratingsStatusTextColor' && ratingsStatusTextColor)
      return ratingsStatusTextColor;
    return obj[key];
  };

  const getStylesByVariant = key => {
    let obj;
    switch (variant) {
      case 'primary': {
        obj = {
          backgroundColor: theme.palette.KenColors.tertiaryYellow74,
          titleColor: theme.palette.KenColors.tertiaryYellow502,
          ratingsTextColor: theme.palette.KenColors.tertiaryYellow502,
        };
        break;
      }
      case 'secondary': {
        obj = {
          backgroundColor: theme.palette.KenColors.tertiaryTeal198,
          titleColor: theme.palette.KenColors.tertiaryTeal501,
          ratingsTextColor: theme.palette.KenColors.tertiaryTeal501,
        };
        break;
      }
      case 'tertiary': {
        obj = {
          backgroundColor: theme.palette.KenColors.tertiaryPurple70,
          titleColor: theme.palette.KenColors.tertiaryPurple501,
          ratingsTextColor: theme.palette.KenColors.tertiaryPurple501,
        };
        break;
      }
      case 'quaternary': {
        obj = {
          backgroundColor: theme.palette.KenColors.secondaryPeach5,
          titleColor: theme.palette.KenColors.secondaryPeach6,
          ratingsTextColor: theme.palette.KenColors.secondaryPeach6,
        };
        break;
      }
      case 'quinary': {
        obj = {
          backgroundColor: theme.palette.KenColors.tertiaryGreen49,
          titleColor: theme.palette.KenColors.tertiaryGreen48,
          ratingsTextColor: theme.palette.KenColors.tertiaryGreen48,
        };
        break;
      }

      default: {
        obj = {
          backgroundColor: theme.palette.KenColors.kenWhite,
          titleColor: theme.palette.KenColors.tertiaryBlue501,
          ratingsTextColor: theme.palette.KenColors.tertiaryBlue501,
        };
        break;
      }
    }

    if (key === 'backgroundColor' && cardBackgroundColor)
      return cardBackgroundColor;
    if (key === 'titleColor' && titleColor) return titleColor;
    if (key === 'ratingsTextColor' && ratingsTextColor) return ratingsTextColor;
    return obj[key];
  };

  return (
    <Box
      style={{
        borderRadius: '10px',
        backgroundColor: getStylesByVariant('backgroundColor'),
      }}
      data-testid="ratings-status-card"
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box p={1} pl={2} className={classes.cardContainer}>
            <Typography
              data-testid="card-title"
              className={classes.cardTitle}
              variant="subtitle2"
              style={{ color: getStylesByVariant('titleColor') }}
            >
              {title}
            </Typography>
            {cardAction || (
              <ArrowForwardIcon
                className={classes.cardAction}
                fontSize="small"
                onClick={onIconClick}
                style={{ color: getStylesByVariant('titleColor') }}
              />
            )}
          </Box>
        </Grid>
        {(boldText || boldSubtext || ratings || ratingsSymbol) && (
          <Grid item xs={12}>
            <Box p={1} pl={2} className={classes.cardContent}>
              <Grid container spacing={1}>
                {(boldText || boldSubtext) && (
                  <Grid item xs={6}>
                    <Typography
                      data-testid="card-boldText"
                      className={classes.percentage}
                      variant="h4"
                      component="span"
                      style={{ color: getStylesByVariant('ratingsTextColor') }}
                    >
                      {boldText}
                    </Typography>
                    <Typography
                      data-testid="card-boldSubtext"
                      className={classes.percentageSymbol}
                      variant="h6"
                      component="span"
                      style={{ color: getStylesByVariant('ratingsTextColor') }}
                    >
                      {boldSubtext}
                    </Typography>
                  </Grid>
                )}
                {(ratings || ratingsSymbol) && (
                  <Grid item xs={6} className={classes.ratingsContainer}>
                    {getStylesByStatus('icon')}
                    <Typography
                      className={classes.ratings}
                      variant="subtitle2"
                      style={{
                        color: getStylesByStatus('ratingsStatusTextColor'),
                      }}
                    >
                      {getStylesByStatus('ratingsText')} {ratings}
                      {ratingsSymbol || t('labels:Rating_Symbol_Default')}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Grid>
        )}
        {children && (
          <Grid item xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default RatingsStatusCard;
