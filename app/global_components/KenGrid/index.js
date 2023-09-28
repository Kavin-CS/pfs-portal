import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PropTypes from 'prop-types';

import {
  useGlobalFilter,
  useGroupBy,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  TableFooter,
  TablePagination,
  TableSortLabel,
} from '@material-ui/core';
import KenInputField from '../KenInputField';
import TableToolbar from './TableToolbar';
import TablePaginationActions from './TablePaginationActions';

import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';

// pagination={{
//     pageSize: 4,
//     pageIndex: 0,
//     rowsPerPageOptions: [1, 2, 4, 10],
//   }}
// toolbarDisabled : false

export default function KenGrid({
  columns = [],
  data = [],
  searchEnabled,
  title = 'My Students',
  tableInnerProps,
  pagination,
  toolbarDisabled,
  gridProps = {},
  initialState = {},
}) {
  const { t } = useTranslation();
  columns = React.useMemo(() => columns, [columns]);

  data = React.useMemo(() => data, [data]);
  // default pagination pros
  pagination = {
    disabled: true,
    rowsPerPageOptions: [10, 25, 50, { label: 'All', value: data.length }],
    ...pagination,
  };
  const tableProps = {
    initialState: {
      ...(pagination?.pageSize && { pageSize: pagination?.pageSize }),
      ...(pagination?.pageIndex && { pageIndex: pagination?.pageIndex }),
      ...initialState,
    },
  };

  return (
    <div>
      <CssBaseline />
      <Table
        columns={columns}
        data={data}
        // getHeaderProps={hooks => {
        //   hooks.getHeaderProps = [
        //     ...hooks.getHeaderProps,
        //     header => {
        //       console.log(header);
        //       return { border: '1px solid blue' };
        //     },
        //   ];
        // }}
        searchEnabled={searchEnabled}
        title={title}
        tableProps={tableProps}
        pagination={pagination}
        toolbarDisabled={toolbarDisabled || false}
        noDataText={t('No_Records')}
        {...gridProps}
      />
    </div>
  );
}

const useTableStyles = makeStyles({
  tbody: {
    minHeight: 200,
  },
  footer: {
    backgroundColor: '#E7ECFF',
  },
  cellRoot: {
    textAlign: '-webkit-center',
  },
});

const defaultPropGetter = () => ({});

function Table({
  columns,
  data,
  searchEnabled,
  title,
  tableProps = {},
  pagination,
  toolbarDisabled,
  loading,
  loadingText,
  noDataText,
  footerRows, // array of row numbers [inner most row is the first] in footer
  updateMyData,
  defaultColumn,
  headerVisible = true,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
    footerGroups,
  } = useTable(
    {
      columns,
      data,
      ...tableProps,
      defaultColumn,
      updateMyData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const classes = useTableStyles();

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  };

  const getCurrentRows = () => {
    return pagination?.disabled ? rows : page;
  };

  // Render the UI for your table
  return (
    <Box padding="2">
      {!toolbarDisabled ? (
        <TableToolbar
          title={title}
          searchEnabled={searchEnabled}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      ) : null}

      <MaUTable {...getTableProps()}>
        {headerVisible && (
          <GridHeader
            headerGroups={headerGroups}
            getHeaderProps={getHeaderProps}
            getColumnProps={getColumnProps}
          />
        )}
        <TableBody className={classes.tbody}>
          {getCurrentRows().map((row, i) => {
            prepareRow(row);
            return (
              <GridBodyRow
                row={row}
                getRowProps={getRowProps}
                getCellProps={getCellProps}
                getColumnProps={getColumnProps}
              />
            );
          })}
          {getCurrentRows().length === 0 ? (
            <GridNoDataComponent>{noDataText}</GridNoDataComponent>
          ) : null}
        </TableBody>

        <TableFooter>
          {footerGroups.map((group, index) => {
            if (footerRows?.includes(index + 1)) {
              return (
                <TableRow
                  {...group.getFooterGroupProps()}
                  classes={{ footer: classes.footer }}
                >
                  {group.headers.map(column => (
                    <TableCell
                      {...column.getFooterProps()}
                      classes={{ root: classes.cellRoot }}
                    >
                      {column?.render('Footer')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            }
          })}

          {!pagination?.disabled && (
            <TableRow>
              <TablePagination
                rowsPerPageOptions={pagination.rowsPerPageOptions}
                //   colSpan={3}

                count={data.length}
                rowsPerPage={pageSize}
                page={pageIndex}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          )}
        </TableFooter>
      </MaUTable>
    </Box>
  );
}

const useGridBodyRowStyles = makeStyles(theme => ({
  tr: {},
  cellRoot: {
    textAlign: '-webkit-center',
    padding: '16px 8px',
  },
}));

const GridBodyRow = ({ row, getRowProps, getColumnProps, getCellProps }) => {
  const classes = useGridBodyRowStyles();
  return (
    <TableRow {...row.getRowProps(getRowProps(row))} className={classes.tr}>
      {row.cells.map(cell => {
        return (
          <TableCell
            // {...cell.getCellProps()}
            classes={{ root: classes.cellRoot }}
            {...cell.getCellProps([
              {
                className: cell.column.className,
                style: cell.column.style,
              },
              getColumnProps(cell.column),
              getCellProps(cell),
            ])}
          >
            {cell.render('Cell')}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
GridBodyRow.propTypes = {
  row: PropTypes.object.required,
};
export { GridBodyRow };

const useGridHeaderStyles = makeStyles(theme => ({
  root: {},
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
    // textAlign: 'center',
    padding: '0 8px',
  },
  head: {
    fontSize: '10px',
    lineHeight: '150%',
    textTransform: 'uppercase',
    color: ' #505F79',
  },
  cellRoot: {
    textAlign: '-webkit-center',
  },
}));
const GridHeader = ({ headerGroups, getColumnProps, getHeaderProps }) => {
  const classes = useGridHeaderStyles();
  return (
    <TableHead className={classes.root}>
      {headerGroups.map((headerGroup, index) => (
        <TableRow {...headerGroup.getHeaderGroupProps()} className={classes.tr}>
          {headerGroup.headers.map(column => (
            <TableCell
              {...(column.id === 'selection'
                ? column.getHeaderProps()
                : column.getHeaderProps(column.getSortByToggleProps()))}
              className={[classes.td, classes.head].join(' ')}
              classes={{ root: classes.cellRoot }}
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
              {column.id !== 'selection' && column.isSorted ? (
                <TableSortLabel
                  active={column.isSorted}
                  // react-table has a unsorted state which is not treated here
                  direction={column.isSortedDesc ? 'desc' : 'asc'}
                />
              ) : null}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

GridHeader.propTypes = {
  headerGroups: PropTypes.array.isRequired,
};

export { GridHeader };

function GridNoDataComponent({ children }) {
  return (
    <Box
      style={{ minHeight: 200 }}
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      {children}
    </Box>
  );
}

GridNoDataComponent.propTypes = {};

export { GridNoDataComponent };
