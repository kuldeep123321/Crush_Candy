// import { useAppSelector } from "../store/hooks";
// import Tile from "./Tile";

// function Board() {
//   const board: string[] = useAppSelector(({ candyCrush: { board } }) => board);
//   const boardSize: number = useAppSelector(
//     ({ candyCrush: { boardSize } }) => boardSize
//   );
//   return (
//     <div
//       className="flex flex-wrap rounded-lg"
//       style={{
//         width: `${6.25 * boardSize}rem`,
//       }}
//     >
//       {board.map((candy: string, index: number) => (
//         <Tile candy={candy} key={index} candyId={index} />
//       ))}
//     </div>
//   );
// }

// export default Board;

import React from 'react';
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

// Define the structure of your state for better type safety
interface CandyCrushState {
  board: string[];
  boardSize: number;
}

function Board() {
  // Type the selector to match your state shape
  const board: string[] = useAppSelector(
    (state: { candyCrush: CandyCrushState }) => state.candyCrush.board
  );

  const boardSize: number = useAppSelector(
    (state: { candyCrush: CandyCrushState }) => state.candyCrush.boardSize
  );

  return (
    <div
      className="flex flex-wrap rounded-lg"
      style={{
        width: `${6.25 * boardSize}rem`,
      }}
    >
      {board.map((candy: string, index: number) => (
        <Tile candy={candy} key={index} candyId={index} />
      ))}
    </div>
  );
}

export default Board;
