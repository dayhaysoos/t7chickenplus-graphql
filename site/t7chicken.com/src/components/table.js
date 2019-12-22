/**@jsx jsx */
import { useMemo } from 'react'
import { jsx } from 'theme-ui'
import { useTable, useFlexLayout } from 'react-table'
import ReactTable from 'react-table'

const Table = props => (
  <div
    {...props}
    sx={{
      borderSpacing: 0,
      border: '1px solid black',
      display: 'block',
      overflow: 'auto',
      height: '400px',
    }}
  />
)

const Thead = props => (
  <div
    {...props}
    sx={{
      '&:last-child': {
        display: 'block',
      },
    }}
  />
)

const Td = props => (
  <div
    {...props}
    sx={{
      margin: 0,
      padding: '0.5 rem',
      borderBottom: '1px solid black',
      borderRight: '1px solid black',
      position: 'relative',
    }}
  />
)

const Th = props => (
  <div
    {...props}
    sx={{
      margin: 0,
      padding: '0.5 rem',
      borderBottom: '1px solid black',
      borderRight: '1px solid black',
      position: 'relative',
    }}
  />
)

const Tbody = props => (
  <div
    {...props}
    sx={{
      overflowY: 'scroll',
      overflowX: 'hidden',
      width: '100%',
      height: '400px',
    }}
  />
)

const CharacterTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout
  )

  const Tr = props => (
    <div
      {...props}
      sx={{
        minWidth: '180px',
        width: '100%',
      }}
    />
  )

  return (
    <Table {...getTableProps()}>
      <div>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
      </div>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default CharacterTable
