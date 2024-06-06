// import { useEffect } from "react";
// import Board from "./components/Board";
// import { moveBelow, updateBoard } from "./store";
// import { useAppDispatch, useAppSelector } from "./store/hooks";
// import { createBoard } from "./utils/createBoard";
// import {
//   formulaForColumnOfFour,
//   formulaForColumnOfThree,
//   generateInvalidMoves,
// } from "./utils/formulas";
// import {
//   checkForColumnOfThree,
//   checkForRowOfFour,
//   checkForRowOfThree,
//   isColumnOfFour,
// } from "./utils/moveCheckLogic";

// function App() {
//   const dispatch = useAppDispatch();
//   const board = useAppSelector(({ candyCrush: { board } }) => board);
//   const boardSize = useAppSelector(
//     ({ candyCrush: { boardSize } }) => boardSize
//   );

//   useEffect(() => {
//     dispatch(updateBoard(createBoard(boardSize)));
//   }, [dispatch, boardSize]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const newBoard = [...board];
//       isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
//       checkForRowOfFour(
//         newBoard,
//         boardSize,
//         generateInvalidMoves(boardSize, true)
//       );
//       checkForColumnOfThree(
//         newBoard,
//         boardSize,
//         formulaForColumnOfThree(boardSize)
//       );
//       checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
//       dispatch(updateBoard(newBoard));
//       dispatch(moveBelow());
//     }, 150);
//     return () => clearInterval(timeout);
//   }, [board, dispatch, boardSize]);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Board />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import Board from "./components/Board";
import { moveBelow, updateBoard } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createBoard } from "./utils/createBoard";
import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
  generateInvalidMoves,
} from "./utils/formulas";
import {
  checkForColumnOfThree,
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOfFour,
} from "./utils/moveCheckLogic";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  
  // Ensure the state types are correct
  const board = useAppSelector((state: { candyCrush: { board: string[] } }) => state.candyCrush.board);
  const boardSize = useAppSelector((state: { candyCrush: { boardSize: number } }) => state.candyCrush.boardSize);

  // Initialize the board on first render
  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [dispatch, boardSize]);

  // Check for matches and move candies below periodically
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      checkForColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
    }, 150);
    return () => clearTimeout(timeout);
  }, [board, dispatch, boardSize]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
};

export default App;
