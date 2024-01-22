import React from "react";

export default function CardLabel({ initialLabels, onLabelsChange }) {
    const [labels, setLabels] = React.useState(initialLabels || []);
    const [newLabel, setNewLabel] = React.useState('');

    const handleAddLabel = (event) => {
        event.preventDefault();
        if (newLabel) {
            const updatedLabels = [...labels, newLabel];
            setLabels(updatedLabels);
            onLabelsChange(updatedLabels);
            setNewLabel('');
        }
    };

    return (
        <div>
            <form onSubmit={handleAddLabel}>
                <input
                    type="text"
                    value={newLabel}
                    onChange={(event) => setNewLabel(event.target.value)}
                    placeholder="Add a label"
                />
                <button type="submit">Add</button>
            </form>
            <div>
                {labels.map((label, index) => <span key={index}>{label}</span>)}
            </div>
        </div>
    );
}