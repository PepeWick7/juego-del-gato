import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    //All possible combinations are checked
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //if there is no winner
    return null;
  };


  export const checkEndGame = (newBoard) => {
    //Check if there is a tie
    //Check that there are no empty spaces on the board
    return newBoard.every((square) => square != null);
  }