import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  btn: {
    paddingTop: "8.56px",
    paddingBottom: "8.56px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    textAlign: "center",
    cursor: "pointer",
    height: "31.96px",
    color: " var(--3, #202020)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "14px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "17px !important",
  },

  header_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  btn_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
}));
const CustomRadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    console.log(newValue);
  };

  const classes = useStyle();

  return (
    <Box
      sx={{
        display: "flex",
        padding: "16px 16px 20px 16px",
        gap: "10.6px",
      }}
    >
      <Box sx={{ display: "flex", gap: "13px" }}>
        <Box
          className={classes.btn}
          onClick={() => {
            handleChange(1);
          }}
          style={{
            backgroundColor: selectedValue == 1 ? "#0575FC" : "#FFF",
            color: selectedValue == 1 ? "#FFF" : "#202020",
          }}
        >
          Small
        </Box>
        <Box
          className={classes.btn}
          onClick={() => {
            handleChange(2);
          }}
          style={{
            backgroundColor: selectedValue == 2 ? "#0575FC" : "#FFF",
            color: selectedValue == 2 ? "#FFF" : "#202020",
          }}
        >
          Medium
        </Box>
        <Box
          className={classes.btn}
          onClick={() => {
            handleChange(3);
          }}
          style={{
            backgroundColor: selectedValue == 3 ? "#0575FC" : "#FFF",
            color: selectedValue == 3 ? "#FFF" : "#202020",
          }}
        >
          Large
        </Box>
      </Box>
    </Box>
  );
};

export default CustomRadioGroup;
