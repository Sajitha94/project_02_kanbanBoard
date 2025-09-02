import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useKanban } from "./LocalStorageDB";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  padding: "10px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  fontFamily: "inherit",
  fontSize: "14px",
  "&:hover": {
    border: "2px solid #80cbc4",
  },
  "&:focus": {
    border: "2px solid #4db6ac",
    outline: "none",
  },
}));

function AddNew() {
  const { open, handleClose, handleClickOpen } = useKanban();
  const [dueDate, setDueDate] = useState(dayjs());
  const [selectStatus, setselectStatus] = useState("");
  const [selectPriority, setSelectPriority] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  const SelectStatusChange = (event) => {
    setselectStatus(event.target.value);
  };
  const SelectPriorityChange = (event) => {
    setSelectPriority(event.target.value);
  };

  const cancelClick = () => {
    // setErrors({ title: "", description: "", tags: "" });
    handleClose();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Create a new task</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            id="subscription-form"
            className="flex flex-col justify-center  gap-4"
          >
            <TextField
              autoFocus
              required
              fullWidth
              name="title"
              placeholder="Title"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { border: "2px solid #80cbc4" },
                  "&.Mui-focused fieldset": { border: "2px solid #4db6ac" },
                  "& fieldset": {
                    border: "2px solid #ccc",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#ccc",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#80cbc4",
                },
              }}
            />

            <StyledTextarea
              name="description"
              maxRows={10}
              minRows={4}
              aria-label="description"
              placeholder="Write your note here..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  gap: "5px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#616161" }}>
                    Status
                  </Typography>
                  <FormControl sx={{ m: 1, width: "100%", margin: 0 }}>
                    <Select
                      value={selectStatus}
                      onChange={SelectStatusChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        border: "2px solid #ccc",
                        "& fieldset": { border: "none" },
                        color: "#424242",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "&:hover": {
                          border: "2px solid #80cbc4",
                        },
                        "&.Mui-focused": {
                          border: "2px solid #4db6ac",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>All Statuses</em>
                      </MenuItem>
                      <MenuItem value={"todo"}>To Do</MenuItem>
                      <MenuItem value={"process"}>In Progress</MenuItem>
                      <MenuItem value={"done"}>Done</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#616161" }}>
                    Priority
                  </Typography>
                  <FormControl sx={{ m: 1, width: "100%", margin: 0 }}>
                    <Select
                      value={selectPriority}
                      onChange={SelectPriorityChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        border: "2px solid #ccc",
                        "& fieldset": { border: "none" },
                        color: "#424242",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "&:hover": {
                          border: "2px solid #80cbc4",
                        },
                        "&.Mui-focused": {
                          border: "2px solid #4db6ac",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>All Statuses</em>
                      </MenuItem>
                      <MenuItem value={"low"}>Low</MenuItem>
                      <MenuItem value={"medium"}>Medium</MenuItem>
                      <MenuItem value={"high"}>Hign</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#616161" }}>
                  Due date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dueDate}
                    onChange={(newValue) => setDueDate(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        sx: {
                          "& .MuiPickersOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                          "& .MuiPickersOutlinedInput-notchedOutline": {
                            borderColor: "#ccc",
                            borderWidth: "2px",
                          },
                          "& .MuiPickersOutlinedInput-root:hover .MuiPickersOutlinedInput-notchedOutline":
                            {
                              borderColor: "#80cbc4",
                            },
                          "& .MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline":
                            {
                              borderColor: "#4db6ac !important",
                            },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#616161" }}>
                Tags (comma separated)
              </Typography>
              <TextField
                fullWidth
                name="Tags"
                placeholder="Tags"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { border: "2px solid #80cbc4" },
                    "&.Mui-focused fieldset": { border: "2px solid #4db6ac" },
                    "& fieldset": {
                      border: "2px solid #ccc",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#ccc",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#80cbc4",
                  },
                }}
              />
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancelClick}
            sx={{
              color: "red",
              borderColor: "red",
              border: "1px solid #d1c4e9",
              textTransform: "none",
              gap: 0.5,
            }}
          >
            <CancelIcon sx={{ width: 20, height: 20 }} />
            Cancel
          </Button>
          {/* {!viewOnly && ( */}
          <Button
            type="submit"
            form="add-form"
            sx={{
              color: "white",
              borderRadius: "5px",
              textTransform: "none",
              gap: 0.5,
              backgroundColor: "#00695c",
            }}
          >
            {/* {noteToEdit ? (
                    <SaveAsIcon sx={{ width: 20, height: 20 }} />
                  ) : (
                    <SaveIcon sx={{ width: 20, height: 20 }} />
                  )}
                  {noteToEdit ? "Upadate" : "Save"} */}
            Save
          </Button>
          {/* )} */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddNew;
