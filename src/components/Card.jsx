import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Avatar, Image } from "antd";
import { faker } from '@faker-js/faker';


//THIS PROVIDES THE STYLING
const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`;

//THIS CONTROLS THE BACKGROUND COLOR OF THE CARD WHEN DRAGGGING IT
function bgcolorChange(props) {

  return props.isDragging
    ? "lightgreen"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#EAF4FC";
}

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

export default function Card ({task, index}) {

  for (const [key, value] of Object.entries(task)) {
    task.name = faker.person.fullName();
  }

  const randomDate = getRandomDate();
  const labels = ["Urgent", "High Priority","Medium Priority", "Low Priority", "Optional"]
  const randomLabels = getRandomLabels(labels);

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
    {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >

<div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task.id}
                {"  "}
              </small>
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <TextContent>
              <div>
            TITLE: {task.title}
            </div>
            COMMENTS: {task.body}
            <div>
            NAME:{task.name}
            </div>
            <div>
            DUE DATE: {randomDate}
            </div>
<div>
PRIORITY: {randomLabels}
</div>
            </TextContent>
            </div>
            <Icons>
            <div>
              <Avatar
                src={"https://joesch.moe/api/v1/random?key=" + task.id}
              />
            </div>
          </Icons>

    </Container>
    )}
        </Draggable>    
  );
};

