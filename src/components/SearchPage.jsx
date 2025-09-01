import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchPage() {
  const [status, setStatus] = useState("");
  const [priorities, SetPriorities] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handlePrioritiesChange = (event) => {
    SetPriorities(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        marginLeft: "10px",
        marginRight: "10px",
        gap: "3px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search
          sx={{
            width: { sm: "50vw !important", xs: "60vw !important" },
            height: { sm: "9vh" },
            border: "2px solid #d1c4e9",
            color: "#424242",
            backgroundColor: "white",
            display: "flex",
            borderRadius: "20px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            sx={{
              height: {
                xs: "40px  !important",
                md: "45px !important",
                lg: "50px !important",
              },
              backgroundColor: "#7e57c2",
              fontSize: { sm: "14px", xs: "13px" },
              textTransform: "none",
            }}
          >
            <AddIcon sx={{ display: { xs: "none", lg: "flex" } }} />
            Add New
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={status}
            onChange={handleStatusChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              height: { xs: "7vh !important", sm: "9vh !important" },
              border: "2px solid #d1c4e9",
              "& fieldset": { border: "none" },
              color: "#424242",
              backgroundColor: "white",
              borderRadius: "10px",
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

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={priorities}
            onChange={handlePrioritiesChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              height: { xs: "7vh  !important", sm: "9vh !important" },
              color: "#424242",
              backgroundColor: "white",
              border: "2px solid #d1c4e9",
              "& fieldset": { border: "none" },
              borderRadius: "10px",
            }}
          >
            <MenuItem value="">
              <em>All priorities</em>
            </MenuItem>
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SearchPage;
