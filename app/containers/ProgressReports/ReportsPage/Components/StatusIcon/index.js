import React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowUpGreen from '../../../../../assets/icons/ArrowUpGreen.svg';
import ArrowDownRed from '../../../../../assets/icons/ArrowDownRed.svg';

const StatusIcon = props => {
  const { status } = props;
  const { t } = useTranslation();

  const getIcon = status => {
    switch (status) {
      case 'stable':
        return null;
      //   <RemoveCircleIcon fontSize="small" className={classes.stableArrow} />

      case 'increased':
        return <img src={ArrowUpGreen} {...props} />;

      case 'decreased':
        return <img src={ArrowDownRed} {...props} />;

      default:
        return null;
      //   <ArrowForwardIcon fontSize="small" className={classes.forwardArrow} />
    }
  };

  return <>{getIcon(status)}</>;
};
export default StatusIcon;
