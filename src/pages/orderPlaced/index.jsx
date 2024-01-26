import React from "react";
import { Box, Typography, Button } from "@mui/material";

const OrderPlaced = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#0575FC",
        padding: "58px 21px 37px 21px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* order place box  */}
      <Box
        sx={{
          borderRadius: "8px",
          border: "1px solid #E7E7E7",
          background: "var(--6, #FFF)",
          boxShadow: "0px 6px 32px 0px rgba(0, 0, 0, 0.50)",
          paddingBottom: "31px",
        }}
      >
        {/* checked image  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "53px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="95"
            viewBox="0 0 100 95"
            fill="none"
          >
            <path
              d="M99.2862 47.3734C99.2862 73.5369 77.0603 94.7469 49.6431 94.7469C22.2261 94.7469 0 73.5369 0 47.3734C0 21.2097 22.2261 0 49.6431 0C77.0603 0 99.2862 21.2097 99.2862 47.3734Z"
              fill="#0B9609"
            />
            <path
              d="M27.7285 47.4539L42.2819 61.3421L71.5574 33.405"
              stroke="white"
              stroke-width="10.88"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Typography
            sx={{ marginTop: "11px", marginLeft: "44PX", marginRight: "48px" }}
          >
            Order Placed Sucessfully.
          </Typography>
        </Box>
        {/* pickup detail  */}
        <Box
          sx={{
            marginTop: "15px",
            marginLeft: "18px",
            marginRight: "18px",
            borderRadius: "8px",
            border: "1px solid #E7E7E7",
            background: "var(--6, #FFF)",
            paddingTop: "14px",
            paddingRight: "34px",
            paddingLeft: "16px",
            paddingBottom: "16px",
          }}
        >
          <Box>
            <Typography>Pickup Details</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "9px",
                marginTop: "6px",
              }}
            >
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M5.56149 2.87495C5.06149 0.712452 1.80524 0.706202 1.30524 2.87495C1.01149 4.1437 1.81774 5.2187 2.51774 5.88745C3.03024 6.3687 3.83649 6.3687 4.34899 5.88745C5.04899 5.2187 5.84899 4.1437 5.56149 2.87495ZM3.45524 3.87495C3.11149 3.87495 2.83024 3.5937 2.83024 3.24995C2.83024 2.9062 3.10524 2.62495 3.44899 2.62495H3.45524C3.80524 2.62495 4.08024 2.9062 4.08024 3.24995C4.08024 3.5937 3.80524 3.87495 3.45524 3.87495Z"
                      fill="#0575FC"
                    />
                    <path
                      d="M13.7052 10.375C13.2052 8.21245 9.93647 8.2062 9.43022 10.375C9.13647 11.6437 9.94272 12.7187 10.649 13.3875C11.1615 13.8687 11.974 13.8687 12.4865 13.3875C13.1927 12.7187 13.999 11.6437 13.7052 10.375ZM11.5927 11.375C11.249 11.375 10.9677 11.0937 10.9677 10.75C10.9677 10.4062 11.2427 10.125 11.5865 10.125H11.5927C11.9365 10.125 12.2177 10.4062 12.2177 10.75C12.2177 11.0937 11.9365 11.375 11.5927 11.375Z"
                      fill="#0575FC"
                    />
                    <path
                      d="M7.51113 12.3438H5.83613C5.11113 12.3438 4.47988 11.9062 4.22988 11.2312C3.97363 10.5562 4.16113 9.8125 4.70488 9.33125L9.69863 4.9625C9.99863 4.7 10.0049 4.34375 9.91738 4.1C9.82363 3.85625 9.58613 3.59375 9.18613 3.59375H7.51113C7.25488 3.59375 7.04238 3.38125 7.04238 3.125C7.04238 2.86875 7.25488 2.65625 7.51113 2.65625H9.18613C9.91113 2.65625 10.5424 3.09375 10.7924 3.76875C11.0486 4.44375 10.8611 5.1875 10.3174 5.66875L5.32363 10.0375C5.02363 10.3 5.01738 10.6562 5.10488 10.9C5.19863 11.1438 5.43613 11.4062 5.83613 11.4062H7.51113C7.76738 11.4062 7.97988 11.6187 7.97988 11.875C7.97988 12.1313 7.76738 12.3438 7.51113 12.3438Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography>15-25 min</Typography>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                  >
                    <circle cx="2.51123" cy="2.5" r="2.5" fill="#0575FC" />
                  </svg>
                </Box>
                <Typography>2 km</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: "5px" }}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M12.8989 4.72327C12.2427 1.83577 9.72391 0.535767 7.51141 0.535767C7.51141 0.535767 7.51141 0.535767 7.50516 0.535767C5.29891 0.535767 2.77391 1.82952 2.11766 4.71702C1.38641 7.94202 3.36141 10.6733 5.14891 12.392C5.81141 13.0295 6.66109 13.9061 7.51109 13.9061C8.36109 13.9061 9.21141 13.0295 9.86766 12.392C11.6552 10.6733 13.6302 7.94827 12.8989 4.72327ZM7.51141 7.85452C6.42391 7.85452 5.54266 6.97327 5.54266 5.88577C5.54266 4.79827 6.42391 3.91702 7.51141 3.91702C8.59891 3.91702 9.48016 4.79827 9.48016 5.88577C9.48016 6.97327 8.59891 7.85452 7.51141 7.85452Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography>705 Sunny Day Drive Burbank, CA 91505</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingRight: "15px",
              paddingLeft: "13px",
              height: "0.5px",
              opacity: "0.2",
              background: "#000",
              marginTop: "12px",
            }}
          ></Box>
          <Box sx={{ marginTop: "10px" }}>
            Pickup in
            <span> 20 Mins</span>
          </Box>
        </Box>
      </Box>

      {/* view order button */}
      <button
        style={{
          padding: "10px 14px",
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.09)",
          color: "#0575FC",
          background: "#FFF",
        }}
      >
        View Order Status
      </button>
    </Box>
  );
};

export default OrderPlaced;
