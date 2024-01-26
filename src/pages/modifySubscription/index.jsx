import React from "react";
import { Box, Typography, Radio, Button } from "@mui/material";
import Menu from "../../layout/menu";
import SchedulePick from "../../components/addCart/schedulePick";
import DatePicker from "../../components/addCart/datePicker";

const ModifySubscription = () => {
  return (
    <>
      <Menu />
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "23px",
            marginTop: "45px",
            marginLeft: { xs: "0px", sm: "70px", md: "70px" },
            padding: "18px 14px 20px 18px",
          }}
        >
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
          <Typography
            sx={{ marginLeft: { xs: "0px", sm: "23px", md: "23px" } }}
          >
            Modify Subscription
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "402px", md: "402px" },
            marginLeft: { xs: "0px", sm: "99px", md: "99px" },
            marginTop: { xs: "22px", sm: "49px", md: "49px" },
            padding: "0px 14px 20px 18px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* first  */}
            <Box
              sx={{
                borderRadius: "8px",
                background:
                  "linear-gradient(107deg, #DEEDFF 25.57%, #DEEDFF 69.74%)",
                padding: "19px 25px 17px 14px",
              }}
            >
              <Typography>Cashew Pineapple Fried Pizza</Typography>
              <Typography sx={{ marginTop: "10px" }}>$300 CAD</Typography>
            </Box>

            {/* second  */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography>Add as Subscription</Typography>
              <Typography>Pick Schedule</Typography>
              <Box>
                <SchedulePick />
              </Box>
            </Box>

            {/* third  */}
            <Box>
              <Typography>Start Date</Typography>
              <Box sx={{ marginTop: "6px", width: "100%" }}>
                <DatePicker />
              </Box>
            </Box>

            {/* fourth */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Radio sx={{ width: "18px", height: "18px" }} />
              <Typography sx={{ marginLeft: "9px" }}>
                Enable Auto Pay
              </Typography>
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
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Order Subtotal</Typography>
                  <Typography>$105.00</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Addon Subscription</Typography>
                  <Typography>$105.00</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Tax</Typography>
                  <Typography>$105.00</Typography>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Total amount</Typography>
                  <Typography>$105.00</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Button
            sx={{ width: "100%", padding: "15px 140px", marginTop: "39px" }}
            variant="contained"
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ModifySubscription;
