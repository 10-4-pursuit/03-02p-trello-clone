import React from "react";
import { DragDropContext } from "react-beautiful-dnd"; 
import List from "./List";
import { useState, useEffect } from "react";



export default function Board () {
  const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    useEffect(() => {
      try {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
          })
          .then((json) => {
            setCompleted(json.filter((task) => task.completed));
            setIncomplete(json.filter((task) => !task.completed));
          });
      } catch (error) {
        console.error("Error fetching todos:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    }, []);

    const handleDragEnd = (result) => {
      const { destination, source, draggableId } = result;
  
      if (source.droppableId === destination.droppableId) return;
  
      if (source.droppableId === 2) {
        setCompleted(removeItemById(draggableId, completed));
      } else {
        setIncomplete(removeItemById(draggableId, incomplete));
      }
  
      // GET ITEM
      const task = findItemById(draggableId, [...incomplete, ...completed]);
  
      //ADD ITEM
      if (destination.droppableId === 2) {
        setCompleted([{ ...task, completed: !task.completed }, ...completed]);
      } else {
        setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
      }
    };
  
    function findItemById(id, array) {
      return array.find((item) => item.id === id);
    }
  
    function removeItemById(id, array) {
      return array.filter((item) => item.id !== id);
    }

    return (
<DragDropContext>
<h2 style={{ textAlign: "center" }}>DREAM BOARD</h2>
<div
        style={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
 <List title={"TO DO"} tasks={incomplete} id={"1"} />
         <List title={"DONE"} tasks={completed} id={"2"} />
         <List title={"DREAM"} tasks={[]} id={"3"} />
        </div>
</DragDropContext>     
    );
  };
  
  