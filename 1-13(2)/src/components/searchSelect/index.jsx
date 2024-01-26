import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "./menuItem";
import Modal from "./modal";

const SearchSelect = () => {
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
            width: { xs: "100%", sm: "284px", md: "284px" },
            height: "45px",
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
              paddingRight: "9.56px",
              paddingLeft: "9.56px",
              cursor: "pointer",
            }}
          >
            <Box>
              <Typography>Search Outlet</Typography>
            </Box>
            <Box>
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
            padding: "17px !important",
            width: "364px",
            height: "383px",
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
              paddingRight: "13px",
              paddingLeft: "13px",
              height: "45px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid var(--border, #E2E2E2)",
              background: "#FFF",
              marginBottom: "15px",
            }}
          >
            <Input placeholder="Search by area" disableUnderline />
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M9.10482 16.6249C13.2585 16.6249 16.6257 13.2577 16.6257 9.10409C16.6257 4.95044 13.2585 1.58325 9.10482 1.58325C4.95118 1.58325 1.58398 4.95044 1.58398 9.10409C1.58398 13.2577 4.95118 16.6249 9.10482 16.6249Z"
                  stroke="#0575FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4173 17.4166L15.834 15.8333"
                  stroke="#0575FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>

          <MenuItem data={data} />
          <MenuItem data={data} />
          <MenuItem data={data} />
          <MenuItem data={data} />
        </Box>
      </Box>
    </>
  );
};

export default SearchSelect;
