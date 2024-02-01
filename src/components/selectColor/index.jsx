import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCheckbox from "../customeCheck";
const useStyle = makeStyles(() => ({
  btn: {
    paddingTop: "8.56px",
    paddingBottom: "8.56px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    textAlign: "center",
    cursor: "pointer",
  },

  header_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  price: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "17px !important",
  },
}));
const SelectColor = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const blue = "#0575FC";
  const green = "#21A700";
  const rope = "#670894";
  const red = "#FC0505";
  const yellow = "#FFC90C";
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
        Color{" "}
      </Typography>
      <Box sx={{ display: "flex", gap: "13px" }}>
        <Box sx={{ width: "27.6px", height: "27.6px" }}>
          <CustomCheckbox
            backgroundColor={blue}
            checkedBackgroundColor={blue}
          />
        </Box>
        <Box sx={{ width: "27.6px", height: "27.6px" }}>
          <CustomCheckbox backgroundColor={red} checkedBackgroundColor={red} />
        </Box>
        <Box sx={{ width: "27.6px", height: "27.6px" }}>
          <CustomCheckbox
            backgroundColor={yellow}
            checkedBackgroundColor={yellow}
          />
        </Box>
        <Box sx={{ width: "27.6px", height: "27.6px" }}>
          <CustomCheckbox
            backgroundColor={green}
            checkedBackgroundColor={green}
          />
        </Box>
        <Box sx={{ width: "27.6px", height: "27.6px" }}>
          <CustomCheckbox
            backgroundColor={rope}
            checkedBackgroundColor={rope}
          />
        </Box>
      </Box>
      <Typography className={classes.price}>$10.00</Typography>
    </Box>
  );
};

export default SelectColor;
