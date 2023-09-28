import { Avatar, Box, Typography, useTheme } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import KenCard from '../../../global_components/KenCard';
import KenGrid from '../../../global_components/KenGrid';
import ContactCell from '../../../global_components/KenGrid/components/ContactCell';
import KenAvatar from '../../../components/KenAvatar';
import CircularProgressWithLabel from '../../../components/ChartWidgets/CircularProgressWithLabel';
import { KEY_ATTENDANCE_PROGRESS_VALUES } from '../../../utils/constants';
import AssessmentIcon from '../../../assets/icons/Card/Assesments.svg';

import Routes from '../../../utils/routes.json';
import { Link } from 'react-router-dom';
import KenLoader from '../../../components/KenLoader';

export default function StudentTableGrid({ data = [], title, loading }) {
  const getAttendanceStatusColor = value => {
    const kenTheme = useTheme();
    if (!Number(value)) return kenTheme.palette.KenColors.kenBlack;
    if (
      value >= KEY_ATTENDANCE_PROGRESS_VALUES.RANGE_MIN &&
      value <= KEY_ATTENDANCE_PROGRESS_VALUES.RANGE_AVERAGE
    ) {
      return kenTheme.palette.KenColors.orange;
    } else if (value <= KEY_ATTENDANCE_PROGRESS_VALUES.RANGE_MIN) {
      return kenTheme.palette.KenColors.red;
    } else {
      return kenTheme.palette.KenColors.green;
    }
  };

  const AttendanceCell = ({ value }) => {
    return (
      <div>
        <CircularProgressWithLabel
          value={value}
          size={20}
          thickness={6}
          circleColor={getAttendanceStatusColor(value)}
        />
      </div>
    );
  };
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('headings:Name'),
      accessor: 'ContactName',
      Cell: ({ value, row }) => {
        return (
          <Link
            to={`/${Routes.studentDetails}/${row.original.ContactId}`}
            style={{ textDecoration: 'none' }}
          >
            <ContactCell value={value} />
          </Link>
        );
      },
    },
    {
      Header: t('Program_Name'),
      accessor: 'ProgramName',
      disableGlobalFilter: true,
    },
    {
      Header: t('headings:Courses'),
      accessor: 'Name',
      disableGlobalFilter: true,
    },
    {
      Header: t('Classes_Attended'),
      accessor: 'No_Of_Classes_Attended__c',
      disableGlobalFilter: true,
    },
    {
      Header: t('headings:Attendance'),
      accessor: 'Percentage_of_classes_attended__c',
      Cell: AttendanceCell,
      disableGlobalFilter: true,
    },
    {
      Header: t('headings:Reports'),
      accessor: 'ContactId',
      Cell: ({ row, value }) => {
        return (
          <Link
            to={`/${Routes.reports}?ContactId=${value}&ProgramId=${
              row.original.ProgramId
            }&CourseOfferingID=${row.original.CourseOfferingID}`}
            style={{ textDecoration: 'none' }}
          >
            <Box>
              <img
                alt="report-icon"
                src={AssessmentIcon}
                // className={classes.reportActionIcon}
                style={{ height: 30 }}
              />
            </Box>
          </Link>
        );
      },
      disableGlobalFilter: true,
    },
  ];

  return (
    <KenCard paperStyles={{ padding: 16 }}>
      {loading && <KenLoader />}
      <KenGrid columns={columns} data={data} pagination={{ disabled: false }} />
    </KenCard>
  );
}
