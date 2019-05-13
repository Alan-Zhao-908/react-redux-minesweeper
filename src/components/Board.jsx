import React, {Component} from 'react'
import Row from './Row'


const Board = ({table}) => {
  return (
    <table className='Table'> 
      <tbody>
        {table.map((cells, i) => (
          <Row cells={cells} key = {`mine-row-${i}`} />
        ))}
      </tbody>
    </table>
  )
}

export default Board;