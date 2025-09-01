import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
function Header() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#e6ee9c" }}>
      <AppBar position="static" sx={{ backgroundColor: "#f9fbe7" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#827717", fontWeight: "bold" }}
          >
            <ViewKanbanIcon className="mx-2" />
            Kanban Board
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
