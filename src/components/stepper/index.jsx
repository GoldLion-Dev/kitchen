import React from "react";
import { Box, Typography } from "@mui/material";
import { GreenCircle, GrayCircle } from "../image";
const Stepper = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "28%",
          width: "86%",
          height: "1px",
          marginLeft: "5%",
          background: "#989898",
        }}
      ></Box>
      <Box sx={{ display: "flex", gap: "23px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <img
            src={GreenCircle}
            style={{
              width: "37px",
              height: "37px",
              alignItems: "center",
              zIndex: "2",
            }}
          />
          <Typography sx={{ fontSize: "15px !important" }}>Ordered</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
            paddingTop: "8px",
            alignItems: "center",
          }}
        >
          <img
            src={GrayCircle}
            style={{ width: "21px", height: "21px", zIndex: "2" }}
          />
          <Typography sx={{ fontSize: "15px !important" }}>
            In Process
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
            paddingTop: "8px",
            alignItems: "center",
          }}
        >
          <img
            src={GrayCircle}
            style={{ width: "21px", height: "21px", zIndex: "2" }}
          />
          <Typography sx={{ fontSize: "15px !important" }}>
            On the Way
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
            paddingTop: "8px",
            alignItems: "center",
          }}
        >
          <img
            src={GrayCircle}
            style={{ width: "21px", height: "21px", zIndex: "2" }}
          />
          <Typography sx={{ fontSize: "15px !important" }}>Pickup</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Stepper;
