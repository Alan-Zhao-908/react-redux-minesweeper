import {INIT_BOARD, RESET_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG,} from '../actions/boardActions'
import defaultStore, {defaultCell} from "./defaultStore";
import * as BoardHelpers from './BoardHelpers'

const minesweeperReducer = (state = defaultStore, action = {type: ""}) => {
  switch (action.type) {
    case INIT_BOARD: {
      const boardSize = action.size
      const board = BoardHelpers.emptyBoard(boardSize)
      action.mineLocations.forEach((coordinate) => {
        board[coordinate].hasMine = true
      })

      BoardHelpers.forBoardSize(boardSize, (coordinate) => {
        if (!board[coordinate].hasMine) { 
          BoardHelpers.forSurroundCells(coordinate, (mineCheckCoord) => {
            if (board[mineCheckCoord] && board[mineCheckCoord].hasMine) {
              board[coordinate].count += 1;
            }
          }) 
        }
      });


      return {...state, board};
    }

    case OPEN_CELL: {
      if (state.board[action.id].hasFlag) {
        return state;
      }
      //action.id => coordinate
      const id = action.id
      const cell = {...state.board[action.id], isOpen: true}
      const board = {...state.board, [id]: cell}
      return {...state, board};
    }

    case TOGGLE_CELL_FLAG: {
      if (state.board[action.id].isOpen) {
        return state
      }
      const id = action.id
      const cell = {...state.board[action.id], hasFlag: !state.board[action.id].hasFlag}
      const board = {...state.board, [id]: cell}
      return {...state, board};
    }
    default: 
      return state
  }
}
export default minesweeperReducer