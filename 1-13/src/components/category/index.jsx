import React from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../../components/image";
import { Grid, Box, Typography } from "@mui/material";
const Category = ({ img }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <img src={img} style={{ width: "100%" }} />
      <Typography sx={{ lineHeight: "1", marginTop: "10.3px" }}>
        Mango Shakes
      </Typography>
    </Box>
  );
};

export default Category;
