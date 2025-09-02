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

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
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
  const [dueDate, setDueDate] = React.useState(dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const cancelClick = () => {
    // setErrors({ title: "", description: "", tags: "" });
    handleClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new task</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="subscription-form">
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
              }}
            >
              <Box>
                <Typography>Status</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      height: { xs: "7vh !important", sm: "9vh !important" },
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
              <Box>
                <Typography>Priority</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      height: { xs: "7vh !important", sm: "9vh !important" },
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
              <Box>
                <Typography>Due date</Typography>
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
              <Typography>Tags (comma separated)</Typography>
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
              color: "red",
              color: "#9575cd",
              border: "1px solid #d1c4e9",
              textTransform: "none",
              gap: 0.5,
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
