import { makeStyles, Typography, Fab } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilterIcon from '../../../../../assets/icons/Filter.svg';
import KenButton from '../../../../../global_components/KenButton';
import KenFooterSplitButtons from '../../../../../global_components/KenFooterSplitButtons';
import QuestionBankFiltersMobile from '../QuestionBankFiltersMobile';
const useStyles = makeStyles(theme => ({
  questionbankTypography: {
    fontWeight: 600,
    fontSize: '14px',
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
  },
  filterButton: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(8),
  },
}));

const QuestionBankContentMobile = props => {
  const {
    filterData,
    handleChange,
    handleExpand,
    handleClearFilter,
    getSelectedFiltersCount,
    handleQuestionBankClose,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const [showFilters, setShowFilters] = useState(false);

  const handleOpenFilter = () => {
    setShowFilters(true);
  };
  const handleCloseFilter = () => {
    setShowFilters(false);
  };
  return (
    <div data-testid="questionbank-content-mobile">
      {showFilters ? (
        <QuestionBankFiltersMobile
          filterData={filterData}
          handleCloseFilter={handleCloseFilter}
          handleExpand={handleExpand}
          handleChange={handleChange}
          handleClearFilter={handleClearFilter}
          getSelectedFiltersCount={getSelectedFiltersCount}
        />
      ) : (
        <>
          <Typography className={classes.questionbankTypography}>
            {t('labels:Question_bank')}
          </Typography>
          <Fab
            color="primary"
            aria-label="filter"
            className={classes.filterButton}
            onClick={handleOpenFilter}
            data-testid="open-filters-button"
          >
            <img src={FilterIcon} />
          </Fab>
          <KenFooterSplitButtons
            primaryButtonName={'Add Selected'}
            secondaryButtonName={'Cancel'}
            secondaryAction={handleQuestionBankClose}
          />
        </>
      )}
    </div>
  );
};

export default QuestionBankContentMobile;
