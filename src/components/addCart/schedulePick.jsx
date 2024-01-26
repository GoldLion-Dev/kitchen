import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  btn: {
    padding: "10px 24px",
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
        flexWrap: "wrap",
        gap: "9px",
      }}
    >
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
        Daily
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
        Alternate Day
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
        Weekly
      </Box>
      <Box
        className={classes.btn}
        onClick={() => {
          handleChange(4);
        }}
        style={{
          backgroundColor: selectedValue == 4 ? "#0575FC" : "#FFF",
          color: selectedValue == 4 ? "#FFF" : "#202020",
        }}
      >
        Every 3 Days
      </Box>
      <Box
        className={classes.btn}
        onClick={() => {
          handleChange(5);
        }}
        style={{
          backgroundColor: selectedValue == 5 ? "#0575FC" : "#FFF",
          color: selectedValue == 5 ? "#FFF" : "#202020",
        }}
      >
        Monthly
      </Box>
    </Box>
  );
};

export default CustomRadioGroup;
