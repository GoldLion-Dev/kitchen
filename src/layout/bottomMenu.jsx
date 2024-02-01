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
    fontSize: "12px !important",
    fontWeight: "500",
  },
}));

const BottomMenu = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        heigth: "67px",
        display: { xs: "flex", sm: "none", md: "none" },
        position: "fixed",
        bottom: "0px",
        gap: "68px",
        width: "100%",
        justifyContent: "center",
        boxShadow: "-1px 4px 14px 0px rgba(0, 0, 0, 0.25)",
        background: "#FFF",
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
          heigth: "67px",
        }}
      >
        <img src={Home} />
        <Typography className={classes.bottom_menu_text}>Home</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
          padding: "20px 15px 6px 16px",
          gap: "5px",
          heigth: "67px",
        }}
      >
        <img src={BottomCart} />
        <Typography className={classes.bottom_menu_text}>Cart</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
          padding: "20px 15px 6px 16px",
          gap: "5px",
          heigth: "67px",
        }}
      >
        <img src={User} />
        <Typography className={classes.bottom_menu_text}>Account</Typography>
      </Box>
    </Box>
  );
};

export default BottomMenu;
