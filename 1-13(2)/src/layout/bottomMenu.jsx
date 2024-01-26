import { Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { BottomCart, Home, User } from "../components/image";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  bottom_menu_text: {
    color: "#7B8794",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
    fontSize: "12px",
    fontWeight: "500",
  },
}));

const BottomMenu = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.bottom_menu_text}
      sx={{
        heigth: "67px",
        display: "flex",
        gap: "68px",
        justifyContent: "center",
        boxShadow: "-1px 4px 14px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
          padding: "20px 15px 6px 16px",
          gap: "5px",
        }}
      >
        <img src={Home} />
        <Typography>Home</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
          padding: "20px 15px 6px 16px",
          gap: "5px",
        }}
      >
        <img src={BottomCart} />
        <Typography>Cart</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
          padding: "20px 15px 6px 16px",
          gap: "5px",
        }}
      >
        <img src={User} />
        <Typography>Account</Typography>
      </Box>
    </Box>
  );
};

export default BottomMenu;
