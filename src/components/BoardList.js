import React, { useContext } from "react";
import Board from "./Board";
import { BoardContext } from "../context/BoardContext";

const BoardList = () => {
    const { boards } = useContext(BoardContext);
    return (
        <div className="board-list">
            {boards.map(board => (
                <Board key={board.id} board={board} />
            ))}
        </div>
    );
}

export default BoardList