import {INIT_BOARD} from '../actions/boardActions'
import defaultStore, {defaultCell} from "./defaultStore";
import {emptyBoard} from './BoardHelpers'

const minesweeperReducer = (state = defaultStore, action = {type: ""}) => {
  switch (action.type) {
    case INIT_BOARD:
      const boardSize = action.size
      const board = emptyBoard(action.size)
      action.mineLocations.forEach((coordinate) => {
        board[coordinate].hasMine = true
      })

      for(let row=0; row<boardSize; row++) {
        for (let col=0; col < boardSize; col++) {
          const coordinate = `${row},${col}`
          if (board[coordinate].hasMine) { continue;}
          let mineCount = 0;
          
          for (let x = row-1; x <= row + 1; x++) {
            for (let y = col-1; y <= col+1; y++) {
              const mineCheckCoord = `${x},${y}`
              if (board[mineCheckCoord] && board[mineCheckCoord].hasMine) {
                mineCount++
              }
            }
          }
          board[coordinate].count = mineCount;
        }
      }

      return {...state, board};
    default: 
      return state
  }
}
export default minesweeperReducer