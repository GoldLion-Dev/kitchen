import React from "react";
import { Box } from "@mui/material";
const WaitingTime = ({ selectedValue }) => {
  return (
    <Box
      sx={{
        display:
          selectedValue == 3 ? { xs: "none", sm: "flex", md: "flex" } : "none",
        flexGrow: "1",
      }}
      style={{
        borderRadius: "6px",
        border: "1px solid var(--border, #E2E2E2)",
        background: "#FFF",
        height: "45px",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px 12px",
        minWidth: "100px",
      }}
    >
      Waiting 25min
    </Box>
  );
};

export default WaitingTime;
