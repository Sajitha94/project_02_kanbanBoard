import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import { useKanban } from "./LocalStorageDB";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
function ToDoCard() {
  const { handleClickOpen, boards, setBoards, searchTerm, status, priorities } =
    useKanban();
  const [open, setOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const ButtonOnclick = (btn, id) => {
    if (btn === "edit") {
      handleClickOpen(id);
    } else if (btn === "delete") {
      const deleteData = boards.filter((item) => item.id !== id);
      setBoards(deleteData);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCardId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedCardId) {
      ButtonOnclick("delete", selectedCardId);
    }
    setOpen(false);
    setSelectedCardId(null);
  };

  const handleDeleteClick = (id) => {
    setSelectedCardId(id); // remember which card
    setOpen(true); // open confirmation modal
  };
  const viewCard = (id) => {
    handleClickOpen(id, true);
  };

  const filteredBoards = boards.filter((item) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesStatus = status === "" || item.status === status;
    const matchesPriority = priorities === "" || item.priority === priorities;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setBoards((prev) =>
      prev.map((card) =>
        card.id.toString() === draggableId
          ? { ...card, status: destination.droppableId }
          : card
      )
    );
  };

  const renderColumn = (colId, colTitle) => (
    <Droppable droppableId={colId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            backgroundColor: "#f0f4f4",
            padding: "20px 30px",
            borderRadius: "10px",
            width: 350,
            minHeight: 450,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              paddingBottom: "10px",
              color: "#00695c",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {colTitle}
          </Typography>
          {filteredBoards
            .filter((card) => card.status === colId)
            .map((card, idx) => (
              <Draggable
                key={card.id.toString()}
                draggableId={card.id.toString()}
                index={idx}
              >
                {(provided) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                      width: 275,
                      height: "350px",
                      borderLeft: "5px solid #00796b",
                      borderRadius: "5px",
                    }}
                    key={idx}
                  >
                    <CardContent
                      sx={{
                        height: "280px",
                        overflowY: "auto",
                        pr: 1,
                        scrollbarWidth: "none",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          gutterBottom
                          sx={{
                            fontWeight: "bold",
                            wordBreak: "break-word",
                            overflowWrap: "anywhere",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <LaunchIcon
                          className="text-gray-600 "
                          sx={{ cursor: "pointer" }}
                          onClick={() => viewCard(card.id)}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: "#616161",
                          mb: 1.5,
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        <Chip
                          label={card.priority}
                          sx={{
                            backgroundColor: "#e0f2f1",
                            border: "1px solid #ccc",
                            color: "#424242",
                            fontWeight: "bold",
                            fontSize: "13px",
                            padding: "4px",
                          }}
                        />
                        {card.tags.map((item, idx) => (
                          <Chip
                            key={idx}
                            label={item}
                            icon={<LocalOfferIcon sx={{ width: "13px" }} />}
                            sx={{
                              backgroundColor: "white",
                              border: "1px solid #ccc",
                              color: "#616161",
                              fontWeight: "bold",
                              fontSize: "11px",
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "40px",
                        margin: 0,
                        color: "#616161",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px" }}>
                          updated
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          {card.date}{" "}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          gap: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <EditIcon
                          onClick={() => ButtonOnclick("edit", card.id)}
                        />
                        <DeleteIcon
                          onClick={() => handleDeleteClick(card.id)} // ✅ pass card.id
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    </CardActions>
                  </Card>
                )}
              </Draggable>
            ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            marginTop: "30px",
            padding: { sm: "10px", xs: "5px" },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            justifyItems: "center",
          }}
        >
          {renderColumn("todo", "To Do")}
          {renderColumn("process", "In Process")}
          {renderColumn("done", "Done")}
        </Box>
      </DragDropContext>

      {/* 🔹 Global confirmation dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this card?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ToDoCard;
