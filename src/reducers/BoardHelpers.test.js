import {emptyBoard} from './BoardHelpers'



describe("emptyBoard", () => {
  it("builds an object with 3x3 9 keys", () => {
    expect(Object.keys(emptyBoard(9)).length).toEqual(81);
    expect(emptyBoard(9)["3,3"]).toBeDefined();
    expect(emptyBoard(9)["18,18"]).not.toBeDefined();
    expect(emptyBoard(9)["3,3"].id).toEqual('3,3');

  });
  it("sets the properties of each cell", () => {
    expect(Object.keys(emptyBoard(9)["3,3"])).toEqual(["hasMine", "hasFlag", "isOpen", "count", 'id'])
  })
})