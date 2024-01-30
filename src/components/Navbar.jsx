import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
  } from "@mui/material";

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
      <StyledToolbar>
      <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          XELLO
        </Typography>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
        <NotificationsIcon />
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
             
        </Icons>
    </StyledToolbar> 
    </AppBar>
    )
}

export default NavBar;
