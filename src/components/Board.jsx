import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Cell from '../containers/Cell'

const Board = ({table}) => {
  return (
    <table className='Table'> 
      <tbody>
        {table.map((cells,row) => (
           <tr key={`mine-cell-${row}`}>
            {cells.map((cell) => (
              <Cell key={`mine-cell-${cell.id}`} {...cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
// Board.propTypes = {
//   table: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape(...Cell.propTypes)
//     )
//   ).isRequired
// }


export default Board;