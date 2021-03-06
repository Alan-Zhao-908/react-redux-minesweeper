import minesweeperReducer, {emptyBoard} from "./minesweeperReducer";
import {INIT_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG} from '../actions/boardActions'
import defaultStore from './defaultStore'

it("defines a board", () => {
  expect(minesweeperReducer().board).toBeDefined();
});

describe('board actions', () => {
  const initAction = {
    type: INIT_BOARD,
    size: 3,
    mineLocations: ["1,1", "2,2"]
  }
  let initState;
  beforeEach(()=> {
    initState = minesweeperReducer(defaultStore, initAction);
  })

  describe ("INIT_BOARD", () => {

    it ("sets the correct true hasMine values for the board", () => {
      expect(initState.board).toBeDefined();
      expect(initState.board["1,1"].hasMine).toEqual(true)
      expect(initState.board["2,2"].hasMine).toEqual(true)
    })
  
    it ("sets the correct false hasMine values for the board", () => {
      expect(initState.board["0,0"].hasMine).toEqual(false)
      expect(initState.board["0,1"].hasMine).toEqual(false)
      expect(initState.board["1,2"].hasMine).toEqual(false)
      expect(initState.board["2,1"].hasMine).toEqual(false)
      expect(initState.board["0,2"].hasMine).toEqual(false)
      expect(initState.board["2,0"].hasMine).toEqual(false)
    })
  
    it ("sets the correct false isOpen values for the board", () => {
      expect(initState.board["0,0"].isOpen).toEqual(false)
      expect(initState.board["0,1"].isOpen).toEqual(false)
      expect(initState.board["1,2"].isOpen).toEqual(false)
      expect(initState.board["2,1"].isOpen).toEqual(false)
      expect(initState.board["0,2"].isOpen).toEqual(false)
      expect(initState.board["2,0"].isOpen).toEqual(false)
    })
  
    it ("sets the correct true hasMine values for the board", () => {
      expect(initState.board["0,0"].count).toEqual(1)
      expect(initState.board["0,1"].count).toEqual(1)
      expect(initState.board["0,2"].count).toEqual(1)
      expect(initState.board["1,0"].count).toEqual(1)
      expect(initState.board["1,2"].count).toEqual(2)
      expect(initState.board["2,0"].count).toEqual(1)
    })
  })

  describe('open cell', () => {
    const openAction = {
      type: OPEN_CELL,
      id: '0,1'
    }
    it('sets isOpen for id', () => {
      const newState = minesweeperReducer(initState, openAction);
      expect(newState.board['0,1'].isOpen).toEqual(true);
    })
    describe('when hasFlag is true', () => {
      let hasFlagState;
      beforeEach(()=> {
        const toggleAction = {type: TOGGLE_CELL_FLAG, id: '0,1'}
        hasFlagState = minesweeperReducer(initState, toggleAction);
      })

      it('does not set isOpen', () => {
        const newState = minesweeperReducer(hasFlagState, openAction);
        expect(newState.board['0,1'].hasFlag).toEqual(true);
        expect(newState.board['0,1'].isOpen).toEqual(false);
      })
    })
  })

  describe('toggle_cell_flag', () => {
    const toggleAction = {type: TOGGLE_CELL_FLAG, id: '0,1'}
    describe('when isFlag is false', () => {
      it('sets isFlag for id', () => {
        const newState = minesweeperReducer(initState, toggleAction);
        expect(newState.board['0,1'].hasFlag).toEqual(true);
      })
    })
    describe('when isFlag is true', () => {
      let toggledState
      beforeEach(() => {
        toggledState = minesweeperReducer(initState, toggleAction);
      })
      it('sets isFlag for id', () => {
        const newState = minesweeperReducer(toggledState, toggleAction);
        expect(newState.board['0,1'].hasFlag).toEqual(false);
      })
    })
  })


})