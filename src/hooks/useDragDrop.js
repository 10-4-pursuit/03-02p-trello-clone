const useDragDrop = (setLists) => {

    const cardDragStart = (e, cardId) => {
        e.dataTransfer.setData("cardId", cardId.toString());
    };

    const cardDragOver = (e) => {
        e.preventDefault();
    };

    const cardDrop = (e, targetListId) => {
        const cardId = parseInt(e.dataTransfer.getData("cardId"));

        setLists((prevLists) => {
            let sourceListIndex, targetListIndex;
            let card, sourceList;

            for (let i = 0; i < prevLists.length; i++) {
                if (prevLists[i].cards.some(c => c.id === cardId)) {
                    sourceList = prevLists[i];
                    sourceListIndex = i;
                }
                if (prevLists[i].id === targetListId) {
                    targetListIndex = i;
                }
            }

            // Check if card and target list are found and source is different from target
            if (card && sourceList && sourceListIndex !== targetListIndex) {
                card = sourceList.cards.find(c => c.id === cardId);
                const newSourceCards = sourceList.cards.filter(c => c.id !== cardId);

                const newLists = [...prevLists];
                newLists[sourceListIndex] = { ...sourceList, cards: newSourceCards };
                newLists[targetListIndex] = { ...newLists[targetListIndex], cards: [...newLists[targetListIndex].cards, card] };

                return newLists;
            }

            return prevLists;
        });
    };

    return { cardDragStart, cardDragOver, cardDrop };
};

export default useDragDrop;

