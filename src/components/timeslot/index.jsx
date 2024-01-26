import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Calendar from "./calendar";
import CalendarModal from "./timeModal";

const Timeslot = () => {
  const data = "Sunny Day Drive Bank";
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClickSelect = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 600 && windowWidth < 960) {
      setOpen(!isOpen);
    } else if (windowWidth >= 960) {
      // Handle logic for large-sized screens (lg) and above
      setOpen(!isOpen);
    } else {
      // Handle logic for small-sized screens (sm)
      setModalOpen(!isModalOpen);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <CalendarModal isOpen={isModalOpen} handleClose={handleClose} />
      <Box sx={{ position: "relative" }}>
        <Box
          component="selectbox"
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "184px", md: "184px" },
            height: { xs: "40px", sm: "45px", md: "45px" },
            borderRadius: "6px",
            border: "1px solid var(--border, #E2E2E2)",
            background: "#FFF",
          }}
        >
          <Box
            onClick={handleClickSelect}
            component="div"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid var(--border, #E2E2E2)",
              background: "#FFF",
              padding: { xs: "13px 9px 12px 12px" },
              cursor: "pointer",
            }}
          >
            <Box>
              <Typography>Select TimeSlot</Typography>
            </Box>
            <Box sx={{ width: "17px", height: "17px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M11.3086 6.22388L7.80859 9.72388L4.30859 6.22388H11.3086Z"
                  fill="#0575FC"
                  stroke="#0575FC"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          component="content"
          sx={{
            position: "absolute",
            width: "400%",
            right: "-80%",
            height: "374px",
            borderRadius: "6px",
            border: "1px solid var(--border, #E2E2E2)",
            background: "#FFF",
            zIndex: "1",
            marginTop: "12px",
            display: isOpen ? "block" : "none",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              borderRadius: "6px",
              background: "#FFF",
            }}
          >
            <Box sx={{ width: "50%", height: "100%" }}>
              <Calendar />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "9.39px",
                width: "50%",
              }}
            >
              <Typography>Select Time</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "9.39px",
                }}
              >
                <Box>08</Box>
                <Box>08</Box>
                <Box>08</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Timeslot;
