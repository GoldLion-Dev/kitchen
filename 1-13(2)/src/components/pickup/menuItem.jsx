import React from "react";
import { Box, Typography } from "@mui/material";
const menuItem = () => {
  return (
    <Box
      sx={{
        width: "335px",
        height: "65px",
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.07)",
        background: "#FFF",
        padding: "15px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M5.55075 2.87495C5.05075 0.712452 1.7945 0.706202 1.2945 2.87495C1.00075 4.1437 1.807 5.2187 2.507 5.88745C3.0195 6.3687 3.82575 6.3687 4.33825 5.88745C5.03825 5.2187 5.83825 4.1437 5.55075 2.87495ZM3.4445 3.87495C3.10075 3.87495 2.8195 3.5937 2.8195 3.24995C2.8195 2.9062 3.0945 2.62495 3.43825 2.62495H3.4445C3.7945 2.62495 4.0695 2.9062 4.0695 3.24995C4.0695 3.5937 3.7945 3.87495 3.4445 3.87495Z"
                fill="#0575FC"
              />
              <path
                d="M13.6945 10.375C13.1945 8.21245 9.92573 8.2062 9.41948 10.375C9.12573 11.6437 9.93198 12.7187 10.6382 13.3875C11.1507 13.8687 11.9632 13.8687 12.4757 13.3875C13.182 12.7187 13.9882 11.6437 13.6945 10.375ZM11.582 11.375C11.2382 11.375 10.957 11.0937 10.957 10.75C10.957 10.4062 11.232 10.125 11.5757 10.125H11.582C11.9257 10.125 12.207 10.4062 12.207 10.75C12.207 11.0937 11.9257 11.375 11.582 11.375Z"
                fill="#0575FC"
              />
              <path
                d="M7.4999 12.3438H5.8249C5.0999 12.3438 4.46865 11.9062 4.21865 11.2312C3.9624 10.5562 4.1499 9.8125 4.69365 9.33125L9.6874 4.9625C9.9874 4.7 9.99365 4.34375 9.90615 4.1C9.8124 3.85625 9.5749 3.59375 9.1749 3.59375H7.4999C7.24365 3.59375 7.03115 3.38125 7.03115 3.125C7.03115 2.86875 7.24365 2.65625 7.4999 2.65625H9.1749C9.8999 2.65625 10.5312 3.09375 10.7812 3.76875C11.0374 4.44375 10.8499 5.1875 10.3062 5.66875L5.3124 10.0375C5.0124 10.3 5.00615 10.6562 5.09365 10.9C5.1874 11.1438 5.4249 11.4062 5.8249 11.4062H7.4999C7.75615 11.4062 7.96865 11.6187 7.96865 11.875C7.96865 12.1313 7.75615 12.3438 7.4999 12.3438Z"
                fill="#0575FC"
              />
            </svg>
          </Box>
          <Typography>dfdf</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.0286 4.40858C11.4161 1.71358 9.0653 0.500244 7.0003 0.500244C7.0003 0.500244 7.0003 0.500244 6.99447 0.500244C4.9353 0.500244 2.57863 1.70774 1.96613 4.40274C1.28363 7.41274 3.12697 9.96191 4.7953 11.5661C5.41363 12.1611 6.20667 12.9792 7 12.9792C7.79333 12.9792 8.58697 12.1611 9.19947 11.5661C10.8678 9.96191 12.7111 7.41858 12.0286 4.40858ZM7.0003 7.33108C5.9853 7.33108 5.1628 6.50858 5.1628 5.49358C5.1628 4.47858 5.9853 3.65608 7.0003 3.65608C8.0153 3.65608 8.8378 4.47858 8.8378 5.49358C8.8378 6.50858 8.0153 7.33108 7.0003 7.33108Z"
                fill="#0575FC"
              />
            </svg>
          </Box>
          <Typography>dfdf</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default menuItem;