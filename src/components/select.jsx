import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectComponent({ sortType, setSortType }) {
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
      }}
      size="small"
    >
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        }}
        value={sortType}
        labelId="demo-select-small"
        id="demo-select-small"
        label="Age"
        onChange={(e) => setSortType(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="likes">Likes</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="size">Size</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
