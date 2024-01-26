import React from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../../components/image";
import { Grid, Box, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  sub_text: {
    color: "#444",
    fontSize: "14px !important",
    fontWeight: "500",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
}));
const Category = ({ img, title }) => {
  const classes = useStyles();
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
      <Typography
        className={classes.sub_text}
        sx={{
          lineHeight: "1",
          marginTop: "10.3px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Category;
