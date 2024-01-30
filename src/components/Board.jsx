import React from "react";
import { DragDropContext } from "react-beautiful-dnd"; 
import List from "./List";
import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';

function getRandomDate() {
  const randomYear = faker.number.int({ min: 2024, max: 2024 }); 
  const randomMonth = faker.number.int({ min: 1, max: 12 });
  const randomDay = faker.number.int({ min: 1, max: 28 }); 

  return `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;
}

function getRandomLabels(labelsArray) {
  const randomIndex = Math.floor(Math.random() * labelsArray.length); 
  return labelsArray[randomIndex];
}
const urgency  = ["Urgent", "High Priority","Medium Priority", "Low Priority", "Optional"]
const fakeName = faker.person.fullName();

export default function Board () {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [dreams, setDream] = useState([]);
 
    useEffect(() => {
      try {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
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


    const handleDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      const task = findItemById(Number(draggableId), [...incomplete, ...completed, ...dreams]);

      if (source.droppableId === destination.droppableId) return;
  
      if (source.droppableId === "1") {
        setIncomplete(removeItemById(draggableId, incomplete));
      } else if (source.droppableId === "3") {
        setDream(removeItemById(draggableId, dreams))
      } else {
        setCompleted(removeItemById(draggableId, completed));
      }
  

      //ADD ITEM
      if (destination.droppableId === "2") {
        setCompleted([...completed.filter((item) => item.id !== draggableId),  { ...task, completed: !task.completed } ], );
        // setCompleted(removeItemById(draggableId, completed));
      } else if (destination.droppableId === "3") {
        setDream([...dreams.filter((item) => item.id !== draggableId), task]);
      } else {
        setIncomplete([...incomplete.filter((item) => item.id !== draggableId), { ...task, completed: !task.completed }]);
      }

      
    };

    //FIND ITEM
    function findItemById(id, array) {
      return array.find((item) => item.id === id);
    }
  
    // REMOVE ITEM
    function removeItemById(id, array) {
      console.log(typeof id, array)
      return array.filter((item) => item.id !== Number(id));
    }

    // function removeItemById(id, array) {
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i].id === id) {
    //       array.splice(i, 1); // Remove item at index i
    //       break; // Exit the loop after removing the first matching item
    //     }
    //   }
    //   return array; // Return the modified array
    // }


    return (
<DragDropContext onDragEnd={handleDragEnd} >

<h2 style={{ textAlign: "center", color: "orange" }}>DREAM BOARD</h2>
<div
        style={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          flexDirection: "",
          paddingLeft: "200px"
        }}
      >
         <List title={"TO DO"} tasks={incomplete} id={"1"} />
         <List title={"DONE"} tasks={completed} id={"2"} />
         <List title={"DREAM"} tasks={dreams} id={"3"} />
        </div>
</DragDropContext>     
    );
  };
  
  