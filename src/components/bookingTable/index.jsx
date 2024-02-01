import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Counter from "../counter";
import DatePicker from "../addCart/datePicker";
import Modal from "./modal";

const BookingTable = () => {
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
      <Modal isOpen={isModalOpen} handleClose={handleClose} />
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
              <Typography>Booking Table</Typography>
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
            width: "200%",
            left: "0px",

            borderRadius: "6px",
            border: "1px solid var(--border, #E2E2E2)",
            background: "#FFF",
            zIndex: "1",
            marginTop: "12px",
            display: isOpen ? "block" : "none",
            padding: "18px 20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* first  */}
            <Box>
              <Typography>Which Area ?</Typography>
              <Box sx={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                <Box
                  sx={{
                    padding: "10px 14px",
                    borderRadius: "5px",
                    border: "1px solid var(--primary, #0575FC)",
                    background: "#FFF",
                  }}
                >
                  <Typography>Main Dining</Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px 14px",
                    borderRadius: "6px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <Typography>Terrace</Typography>
                </Box>
              </Box>
            </Box>

            {/* second */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>How many people ?</Typography>
              <Box>
                <Counter />
              </Box>
            </Box>

            {/* third  */}
            <Box>
              <Typography>Select Date and Time</Typography>
              <DatePicker />
            </Box>
            {/* fourth  */}
            <Box sx={{ width: "100%" }}>
              <Typography>Additional Info</Typography>
              <textarea
                style={{
                  height: "133px",
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.07)",
                  background: " #FFF",
                }}
              ></textarea>
            </Box>

            {/* book table button */}
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: "none" }}
            >
              Book Table
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookingTable;
