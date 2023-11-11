import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const DropdownSelector = ({ items, placeholder, onSelect }) => {
  // Constants for the dropdown menu
  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        // Adjust the width to match other inputs
        width: 'calc(40% - 10rem)',
        // Example calculation based on your CSS
      },
    },
  };

  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (event) => {
    const item = event.target.value;
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: '80%',
        height: '35px',
        marginLeft: '5rem',
        marginBottom: '15px',
        border: '1px solid #BBBCBC',
        borderRadius: '100px',
        background:
          'linear-gradient(90deg, rgba(136, 139, 139, 1) 40%, rgba(187, 188, 188, 1) 100%)',
        color: '#ebeef1',
        textAlign: 'center',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: '100px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#BBBCBC',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#fff', // label color
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          '&.Mui-focused': {
            color: '#fff',
          },
        },
        '& .MuiSelect-select': {
          color: selectedItem ? '#fff' : '#000',
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        '& .MuiMenuItem-root': {
          color: '#000',
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      }}
    >
      <InputLabel shrink={false} htmlFor="select-label">
        {selectedItem ? '' : placeholder}{' '}
        {/* Conditionally render label text */}
      </InputLabel>
      <Select
        sx={{ height: '100%' }}
        value={selectedItem}
        onChange={handleSelect}
        labelId="select-label"
        label=""
        MenuProps={MenuProps}
        input={<OutlinedInput notched={false} />}
        renderValue={(selected) => (
          <span style={{ color: '#fff' }}>
            {selected ? selected : placeholder}
          </span>
        )}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelector;
