import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
const useStyles = makeStyles(() => ({
  title_box: {
    borderRadius: "6px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    width: "100%",
    textAlign: "center",
  },
}));
const AddressTitle = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "10px",
        gap: "6.67px",
      }}
    >
      <Box className={classes.title_box}>Home</Box>
      <Box className={classes.title_box}>Office</Box>
      <Box className={classes.title_box}>Work</Box>
      <Box className={classes.title_box}>Other</Box>
    </Box>
  );
};

export default AddressTitle;
