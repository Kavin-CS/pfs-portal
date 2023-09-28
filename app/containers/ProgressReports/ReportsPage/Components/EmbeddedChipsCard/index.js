import React from 'react';
import {
  Grid,
  Box,
  useTheme,
  Chip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: '5px',
    marginBottom: '5px',
    cursor: 'pointer',
    backgroundColor: theme.palette.KenColors.neutral40,
    ' &:hover': {
      backgroundColor: `${theme.palette.KenColors.neutral20}`,
    },
    ' &:focus': {
      backgroundColor: `${theme.palette.KenColors.kenWhite}`,
      border: `1px solid ${theme.palette.KenColors.tertiaryBlue500}`,
    },
  },
  variantGoodChip: {
    backgroundColor: `${theme.palette.KenColors.kenWhite}`,
    ' &:focus': {
      backgroundColor: `${theme.palette.KenColors.kenWhite}`,
      border: `1px solid ${theme.palette.KenColors.tertiaryGreen500}`,
    },
  },
  variantBadChip: {
    backgroundColor: `${theme.palette.KenColors.kenWhite}`,
    ' &:focus': {
      backgroundColor: `${theme.palette.KenColors.kenWhite}`,
      border: `1px solid ${theme.palette.KenColors.tertiaryRed500}`,
    },
  },
}));

const EmbeddedChipsCard = props => {
  const theme = useTheme();
  const classes = useStyles();
  const {
    title,
    cardBackgroundColor,
    chipData,
    keyInArray,
    chipProps,
    cardTitleColor,
    chipTextColor,
    variant,
    onChipClick,
    onChipDelete,
    focusedChipStyles, //make sure to pass styles which are defined at right place.
  } = props;

  let focusedChipClass = {};
  if (focusedChipStyles) {
    focusedChipClass = focusedChipStyles;
  }
  const getCardTitleColor = () => {
    if (cardTitleColor) return cardTitleColor;

    switch (variant) {
      case 'good':
        return theme.palette.KenColors.tertiaryGreen500;
      case 'bad':
        return theme.palette.KenColors.tertiaryRed500;

      default:
        return theme.palette.KenColors.primary;
    }
  };

  const getCardBgColor = () => {
    if (cardBackgroundColor) return cardBackgroundColor;

    switch (variant) {
      case 'good':
        return theme.palette.KenColors.tertiaryGreen501;
      case 'bad':
        return theme.palette.KenColors.secondaryPeach2;

      default:
        return theme.palette.KenColors.kenWhite;
    }
  };

  const getChipTextColor = () => {
    if (chipTextColor) return chipTextColor;

    switch (variant) {
      case 'good':
        return theme.palette.KenColors.tertiaryGreen502;
      case 'bad':
        return theme.palette.KenColors.secondaryPeach4;

      default:
        return theme.palette.KenColors.primary;
    }
  };

  const getChipLabel = item => {
    if (typeof item === 'object') {
      return item[keyInArray] ? item[keyInArray] : item['label'];
    } else if (typeof item === 'string') {
      return item;
    }
  };

  return (
    <Box
      style={{
        borderRadius: '10px',
        backgroundColor: getCardBgColor(),
      }}
      data-testid="embedded-chips-card"
    >
      <Box>
        <Box p={2}>
          <Typography
            data-testid="chips-card-title"
            style={{
              fontWeight: 'bold',
              color: getCardTitleColor(),
            }}
            variant="subtitle2"
          >
            {title}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box p={1}>
              {Array.isArray(chipData) &&
                chipData.map((item, index) => {
                  return (
                    <>
                      {(item[keyInArray] ||
                        item['label'] ||
                        typeof item === 'string') && (
                        <Chip
                          key={index}
                          data-testid="chips-label"
                          className={clsx(classes.chip, focusedChipClass, {
                            [classes.variantGoodChip]: variant === 'good',
                            [classes.variantBadChip]: variant === 'bad',
                          })}
                          clickable={true}
                          onClick={e => {
                            onChipClick(item, e);
                          }}
                          onDelete={
                            onChipDelete
                              ? e => {
                                  onChipDelete(item, e);
                                }
                              : null
                          }
                          label={
                            <Typography
                              variant="subtitle2"
                              style={{
                                color: getChipTextColor(),
                                fontWeight: 'bold',
                              }}
                            >
                              {getChipLabel(item)}
                            </Typography>
                          }
                          {...chipProps}
                        />
                      )}
                    </>
                  );
                })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default EmbeddedChipsCard;
