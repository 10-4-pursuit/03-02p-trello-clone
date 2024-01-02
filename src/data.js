// cardData

const cardData = [
    {
        id: 1,
        title: "First card",
        description: "This is a first card",
        listId: 1,
        boardId: 1,
        comments: [{
            id: 1,
            text: "Comment 1",
            userId: 1
        }],
        labels: [{
            id: 1,
            name: "Label 1",
            color: "#f44336"
        }],
        priority: "low",
        completed: false,
        archived: false,
        dueDate: "YYYY-MM-DD",
        members: [{
            id: 1,
            name: "Member 1",
            avatar: "https://example.com/avatar.png"
        }],
        subtasks: [{
            id: 1,
            title: "Subtask 1",
            completed: false
        }],
        checklist: [{
            id: 1,
            item: "Checklist item 1",
            checked: false
        }],
        attachments: [{
            id: 1,
            title: "Attachment 1",
            url: "https://example.com/attachment.pdf",
            createdAt: "YYYY-MM-DD",
            updatedAt: "YYYY-MM-DD"
        }],
        createdAt: "YYYY-MM-DD",
        updatedAt: "YYYY-MM-DD",
        activityLog: [
            {
                id: 1,
                userId: 1,
                action: "create card",
                createdAt: "YYYY-MM-DD",
            },
            {
                id: 2,
                userId: 2,
                action: "update priority",
                detail: "Changed from 'low' to 'high'",
                updatedAt: "YYYY-MM-DD",
            }
        ],
        color: "#ff0000",   
    }
]

export default cardData;