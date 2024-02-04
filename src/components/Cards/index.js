import React from "react";
import CardComment from "../CardComment";
import CardDescription from "../CardDescription";
import CardLabel from "../CardLabel";

export default function Cards({ title, description, initialComments, dueDate, initialLabels }) {

    const [inputTitle, setInputTitle] = React.useState(title);
    const [inputDescription, setInputDescription] = React.useState(description);
    const [inputComment, setInputComment] = React.useState("");
    const [inputDueDate, setInputDueDate] = React.useState(dueDate);
    const [comments, setComments] = React.useState(initialComments || []);
    const [labels, setLabels] = React.useState(initialLabels || []);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (inputComment.trim() !== "") {
            const newComment = {
                text: inputComment,
                timestamp: new Date()
            };
            setComments([...comments, newComment]);
            setInputComment("");
        }
    };
    
    return (
        <div>
            <h3>{inputTitle}</h3>
            <CardDescription description={inputDescription} />
            <CardComment comments={comments} />

            <CardLabel initialLabels={labels} onLabelsChange={setLabels} />

            <form onSubmit={handleCommentSubmit}>
                <input 
                type="text"
                value={inputTitle}
                onChange={(event) => setInputTitle(event.target.value)}
                placeholder="Title"
                />
                <textarea
                value={inputDescription}
                onChange={(event) => setInputDescription(event.target.value)}
                placeholder="Description"
                />
                <textarea
                value={inputComment}
                onChange={(event) => setInputComment(event.target.value)}
                placeholder="Add a comment"
                />
                <input
                type="date"
                value={inputDueDate}
                onChange={(event) => setInputDueDate(event.target.value)}
                />
               <button type="submit">Add Comment</button>
            </form>

        </div>
    )
}