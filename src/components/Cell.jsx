import React, {Component} from 'react'

const Cell = ({count, hasMine, isOpen}) => {
  return (
    <td className='Cell'>
      <div className='Cell__cover Cell__cover--opened'>
      {!hasMine && 
        <span className={`Cell__number${count}`}>
          {count}
        </span>}
      {hasMine && <span className={`Cell__bomb`}>b</span>}
      </div>
    </td>

  )
}

export default Cell;