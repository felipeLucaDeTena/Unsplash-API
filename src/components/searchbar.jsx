import { TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { getQueryPhotos } from "../services/api";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getQueryPhotos(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults([]);
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
      {results.map((result) => (
        <div key={result.id}>
          <h4>{result.title}</h4>
          <img src={result.urls.small} alt="none" />
        </div>
      ))}
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
