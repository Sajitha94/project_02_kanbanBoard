import React, { Children, createContext, useContext, useEffect } from "react";
import { useState } from "react";

const LocalStorageKanban = createContext();

export function LocalStorageDB({ children }) {
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);
  const [viewOnly, setViewOnly] = useState(false);
  const [editBoardId, setEditBoardId] = useState(null);
  const defaultBoard = [
    {
      id: 1,
      title: "Welcome to Notes",
      description:
        "This is an example note. Use the + button to create notes, add tags (comma separated), and try pinning/archiving/trashing.",
      status: "todo",
      priority: "low",
      date: "01/02/2012",
      tags: ["welcome", "example"],
    },
  ];

  useEffect(() => {
    const storeBoard = JSON.parse(localStorage.getItem("Boards")) || [];
    if (storeBoard.length === 0) {
      setBoards(defaultBoard);
      localStorage.setItem("Boards", JSON.stringify(defaultBoard));
    } else {
      setBoards(storeBoard);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Boards", JSON.stringify(boards));
  }, [boards]);

  const handleClose = () => {
    setEditBoardId(null);
    setOpen(false);
  };
  const handleClickOpen = (id = null, viewOnly = false) => {
    setEditBoardId(id);
    setOpen(true);
    setViewOnly(viewOnly);
  };
  return (
    <LocalStorageKanban.Provider
      value={{
        open,
        setOpen,
        handleClose,
        handleClickOpen,
        boards,
        setBoards,
        viewOnly,
        setViewOnly,

        editBoardId,
        setEditBoardId,
      }}
    >
      {children}
    </LocalStorageKanban.Provider>
  );
}

export const useKanban = () => useContext(LocalStorageKanban);
