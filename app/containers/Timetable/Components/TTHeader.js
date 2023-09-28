import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import KenHeader from '../../../global_components/KenHeader';
import KenButton from '../../../global_components/KenButton/index';
import ExportIcon from '../../../assets/icons/ExportIcon.svg';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  btnLabels: {
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'none',
  },
  headerBtn: {
    marginLeft: '10px',
    minWidth: '100px',
  },
}));

export default function TTHeader(props) {
  const { handleExport, handleShare } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Box data-testid="time-table">
        <KenHeader>
          <KenButton
            variant="secondary"
            startIcon={<ShareIcon />}
            className={classes.headerBtn}
            onClick={handleShare}
            label={
              <Typography className={classes.btnLabels}>
                {t('labels:Share')}
              </Typography>
            }
          />
          <KenButton
            variant="secondary"
            startIcon={<img src={ExportIcon} />}
            className={classes.headerBtn}
            onClick={handleExport}
            label={
              <Typography className={classes.btnLabels}>
                {t('labels:Export')}
              </Typography>
            }
          />
        </KenHeader>
      </Box>
    </>
  );
}
