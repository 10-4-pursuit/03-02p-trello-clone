import React from "react";
import { DragDropContext } from "react-beautiful-dnd"; 
import List from "./List";
import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';

function getRandomDate() {
  const randomYear = faker.number.int({ min: 2024, max: 2024 }); // Adjust year range as needed
  const randomMonth = faker.number.int({ min: 1, max: 12 });
  const randomDay = faker.number.int({ min: 1, max: 28 }); // Assume max 28 days for simplicity

  return `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;
}

function getRandomLabels(labelsArray) {
  const randomIndex = Math.floor(Math.random() * labelsArray.length); // Random index in the array
  return labelsArray[randomIndex];
}
const urgency  = ["Urgent", "High Priority","Medium Priority", "Low Priority", "Optional"]

const fakeName = faker.person.fullName();

export default function Board () {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [dreams, setDream] = useState([]);
  const [name, setName] = useState("Billy");

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
            json = json.map((task) => ({
...task, date: getRandomDate(), label: getRandomLabels(urgency), name: faker.person.fullName() 
            }))
            setCompleted(json.filter((task) => task.completed));
            setIncomplete(json.filter((task) => !task.completed));
          });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }, []);



    //this generates a fake name
  // const fakeName = faker.person.fullName();
  // for (const [key, value] of Object.entries(task)) {
  //   task.name = fakeName
  // }

    const handleDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      const task = findItemById(Number(draggableId), [...incomplete, ...completed]);

      if (source.droppableId === destination.droppableId) return;
  
      if (source.droppableId === "1" || source.droppableId === "2") {
        setCompleted(removeItemById(draggableId, completed));
      } else if (source.droppableId === "3") {
        setDream(removeItemById(draggableId, dreams))
      } else {
        setIncomplete(removeItemById(draggableId, incomplete));
      }
  

      //ADD ITEM
      if (destination.droppableId === "2") {
        setCompleted([{ ...task, completed: !task.completed }, ...completed]);
      } else if (destination.droppableId === "3") {
        setDream([{ ...task, }, ...dreams])
      } else {
        setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
      }
    };

    //FIND ITEM
    function findItemById(id, array) {
      return array.find((item) => item.id === id);
    }
  
    //REMOVE ITEM
    function removeItemById(id, array) {
      return array.filter((item) => item.id !== id);
    }

    return (
<DragDropContext onDragEnd={handleDragEnd} >

<h2 style={{ textAlign: "center", color: "white" }}>DREAM BOARD</h2>
<div
        style={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          flexDirection: "",
        }}
      >
         <List title={"TO DO"} tasks={incomplete} id={"1"} />
         <List title={"DONE"} tasks={completed} id={"2"} />
         <List title={"DREAM"} tasks={dreams} id={"3"} />
        </div>
</DragDropContext>     
    );
  };
  
  