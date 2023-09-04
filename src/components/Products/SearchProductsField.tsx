import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProductsFieldProps {
  value: string;
  onChange: (v: string) => void;
}

const SearchProductsField = ({
  value,
  onChange,
}: SearchProductsFieldProps) => {
  return (
    <TextField
      label="Пошук продуктів за назвою/категорією"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchProductsField;
