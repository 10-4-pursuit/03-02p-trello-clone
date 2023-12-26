import { useState } from "react";
import { useBoard } from "../context/BoardContext";
import Button from "./common/Button";
import InputField from "./common/InputField";
import './AddBoardComponent.css';
import './common/Button.css';
import './common/InputField.css';


export const AddBoardComponent = () => {
    const { addBoard } = useBoard();
    const [boardName, setBoardName] = useState("");

    const hanldeAddBoard = () => {
        if(boardName.trim()){
            addBoard({ title: boardName, cards: [], id: Date.now()});
            setBoardName('');
        }
        
    }

    return (
        <div className="add-board-container">
            <InputField
            className="add-board-input"
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="Enter Board Name"
            />
            <Button className="add-board-button" onClick={hanldeAddBoard}>Add Board</Button>
        </div>
    )
}