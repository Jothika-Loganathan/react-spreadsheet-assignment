import React from "react";
import { useTable } from "react-table";

const data = [
  { name: "Alice", age: 25, role: "Developer" },
  { name: "Bob", age: 30, role: "Designer" },
  { name: "Charlie", age: 28, role: "Product Manager" },
];

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Role",
    accessor: "role",
  },
];

export default function Table() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto border rounded shadow">
      <table {...getTableProps()} className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-left px-4 py-2 font-medium text-sm text-gray-600"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-sm text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
