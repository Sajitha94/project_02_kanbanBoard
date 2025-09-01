import React, { Children, createContext, useContext, useEffect } from "react";
import { useState } from "react";

const LocalStorageKanban = createContext();

export function LocalStorageDB({ children }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <LocalStorageKanban.Provider
      value={{ open, setOpen, handleClose, handleClickOpen }}
    >
      {children}
    </LocalStorageKanban.Provider>
  );
}

export const useKanban = () => useContext(LocalStorageKanban);
