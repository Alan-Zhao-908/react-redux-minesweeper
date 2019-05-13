import React, {Component} from 'react'
import Cell from './Cell'

const Row = ({cells}) => {
  return (

        <tr>
          {cells.map((cell,i) => (
            <Cell key={`mine-cell-${i}`} {...cell} />
          ))}
        </tr>

  )
}

export default Row;