import { useEffect, useState, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  Row,
} from "@tanstack/react-table";
import mockData from "../../__mocks__/mockedDatas";
import DebouncedInput from "./DebouncedInput";
import styles from "./Table.module.css";

// Declare the data type
type Data = { [key: string]: string };

const columnHelper = createColumnHelper<Data>();

/**
 * Generates columns dynamically based on data keys.
 */
const generateColumns = (data: Data[]) => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]).map((key) =>
      columnHelper.accessor(key, {
        header: () => key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, " "),
        cell: (info) => info.row.original[key],
      })
    );
  };

/**
 * Filter function for fuzzy search.
 */
const fuzzyFilter = (
  row: Row<Data>,
  columnId: string,
  filterValue: string
) => {
  const cellValue = row.getValue(columnId);
  return cellValue
    ? cellValue.toString().toLowerCase().includes(filterValue.toLowerCase())
    : false;
};

/**
 * Format a label by capitalizing the first letter of each word and joining them with spaces.
 */
const formatLabel = (label: string) => {
  return label
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" hello ");
};

/**
 * Function component Table - Represent the Table Component
 */
const TableComponent : React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("employeeData");
    const initialData = storedData
      ? JSON.parse(storedData).employeeInfos.employees
      : mockData;
    setData(initialData);
  }, []);

  // Initialize table using useReactTable hook
  const table = useReactTable({
    data,
    columns: useMemo(() => generateColumns(data), [data]),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <div className={styles.containerTableComponent}>
      <div className={styles.containerInputs}>
        <label>
          Show&nbsp;
          <select
            id="paginationSelect"
            data-testid="paginationSelect"
            value={pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          &nbsp;entries
        </label>
        <DebouncedInput
          value={globalFilter ?? ""}
          id="globalFilter"
          testId="globalFilter"
          htmlFor="globalFilter"
          label="Search : "
          onChange={(value) => setGlobalFilter(value)}
          debounce={500}
        />
      </div>

      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.tr}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={styles.th}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <span
                            className={styles.arrow}
                            data-testid="arrow-icon"
                          >
                            {header.column.getIsSorted() === "desc" && " 🔽"}
                            {header.column.getIsSorted() === "asc" && " 🔼"}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className={styles.tr} data-testid="table-row">
                {row.getVisibleCells().map((cell) => {
                const columnDef = cell.column.id;
                  const formattedLabel = formatLabel(columnDef);
                  return (
                    <td
                      key={cell.id}
                      className={styles.td}
                      data-label={formattedLabel}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.containerFooter}>
        <div>
          <span>
            Showing&nbsp;
            {pagination.pageIndex * pagination.pageSize + 1} to{" "}
            {pagination.pageIndex * pagination.pageSize + pagination.pageSize >=
            table.getPrePaginationRowModel().rows.length
              ? table.getPrePaginationRowModel().rows.length
              : pagination.pageIndex * pagination.pageSize +
                pagination.pageSize}{" "}
            of {table.getPrePaginationRowModel().rows.length}
          </span>
          &nbsp;entries
        </div>

        <div className={styles.containerButton}>
          <div>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"Previous"}
            </button>
          </div>
          {table.getPageCount() > 0 && (
            <div>
              <span>
                <label
                  htmlFor="pagination-input"
                  className={styles.hiddenLabel}
                >
                  Pagination
                </label>
                <input
                  id="pagination-input"
                  name="pagination-input"
                  type="number"
                  value={pagination.pageIndex + 1}
                  min="1"
                  max={table.getPageCount()}
                  onChange={(e) => {
                    const newPageIndex = parseInt(e.target.value, 10) - 1;
                    table.setPageIndex(newPageIndex);
                  }}
                  className={styles.containerPagination}
                />
              </span>
            </div>
          )}
          <div>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {"Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableComponent;
