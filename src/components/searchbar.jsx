import { TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { getQueryPhotos } from "../services/api";

function SearchBar({ setData, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getQueryPhotos(debouncedSearchTerm).then((resp) => {
        setIsSearching(false);
        setData(resp.data);
      });
    } else {
      setData([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);
  return (
    <div>
      <TextField
        onChange={(e) => setSearchTerm(e.target.value)}
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

      {isSearching && <div>Searching ...</div>}
    </div>
  );
}

// Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
export default SearchBar;
