import React from "react";
import TextField from "@mui/material/TextField";

const HiddenLabelTextField = () => {
  const [isFocused, setFocused] = React.useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <TextField
      label="Your Label"
      variant="outlined"
      fullWidth
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputLabelProps={{
        shrink:
          isFocused || Boolean(/* add condition to keep label if needed */),
      }}
    />
  );
};

export default HiddenLabelTextField;
