import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import WeekPicker from "@mui/lab/WeekPicker";

const CustomWeekPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <WeekPicker
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              {...startProps}
              variant="standard"
              margin="normal"
              helperText=""
            />
            <TextField
              {...endProps}
              variant="standard"
              margin="normal"
              helperText=""
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomWeekPicker;
