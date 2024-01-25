import React, { useState } from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Avatar, Image } from "antd";
import { faker } from '@faker-js/faker';
import { Button, Modal, Box, Typography } from '@mui/material';
import Cards from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TextContent = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`;

//THIS CONTROLS THE BACKGROUND COLOR OF THE CARD WHEN DRAGGGING IT
function bgcolorChange(props) {

  return props.isDragging
    ? "lightgray"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#EAF4FC";
}

export default function Card ({task, index}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Cards sx={{ maxWidth: 345 }}>
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
            DUE DATE: {task.date}
            </div>
<div>
PRIORITY: {task.label}
</div>
<div>
<Button onClick={handleOpen}>View Description</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TITLE: {task.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          DUE DATE: {task.date}
          </Typography>
        </Box>
      </Modal>
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
        </Cards>   
  );
};

