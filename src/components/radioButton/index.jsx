import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  btn: {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    textAlign: "center",
    cursor: "pointer",
    color: " var(--3, #202020)",
    fontFamily: "Metropolis !important",
    fontSize: "14px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "1 !important",
  },

  header_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  btn_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  subScribe_box: {
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    padding: "8px 18px",
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
        flexDirection: "column",
        gap: "10.6px",
        width: "100%",
      }}
    >
      <Typography sx={{ lineHeight: "1" }} className={classes.header_text}>
        Size
      </Typography>
      <Box sx={{ display: "flex", gap: "13px" }}>
        <Box
          sx={{
            paddingTop: { xs: "8.56px", sm: "8px" },
            paddingBottom: { xs: "8.56px", sm: "5px" },
            paddingRight: { sm: "15px" },
            paddingLeft: { sm: "15px" },
          }}
          className={classes.btn}
          onClick={() => {
            handleChange(1);
          }}
          style={{
            backgroundColor: selectedValue == 1 ? "#0575FC" : "#FFF",
            color: selectedValue == 1 ? "#FFF" : "#202020",
          }}
        >
          Small $20
          {/* <Typography sx={{ lineHeight: "1" }}>$20</Typography> */}
        </Box>
        <Box
          sx={{
            paddingTop: { xs: "8.56px", sm: "8px" },
            paddingBottom: { xs: "8.56px", sm: "5px" },
            paddingRight: { sm: "15px" },
            paddingLeft: { sm: "15px" },
          }}
          className={classes.btn}
          onClick={() => {
            handleChange(2);
          }}
          style={{
            backgroundColor: selectedValue == 2 ? "#0575FC" : "#FFF",
            color: selectedValue == 2 ? "#FFF" : "#202020",
          }}
        >
          Medium $20
        </Box>
        <Box
          sx={{
            paddingTop: { xs: "8.56px", sm: "8px" },
            paddingBottom: { xs: "8.56px", sm: "5px" },
            paddingRight: { sm: "15px" },
            paddingLeft: { sm: "15px" },
          }}
          className={classes.btn}
          onClick={() => {
            handleChange(3);
          }}
          style={{
            backgroundColor: selectedValue == 3 ? "#0575FC" : "#FFF",
            color: selectedValue == 3 ? "#FFF" : "#202020",
          }}
        >
          Large $20
        </Box>
      </Box>
    </Box>
  );
};

export default CustomRadioGroup;
