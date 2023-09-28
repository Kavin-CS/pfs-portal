import React from 'react';
import { useTable } from 'react-table';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tbody: {
    minHeight: 200,
  },
  tr: {
    '&:last-child $td': {
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.KenColors.neutral40}`,
    },
    '&:first-child $td': {
      paddingTop: theme.spacing(2),
    },
  },
  td: {
    border: 'none',
    lineHeight: 1,
    padding: '0 16px',
  },
  table: {
    borderCollapse: 'separate',
    borderSpacing: '2px',
  },
}));

const defaultPropGetter = () => ({});

export default function TTGrid({ columnsArr = [], dataArr = [] }) {
  const classes = useStyles();
  const columns = React.useMemo(() => columnsArr, [columnsArr]);
  const data = React.useMemo(() => dataArr, [dataArr]);
  const defaultColumn = React.useMemo(() => ({
    minWidth: 30,
    width: 150,
    maxWidth: 400,
  }));

  const {
    getHeaderProps = defaultPropGetter,
    getColumnProps = defaultPropGetter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
  });

  return (
    <table {...getTableProps()} className={classes.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className={classes.tr}>
            {headerGroup.headers.map((column, index) => (
              <th
                className={classes.th}
                {...column.getHeaderProps()}
                {...column.getHeaderProps([
                  {
                    className: column.className,
                    style: column.style,
                  },
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={classes.tbody}>
        {rows.map((row, i) => {
          prepareRow(row);
          if (row?.original?.isHidden) {
            return null;
          }
          return (
            <tr {...row.getRowProps()} className={classes.tr}>
              {row.cells.map(cell => cell.render('Cell'))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
