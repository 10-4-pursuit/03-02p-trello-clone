import React from "react";

export default function CardComments({ comments }) {

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(new Date(date));
    };

    return (
        <div className="card-comments">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                <p>{comment.text}</p>
                <span className="timestamp">{formatDate(comment.timestamp)}</span>
                </div>
            ))}
        </div>
    );
}