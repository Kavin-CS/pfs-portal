import {
  Divider,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilterAccordionLabel from '../../../../../components/UI/FilterAccordionLabel';
import KenFooterSplitButtons from '../../../../../global_components/KenFooterSplitButtons';
import SearchableCheckList from '../../../../../global_components/SearchableCheckList';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  filtersLabel: {
    fontSize: '14px',
    fontWeight: '600',
    padding: '0px 0px 20px 16px',
    color: theme.palette.KenColors.neutral900,
  },
  filterItemLabelText: {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.palette.KenColors.neutral900,
  },
  clearAllContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 16px 20px 0px',
  },
  clearAllButton: {
    color: theme.palette.KenColors.orange10,
    fontWeight: 600,
    fontSize: '12px',
  },
}));

const QuestionBankFiltersMobile = props => {
  const {
    handleCloseFilter,
    filterData,
    handleExpand,
    handleChange,
    handleClearFilter,
    getSelectedFiltersCount,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedFilterItem, setSelectedFilterItem] = useState(null);

  useEffect(() => {
    setSelectedFilterItem(filterData.find(item => item.open));
  }, [filterData]);

  return (
    <div
      className={classes.container}
      data-testid="questionbank-filters-mobile"
    >
      <Grid
        container
        style={{ height: 'calc(100% - 52px)', padding: '16px 0px 0px 0px' }}
      >
        <Grid
          item
          xs={4}
          style={{
            boxShadow: '0px 0px 18px #101E730F',
            clipPath: 'inset(0px -15px 0px 0px)',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <Typography className={classes.filtersLabel}>
            {t('labels:Filters')}
          </Typography>
          {filterData.map(item => (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  backgroundColor: item.open
                    ? theme.palette.KenColors.neutral20
                    : 'initial',
                }}
                onClick={() => handleExpand(item.id)}
                key={item.id}
              >
                <FilterAccordionLabel
                  label={item.label}
                  extraInfoText={getSelectedFiltersCount(item)}
                  classOverrides={
                    selectedFilterItem?.id === item.id
                      ? { labelText: classes.filterItemLabelText }
                      : {}
                  }
                />
              </div>
              <Divider
                style={{
                  color: theme.palette.KenColors.assessmentBorder,
                  margin: '0px 16px',
                }}
              />
            </>
          ))}
        </Grid>

        <Grid
          item
          xs={8}
          style={{
            height: '100%',
            overflowY: 'auto',
            padding: '0px 16px 0px 8px',
          }}
        >
          <div className={classes.clearAllContainer}>
            <Typography
              className={classes.clearAllButton}
              onClick={handleClearFilter}
            >
              {t('labels:Clear_all')}
            </Typography>
          </div>

          {selectedFilterItem && selectedFilterItem.type === 'checkbox' && (
            <SearchableCheckList
              isSearchEnabled={true}
              type={selectedFilterItem.type}
              value={selectedFilterItem.value}
              options={selectedFilterItem.options}
              handleChange={handleChange(selectedFilterItem.id)}
            />
          )}
          {selectedFilterItem && selectedFilterItem.type === 'radio' && (
            <SearchableCheckList
              isSearchEnabled={true}
              type={selectedFilterItem.type}
              value={selectedFilterItem.value}
              name={selectedFilterItem.id}
              options={selectedFilterItem.options}
              handleChange={handleChange(selectedFilterItem.id)}
            />
          )}
        </Grid>
      </Grid>
      <KenFooterSplitButtons
        primaryButtonName={'Apply'}
        secondaryButtonName={'Cancel'}
        secondaryAction={handleCloseFilter}
      />
    </div>
  );
};

export default QuestionBankFiltersMobile;
