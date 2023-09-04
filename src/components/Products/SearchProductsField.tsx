import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

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
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => onChange('')}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      fullWidth
    />
  );
};

export default SearchProductsField;
