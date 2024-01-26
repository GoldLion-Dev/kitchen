import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Calendar from "./calendar";
import PickModal from "./pickModal";

const PickUp = () => {
  return (
    <>
      <PickModal />
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex" },
          flexGrow: "1",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
            flexGrow: "1",
          }}
          style={{
            height: "45px",
            border: "1px solid",
            gap: "4px",
            backgroundColor: "#F1F1F1",
            borderRadius: "4px",
            border: "0.5px solid rgba(0, 0, 0, 0.01)",
            boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
            padding: "6px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              flexGrow: "1",
              padding: {
                xs: "8px 6.34px 7px 6.66px",
                md: "8px 6.34px 7px 6.66px",
              }, // Adjust the padding as needed
            }}
          >
            Pick UP
          </Button>

          <Button
            style={{ color: "#989898" }}
            sx={{
              padding: { xs: "8px 6.34px 7px 6.66px" },
              flexGrow: "1",
            }}
          >
            Delivery
          </Button>

          <Button
            style={{ color: "#989898" }}
            sx={{
              padding: { xs: "8px 6.34px 7px 6.66px" },
              flexGrow: "1",
            }}
          >
            Dine in
          </Button>
        </Box>
        <Box
          sx={{
            minWidth: "710px",
            height: "375px",
            borderRadius: "6px",
            border: "1px solid var(--border, #E2E2E2)",
            background: "#FFF",
            position: "absolute",
            zIndex: "1",
            display: "none",

            top: "57px",
            left: "-45px",
          }}
        >
          <Box>{/* <Calendar /> */}</Box>
          <Box>
            <Typography>Select Time</Typography>
            <Box>
              <Typography>08</Typography>
              <Typography>08</Typography>
              <Typography>AM</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PickUp;
