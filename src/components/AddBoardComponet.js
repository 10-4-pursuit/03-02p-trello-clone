import React, {useContext, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import InputField from "./common/InputField";

const AddBoardComponet = () => {
    const { addBoard } = useContext(BoardContext);
    const [boardTitle, setBoardTitle] = useState("");

    const handleAddBoard = () => {
        if(boardTitle.trim()){
            addBoard({ title: boardTitle, cards: [], id: Date.now(), isDeleted: false, labels: [] });
            setBoardTitle('');
        }else{
            alert('Please Enter Board Name');
        }
        
    }

    return (
        <div>
            <InputField
            className="add-board-input"
            type="text"
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
            placeholder="Enter Board Name"
            />
            <button className="add-board-button" onClick={handleAddBoard}>Add Board</button>
        </div>
    )
}

export default AddBoardComponet