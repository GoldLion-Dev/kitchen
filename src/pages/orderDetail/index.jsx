import { Box, Typography } from "@mui/material";
import React from "react";
import Menu from "../../layout/menu";

const OrderDetail = () => {
  return (
    <>
      <Menu />
      <Box sx={{ marginTop: "45px", marginLeft: "70px", display: "flex" }}>
        <Box sx={{ marginBottom: "67px" }}>
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
            <Typography sx={{ marginLeft: "23px" }}>Order Detail</Typography>
          </Box>

          <Box sx={{ display: "flex", marginTop: "18px" }}>
            <Typography>Product / Details / Cart / </Typography>
            <Typography> Order Details</Typography>
          </Box>

          <Box sx={{ width: "445px", marginTop: "39px" }}>
            {/* pickup detail  */}
            <Box
              sx={{
                width: "445px",
                borderRadius: "8px",
                border: "1px solid #E7E7E7",
                paddingTop: "14px",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingBottom: "16px",
              }}
            >
              <Box>
                <Typography>Pickup Detail</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M5.58005 2.87495C5.08005 0.712452 1.82379 0.706202 1.32379 2.87495C1.03004 4.1437 1.8363 5.2187 2.5363 5.88745C3.0488 6.3687 3.85505 6.3687 4.36755 5.88745C5.06755 5.2187 5.86755 4.1437 5.58005 2.87495ZM3.4738 3.87495C3.13005 3.87495 2.8488 3.5937 2.8488 3.24995C2.8488 2.9062 3.12379 2.62495 3.46755 2.62495H3.4738C3.8238 2.62495 4.0988 2.9062 4.0988 3.24995C4.0988 3.5937 3.8238 3.87495 3.4738 3.87495Z"
                      fill="#0575FC"
                    />
                    <path
                      d="M13.7238 10.375C13.2238 8.21245 9.95503 8.2062 9.44878 10.375C9.15503 11.6437 9.96128 12.7187 10.6675 13.3875C11.18 13.8687 11.9925 13.8687 12.505 13.3875C13.2113 12.7187 14.0175 11.6437 13.7238 10.375ZM11.6113 11.375C11.2675 11.375 10.9863 11.0937 10.9863 10.75C10.9863 10.4062 11.2613 10.125 11.605 10.125H11.6113C11.955 10.125 12.2363 10.4062 12.2363 10.75C12.2363 11.0937 11.955 11.375 11.6113 11.375Z"
                      fill="#0575FC"
                    />
                    <path
                      d="M7.53115 12.3438H5.85615C5.13115 12.3438 4.4999 11.9062 4.2499 11.2312C3.99365 10.5562 4.18115 9.8125 4.7249 9.33125L9.71865 4.9625C10.0187 4.7 10.0249 4.34375 9.9374 4.1C9.84365 3.85625 9.60615 3.59375 9.20615 3.59375H7.53115C7.2749 3.59375 7.0624 3.38125 7.0624 3.125C7.0624 2.86875 7.2749 2.65625 7.53115 2.65625H9.20615C9.93115 2.65625 10.5624 3.09375 10.8124 3.76875C11.0687 4.44375 10.8812 5.1875 10.3374 5.66875L5.34365 10.0375C5.04365 10.3 5.0374 10.6562 5.1249 10.9C5.21865 11.1438 5.45615 11.4062 5.85615 11.4062H7.53115C7.7874 11.4062 7.9999 11.6187 7.9999 11.875C7.9999 12.1313 7.7874 12.3438 7.53115 12.3438Z"
                      fill="#0575FC"
                    />
                  </svg>
                  <Typography>15~25min </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                  >
                    <circle cx="2.53125" cy="2.5" r="2.5" fill="#0575FC" />
                  </svg>{" "}
                  <Typography>2km</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M12.918 4.72327C12.2617 1.83577 9.74296 0.535767 7.53046 0.535767C7.53046 0.535767 7.53046 0.535767 7.52421 0.535767C5.31796 0.535767 2.79296 1.82952 2.13671 4.71702C1.40546 7.94202 3.38046 10.6733 5.16796 12.392C5.83046 13.0295 6.68013 13.9061 7.53013 13.9061C8.38013 13.9061 9.23046 13.0295 9.88671 12.392C11.6742 10.6733 13.6492 7.94827 12.918 4.72327ZM7.53046 7.85452C6.44296 7.85452 5.56171 6.97327 5.56171 5.88577C5.56171 4.79827 6.44296 3.91702 7.53046 3.91702C8.61796 3.91702 9.49921 4.79827 9.49921 5.88577C9.49921 6.97327 8.61796 7.85452 7.53046 7.85452Z"
                      fill="#0575FC"
                    />
                  </svg>
                  <Typography sx={{ lineHeight: "1" }}>
                    705 Sunny Day Drive Burbank, CA 91505
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  opacity: "0.2",
                  background: "#000",
                  width: "100%",
                  height: "0.5px",
                  marginTop: "12px",
                }}
              ></Box>

              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography>Delivery in</Typography>
                <Typography>15~20 Mins</Typography>
              </Box>
            </Box>

            {/* purchase list  */}
            <Box sx={{ marginTop: "20px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "11px" }}
              >
                <Typography>Purchase List</Typography>
                {/* first purchase  */}
                <Box
                  sx={{
                    display: "flex",
                    width: "445px",
                    padding: "10px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    borderRadius: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                    background: "#FFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Cashew Pineapple Fried...</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography>x4</Typography>
                      <Typography>$ 150</Typography>
                    </Box>
                  </Box>
                  <Typography>Medium | Double Cheese</Typography>
                </Box>
                {/* first purchase  */}
                <Box
                  sx={{
                    display: "flex",
                    width: "445px",
                    padding: "10px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    borderRadius: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                    background: "#FFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Cashew Pineapple Fried...</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography>x4</Typography>
                      <Typography>$ 150</Typography>
                    </Box>
                  </Box>
                  <Typography>Medium | Double Cheese</Typography>
                </Box>
                {/* first purchase  */}
                <Box
                  sx={{
                    display: "flex",
                    width: "445px",
                    padding: "10px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    borderRadius: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                    background: "#FFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Cashew Pineapple Fried...</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography>x4</Typography>
                      <Typography>$ 150</Typography>
                    </Box>
                  </Box>
                  <Typography>Medium | Double Cheese</Typography>
                </Box>
                {/* first purchase  */}
                <Box
                  sx={{
                    display: "flex",
                    width: "445px",
                    padding: "10px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    borderRadius: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                    background: "#FFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Cashew Pineapple Fried...</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography>x4</Typography>
                      <Typography>$ 150</Typography>
                    </Box>
                  </Box>
                  <Typography>Medium | Double Cheese</Typography>
                </Box>
              </Box>
            </Box>

            {/* extra  */}
            <Box sx={{ marginTop: "18px" }}>
              <Typography sx={{ lineHeight: "1" }}>Extra</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                }}
              >
                <Typography sx={{ lineHeight: "1" }}>
                  Vegetable +Fried Tofu
                </Typography>
                <Typography>$4.00</Typography>
              </Box>
            </Box>

            {/* total amount  */}
            <Box sx={{ marginTop: "15px" }}>
              <Typography>Total amount</Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                    background: "#F9F9F9",
                    padding: "16px 19px",
                    marginTop: "10px",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>Order Subtotal</Typography>
                    <Typography>$105.00</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>Addon Subscription</Typography>
                    <Typography>$105.00</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>Tax</Typography>
                    <Typography>$105.00</Typography>
                  </Box>
                  <Box></Box>
                  <Box></Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>Total amount</Typography>
                    <Typography>$105.00</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
            >
              <path
                d="M100.142 49.643C100.142 77.06 77.9157 99.2861 50.4986 99.2861C23.0816 99.2861 0.855469 77.06 0.855469 49.643C0.855469 22.2258 23.0816 0 50.4986 0C77.9157 0 100.142 22.2258 100.142 49.643Z"
                fill="#0B9609"
              />
              <path
                d="M28.5859 49.7273L43.1393 64.2808L72.4148 35.0054"
                stroke="white"
                stroke-width="10.88"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Typography>Order Successfully Placed</Typography>
            <Typography> Sit Back and Relax</Typography>
            <Typography>TTransaction Ref - #93830292029</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrderDetail;
