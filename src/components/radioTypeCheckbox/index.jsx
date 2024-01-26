import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const ToggleableRadioButton = ({ selected, handleToggle }) => {
  return (
    <FormControlLabel
      control={
        <Radio
          color="primary"
          sx={{ width: "18px", height: "18px", marginLeft: "9px" }}
          checked={selected}
          onClick={handleToggle}
        />
      }
    />
  );
};

export default ToggleableRadioButton;
