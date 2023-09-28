import {
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuestionBankContentMobile from '../QuestionBankContentMobile';
import QuestionBankFilters from '../QuestionBankFilters';
import tempData from './data';

const useStyles = makeStyles(theme => ({
  panel: {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '10px',
      background: theme.palette.KenColors.scrollbarColor,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: `${theme.palette.KenColors.neutral103}`,
    },
  },
  leftPanel: {
    paddingRight: '10px',
  },
  rightpanelHeader: {
    height: '36px',
  },
  panelHeaderTypography: {
    fontWeight: 600,
    fontSize: '14px',
  },
  rightPanel: {
    marginLeft: '10px',
  },
}));

const QuestionBankContent = props => {
  const { handleQuestionBankClose } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const [filterData, setFilterData] = useState(tempData);

  const handleChange = filterId => newVal => {
    setFilterData(data =>
      data.map(item => {
        if (item.id === filterId) {
          return { ...item, value: newVal };
        } else {
          return item;
        }
      })
    );
  };

  const handleExpand = filterId => {
    setFilterData(data =>
      data.map(item => {
        if (item.id === filterId) {
          return { ...item, open: true };
        } else {
          return { ...item, open: false };
        }
      })
    );
  };

  const handleClearFilter = () => {
    setFilterData(filterData.map(item => ({ ...item, value: [] })));
  };

  const getSelectedFiltersCount = item => {
    if (item.type === 'radio') {
      if (item.value.length) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return item.value.length;
    }
  };

  return (
    <div data-testid="questionbank-content">
      <Hidden smDown>
        <Grid container alignItems="flex-start" style={{ height: '100%' }}>
          <Grid item xs={3} className={`${classes.leftPanel} ${classes.panel}`}>
            <QuestionBankFilters
              filterData={filterData}
              handleChange={handleChange}
              handleExpand={handleExpand}
              handleClearFilter={handleClearFilter}
              getSelectedFiltersCount={getSelectedFiltersCount}
            />
          </Grid>
          <Divider orientation="vertical" />
          <Grid
            item
            xs={8}
            className={`${classes.rightPanel} ${classes.panel}`}
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              className={classes.rightpanelHeader}
            >
              <Grid item>
                <Typography className={classes.panelHeaderTypography}>
                  {t('labels:Question_bank')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <QuestionBankContentMobile
          filterData={filterData}
          handleChange={handleChange}
          handleExpand={handleExpand}
          handleClearFilter={handleClearFilter}
          getSelectedFiltersCount={getSelectedFiltersCount}
          handleQuestionBankClose={handleQuestionBankClose}
        />
      </Hidden>
    </div>
  );
};

export default QuestionBankContent;
