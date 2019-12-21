/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useTable } from 'react-table'

const Table = props => (
  <table
    {...props}
    sx={{
      borderSpacing: 0,
      border: '1px solid black',
    }}
  />
)

const Thead = props => (
  <thead
    {...props}
    sx={{
      '&:last-child': {
        borderBottom: 0,
      },
    }}
  />
)

const Td = props => (
  <td
    {...props}
    sx={{
      margin: 0,
      padding: '0.5 rem',
      borderBottom: '1px solid black',
      borderRight: '1px solid black',
    }}
  />
)

const Th = props => <th {...props} sx={{ border: '1px solid black' }} />

const CharacterTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </tr>
        ))}
      </Thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

// const Table = ({ columns, data }) => {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   })

//   // Render the UI for your table
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row)
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => {
//                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }

export default CharacterTable
