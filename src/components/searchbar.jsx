import { TextField } from "@mui/material";

function SearchBar({ setSearchTerm }) {
  const handleChange = (e) => {
    console.log(e);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TextField
        onChange={(e) => handleChange(e)}
        size="small"
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          width: 500,
        }}
        id="outlined-basic"
        label="Search Photos"
        variant="outlined"
      />
    </div>
  );
}

export default SearchBar;
