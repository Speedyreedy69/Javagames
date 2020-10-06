const { expect } = require("@jest/globals");
const checkWin = require("../tictactoe");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
describe("checkWin function", () => {
    test("Given someone has won output = true", () => {
        expect(checkWin(winningCombos,[0, 1, 2])).toEqual(true);
    });
    test("Given someone has won in a random order in 3 moves output = true", () => {
        expect(checkWin(winningCombos,[0, 2, 1])).toEqual(true);
    });
    test("Given someone has won in a random order output = true", () => {
        expect(checkWin(winningCombos,[0, 4, 2, 1])).toEqual(true);
    });
    test("Given someone has won in a random order output = true", () => {
        expect(checkWin(winningCombos,[3, 4, 2, 1, 0])).toEqual(true);
    });
    test("Given the user hasnt entered a winning combo output = false", () => {
        expect(checkWin([1, 2, 3])).toEqual(false);
    });
    test("Given no one wins output = false", () => {
        expect(checkWin([1, 2, 3, 4])).toEqual(false);
    });
    test("Given no one wins output = false", () => {
        expect(checkWin([])).toEqual(false);
    });
})