import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function SingleRangeSlider({ getRangesFromSliders }) {
    const [value, setValue] = React.useState(3); // Initial value set to 3
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      getRangesFromSliders(newValue);
    };
  
    return (
        <Box sx={{ width: '29em' }}> {/* Adjusted width to match dropdown lists */}
        <Slider
          sx={{
            height: 35,
            width: '100%',  // Make sure the slider takes the full width of the Box
            color: '#0f4c81',
            '& .MuiSlider-markLabel': {  // Target the mark labels
              marginTop: '20px'  // Increase the top margin to push labels further away
            }
          }}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={[
            { value: 3, label: '3' },  // Minimum value mark
            { value: 100, label: '100' }  // Maximum value mark
          ]}
          step={5}
          min={3}  // Minimum value set to 3
          max={100}  // Maximum value set to 100
        />
      </Box>
    );
}
