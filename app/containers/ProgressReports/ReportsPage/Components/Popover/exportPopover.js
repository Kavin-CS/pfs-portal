import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { exportToSpreadsheet } from '../../../../../utils/spreadSheet';
import MyDocument from '../../../../../utils/downloadablePDFs/marksheet';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import { cbseStudentData } from '../../../../../utils/spreadSheet';

const useStyles = makeStyles(theme => ({
  typo: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#EEEEEE',
    },
  },
}));

export default function ExportPopover(props) {
  const { t } = useTranslation();
  const { data, signatures } = props;
  const classes = useStyles();
  const result = cbseStudentData(data);
  const handleExcel = () => {
    exportToSpreadsheet(result.data, result.fileName);
  };
  console.log(props);

  console.log(data);
  const [instance, updateInstance] = usePDF({
    document: <MyDocument signatures={signatures} studentData={data} />,
  });
  const handlePDF = () => {
    window.open(instance.url, '_blank');
  };
  return (
    <Grid container spacing={2} direction="column">
      <Grid item className={classes.typo}>
        <Typography onClick={handleExcel}>
          {t('translations:Excel_Format')}
        </Typography>
      </Grid>
      <Grid item className={classes.typo}>
        <Typography
          onClick={() => {
            if (data && instance.url) {
              handlePDF();
            }
          }}
        >
          {t('translations:PDF_Format')}
        </Typography>
      </Grid>
      {/* <Grid item>
        <Typography>{t('translations:CSV_Format')}</Typography>
      </Grid> */}
    </Grid>
  );
}
