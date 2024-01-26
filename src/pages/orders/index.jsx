import { Box, Typography } from "@mui/material";
import React from "react";

const Orders = () => {
  return (
    <>
      <Box sx={{ padding: "18px 21px 30px 21px" }}>
        {/* header  */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "23px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
            >
              <path
                d="M9.5 1L2 10L9.5 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Box>
          <Typography>Orders</Typography>
        </Box>

        {/* first  */}
        <Box
          sx={{
            marginTop: "24px",
            borderRadius: "8px",
            border: "1px solid #E7E7E7",
            background: "var(--6, #FFF)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px 15px 0px 15px",
            }}
          >
            <Box>
              <Typography>House of Shawarmas</Typography>
              <Typography sx={{ marginTop: "6px" }}>
                Order ID - #12928
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Chicken</Typography>
                <Typography>x1</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Fish</Typography>
                <Typography>x4</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total Amount</Typography>
                <Typography>$800.00</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>Order Status : Ordered</Typography>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    background: "#EFEFEF",
                    height: "8px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    borderRadius: "10px",
                    background: "#1BB918",
                    height: "8px",
                    position: "absolute",
                    top: "-5%",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              paddingTop: "13px",
              paddingBottom: "13px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              borderRadius: "8px",
              border: "1px solid #E7E7E7",
              background: "#FFF",
              marginTop: "19px",
            }}
          >
            <Typography>View Pickup Details</Typography>
          </Box>
        </Box>
        {/* second  */}
        <Box
          sx={{
            marginTop: "24px",
            borderRadius: "8px",
            border: "1px solid #E7E7E7",
            background: "var(--6, #FFF)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px 15px 0px 15px",
            }}
          >
            <Box>
              <Typography>Swedish Shawarma</Typography>
              <Typography sx={{ marginTop: "6px" }}>
                Order ID - #12928
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Chicken</Typography>
                <Typography>x1</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Fish</Typography>
                <Typography>x4</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total Amount</Typography>
                <Typography>$800.00</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>Order Status : Ordered</Typography>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    background: "#EFEFEF",
                    height: "8px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25%",
                    borderRadius: "10px",
                    background: "#1BB918",
                    height: "8px",
                    position: "absolute",
                    top: "-5%",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              paddingTop: "13px",
              paddingBottom: "13px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              borderRadius: "8px",
              border: "1px solid #E7E7E7",
              background: "#FFF",
              marginTop: "19px",
            }}
          >
            <Typography>Re-Order</Typography>
          </Box>
        </Box>

        {/* third  */}
        <Box
          sx={{
            marginTop: "24px",
            borderRadius: "8px",
            border: "1px solid #E7E7E7",
            background: "var(--6, #FFF)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              padding: "14px 15px 0px 15px",
            }}
          >
            <Typography>Tart Resto Bar</Typography>
            <Typography>Booking Confirmed</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>21st December 2023</Typography>
              <Typography>7:30 PM</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              paddingTop: "13px",
              paddingBottom: "13px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              borderRadius: "8px",
              border: "1px solid #E7E7E7",
              background: "#FFF",
              marginTop: "19px",
            }}
          >
            <Typography>Add Items</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Orders;
