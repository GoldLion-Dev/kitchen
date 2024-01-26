import React from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "../../components/stepper";

const OrderSubscription = () => {
  return (
    <Box sx={{ padding: "19px 21px 0px 21px" }}>
      {/* header  */}
      <Box sx={{ display: "flex", gap: "23px", alignItems: "center" }}>
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
        <Typography>Order #12928</Typography>
      </Box>
      {/* body  */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* stepper  */}
        <Box sx={{ marginTop: "22px" }}>
          <Stepper />
        </Box>

        {/* pick detail  */}
        <Box
          sx={{
            marginTop: "15px",

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

        {/* subscription  */}
        <Box>
          <Typography>Subscription</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              borderRadius: "8px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              padding: "17px 12px 11px 12px",
            }}
          >
            {/* first  */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography>Cashew Pineapple Fried...</Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  Quantity - 2 Packets
                </Typography>
              </Box>
              <Box>$300.00</Box>
            </Box>
            {/* second  */}
            <Box sx={{ display: "flex", gap: "7px", alignItems: "center" }}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <g clip-path="url(#clip0_646_130)">
                    <path
                      d="M6.5 0C6.05059 0 5.6875 0.363086 5.6875 0.8125V2.4375C5.6875 2.88691 6.05059 3.25 6.5 3.25C6.94941 3.25 7.3125 2.88691 7.3125 2.4375V1.69355C9.61797 2.07949 11.375 4.08535 11.375 6.5C11.375 9.19141 9.19141 11.375 6.5 11.375C3.80859 11.375 1.625 9.19141 1.625 6.5C1.625 5.13652 2.18359 3.90254 3.0875 3.01895C3.40742 2.7041 3.4125 2.19121 3.1002 1.86875C2.78789 1.54629 2.27246 1.54375 1.95 1.85605C0.749024 3.03672 0 4.68203 0 6.5C0 10.0902 2.90977 13 6.5 13C10.0902 13 13 10.0902 13 6.5C13 2.90977 10.0902 0 6.5 0ZM4.90039 4.03711C4.66172 3.79844 4.27578 3.79844 4.03965 4.03711C3.80352 4.27578 3.80098 4.66172 4.03965 4.89785L6.0709 6.9291C6.30957 7.16777 6.69551 7.16777 6.93164 6.9291C7.16777 6.69043 7.17031 6.30449 6.93164 6.06836L4.90039 4.03711Z"
                      fill="#0575FC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_646_130">
                      <rect width="13" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Typography>Alternative Day</Typography>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_646_134)">
                    <path
                      d="M1.88889 0.9375C0.847049 0.9375 0 1.77832 0 2.8125V3.75H17V2.8125C17 1.77832 16.153 0.9375 15.1111 0.9375H1.88889ZM17 6.5625H0V12.1875C0 13.2217 0.847049 14.0625 1.88889 14.0625H15.1111C16.153 14.0625 17 13.2217 17 12.1875V6.5625ZM3.30556 10.3125H5.19444C5.45417 10.3125 5.66667 10.5234 5.66667 10.7813C5.66667 11.0391 5.45417 11.25 5.19444 11.25H3.30556C3.04583 11.25 2.83333 11.0391 2.83333 10.7813C2.83333 10.5234 3.04583 10.3125 3.30556 10.3125ZM6.61111 10.7813C6.61111 10.5234 6.82361 10.3125 7.08333 10.3125H10.8611C11.1208 10.3125 11.3333 10.5234 11.3333 10.7813C11.3333 11.0391 11.1208 11.25 10.8611 11.25H7.08333C6.82361 11.25 6.61111 11.0391 6.61111 10.7813Z"
                      fill="#0575FC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_646_134">
                      <rect width="17" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Typography>Auto Pay Enabled</Typography>
            </Box>
            {/* third  */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M5.08929 0.703125C5.08929 0.313477 4.73103 0 4.28571 0C3.8404 0 3.48214 0.313477 3.48214 0.703125V1.875H2.14286C0.960938 1.875 0 2.71582 0 3.75V4.21875V5.625V13.125C0 14.1592 0.960938 15 2.14286 15H12.8571C14.0391 15 15 14.1592 15 13.125V5.625V4.21875V3.75C15 2.71582 14.0391 1.875 12.8571 1.875H11.5179V0.703125C11.5179 0.313477 11.1596 0 10.7143 0C10.269 0 9.91071 0.313477 9.91071 0.703125V1.875H5.08929V0.703125ZM1.60714 5.625H13.3929V13.125C13.3929 13.3828 13.1518 13.5938 12.8571 13.5938H2.14286C1.84821 13.5938 1.60714 13.3828 1.60714 13.125V5.625ZM3.21429 8.4375C3.21429 8.68614 3.32717 8.9246 3.5281 9.10041C3.72903 9.27623 4.00155 9.375 4.28571 9.375C4.56987 9.375 4.8424 9.27623 5.04333 9.10041C5.24426 8.9246 5.35714 8.68614 5.35714 8.4375C5.35714 8.18886 5.24426 7.9504 5.04333 7.77459C4.8424 7.59877 4.56987 7.5 4.28571 7.5C4.00155 7.5 3.72903 7.59877 3.5281 7.77459C3.32717 7.9504 3.21429 8.18886 3.21429 8.4375ZM10.7143 10.3125C10.4301 10.3125 10.1576 10.4113 9.95667 10.5871C9.75574 10.7629 9.64286 11.0014 9.64286 11.25C9.64286 11.4986 9.75574 11.7371 9.95667 11.9129C10.1576 12.0887 10.4301 12.1875 10.7143 12.1875C10.9984 12.1875 11.271 12.0887 11.4719 11.9129C11.6728 11.7371 11.7857 11.4986 11.7857 11.25C11.7857 11.0014 11.6728 10.7629 11.4719 10.5871C11.271 10.4113 10.9984 10.3125 10.7143 10.3125ZM6.42857 8.4375C6.42857 8.82715 6.78683 9.14062 7.23214 9.14062H10.9821C11.4275 9.14062 11.7857 8.82715 11.7857 8.4375C11.7857 8.04785 11.4275 7.73438 10.9821 7.73438H7.23214C6.78683 7.73438 6.42857 8.04785 6.42857 8.4375ZM7.76786 10.5469H4.01786C3.57254 10.5469 3.21429 10.8604 3.21429 11.25C3.21429 11.6396 3.57254 11.9531 4.01786 11.9531H7.76786C8.21317 11.9531 8.57143 11.6396 8.57143 11.25C8.57143 10.8604 8.21317 10.5469 7.76786 10.5469Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography>Started on DD/MM/YYYY</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M5.08929 0.703125C5.08929 0.313477 4.73103 0 4.28571 0C3.8404 0 3.48214 0.313477 3.48214 0.703125V1.875H2.14286C0.960938 1.875 0 2.71582 0 3.75V4.21875V5.625V13.125C0 14.1592 0.960938 15 2.14286 15H12.8571C14.0391 15 15 14.1592 15 13.125V5.625V4.21875V3.75C15 2.71582 14.0391 1.875 12.8571 1.875H11.5179V0.703125C11.5179 0.313477 11.1596 0 10.7143 0C10.269 0 9.91071 0.313477 9.91071 0.703125V1.875H5.08929V0.703125ZM1.60714 5.625H13.3929V13.125C13.3929 13.3828 13.1518 13.5938 12.8571 13.5938H2.14286C1.84821 13.5938 1.60714 13.3828 1.60714 13.125V5.625ZM3.21429 8.4375C3.21429 8.68614 3.32717 8.9246 3.5281 9.10041C3.72903 9.27623 4.00155 9.375 4.28571 9.375C4.56987 9.375 4.8424 9.27623 5.04333 9.10041C5.24426 8.9246 5.35714 8.68614 5.35714 8.4375C5.35714 8.18886 5.24426 7.9504 5.04333 7.77459C4.8424 7.59877 4.56987 7.5 4.28571 7.5C4.00155 7.5 3.72903 7.59877 3.5281 7.77459C3.32717 7.9504 3.21429 8.18886 3.21429 8.4375ZM10.7143 10.3125C10.4301 10.3125 10.1576 10.4113 9.95667 10.5871C9.75574 10.7629 9.64286 11.0014 9.64286 11.25C9.64286 11.4986 9.75574 11.7371 9.95667 11.9129C10.1576 12.0887 10.4301 12.1875 10.7143 12.1875C10.9984 12.1875 11.271 12.0887 11.4719 11.9129C11.6728 11.7371 11.7857 11.4986 11.7857 11.25C11.7857 11.0014 11.6728 10.7629 11.4719 10.5871C11.271 10.4113 10.9984 10.3125 10.7143 10.3125ZM6.42857 8.4375C6.42857 8.82715 6.78683 9.14062 7.23214 9.14062H10.9821C11.4275 9.14062 11.7857 8.82715 11.7857 8.4375C11.7857 8.04785 11.4275 7.73438 10.9821 7.73438H7.23214C6.78683 7.73438 6.42857 8.04785 6.42857 8.4375ZM7.76786 10.5469H4.01786C3.57254 10.5469 3.21429 10.8604 3.21429 11.25C3.21429 11.6396 3.57254 11.9531 4.01786 11.9531H7.76786C8.21317 11.9531 8.57143 11.6396 8.57143 11.25C8.57143 10.8604 8.21317 10.5469 7.76786 10.5469Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography>Next Delivery on DD/MM/YYYY</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M5.08929 0.703125C5.08929 0.313477 4.73103 0 4.28571 0C3.8404 0 3.48214 0.313477 3.48214 0.703125V1.875H2.14286C0.960938 1.875 0 2.71582 0 3.75V4.21875V5.625V13.125C0 14.1592 0.960938 15 2.14286 15H12.8571C14.0391 15 15 14.1592 15 13.125V5.625V4.21875V3.75C15 2.71582 14.0391 1.875 12.8571 1.875H11.5179V0.703125C11.5179 0.313477 11.1596 0 10.7143 0C10.269 0 9.91071 0.313477 9.91071 0.703125V1.875H5.08929V0.703125ZM1.60714 5.625H13.3929V13.125C13.3929 13.3828 13.1518 13.5938 12.8571 13.5938H2.14286C1.84821 13.5938 1.60714 13.3828 1.60714 13.125V5.625ZM3.21429 8.4375C3.21429 8.68614 3.32717 8.9246 3.5281 9.10041C3.72903 9.27623 4.00155 9.375 4.28571 9.375C4.56987 9.375 4.8424 9.27623 5.04333 9.10041C5.24426 8.9246 5.35714 8.68614 5.35714 8.4375C5.35714 8.18886 5.24426 7.9504 5.04333 7.77459C4.8424 7.59877 4.56987 7.5 4.28571 7.5C4.00155 7.5 3.72903 7.59877 3.5281 7.77459C3.32717 7.9504 3.21429 8.18886 3.21429 8.4375ZM10.7143 10.3125C10.4301 10.3125 10.1576 10.4113 9.95667 10.5871C9.75574 10.7629 9.64286 11.0014 9.64286 11.25C9.64286 11.4986 9.75574 11.7371 9.95667 11.9129C10.1576 12.0887 10.4301 12.1875 10.7143 12.1875C10.9984 12.1875 11.271 12.0887 11.4719 11.9129C11.6728 11.7371 11.7857 11.4986 11.7857 11.25C11.7857 11.0014 11.6728 10.7629 11.4719 10.5871C11.271 10.4113 10.9984 10.3125 10.7143 10.3125ZM6.42857 8.4375C6.42857 8.82715 6.78683 9.14062 7.23214 9.14062H10.9821C11.4275 9.14062 11.7857 8.82715 11.7857 8.4375C11.7857 8.04785 11.4275 7.73438 10.9821 7.73438H7.23214C6.78683 7.73438 6.42857 8.04785 6.42857 8.4375ZM7.76786 10.5469H4.01786C3.57254 10.5469 3.21429 10.8604 3.21429 11.25C3.21429 11.6396 3.57254 11.9531 4.01786 11.9531H7.76786C8.21317 11.9531 8.57143 11.6396 8.57143 11.25C8.57143 10.8604 8.21317 10.5469 7.76786 10.5469Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography>Expiry on DD/MM/YYYY</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  padding: "10px 10px",
                  gap: "73px",
                  borderTop: " 0.5px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <Typography>Modify</Typography>
                <Typography>Pause</Typography>
                <Typography>Cancel</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* purchase list  */}
        <Box sx={{ marginTop: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <Typography>Purchase List</Typography>
            {/* first purchase  */}
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "445px", md: "445px" },
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
                <Box sx={{ display: "flex", gap: "48px" }}>
                  <Typography>x4</Typography>
                  <Typography> $150</Typography>
                </Box>
              </Box>
              <Typography>Medium | Double Cheese</Typography>
            </Box>
            {/* second purchase  */}
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "445px", md: "445px" },
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
                <Box sx={{ display: "flex", gap: "48px" }}>
                  <Typography>x4</Typography>
                  <Typography> $150</Typography>
                </Box>
              </Box>
              <Typography>Medium | Double Cheese</Typography>
            </Box>
            {/* third purchase  */}
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "445px", md: "445px" },
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
                <Box sx={{ display: "flex", gap: "48px" }}>
                  <Typography>x4</Typography>
                  <Typography> $150</Typography>
                </Box>
              </Box>
              <Typography>Medium | Double Cheese</Typography>
            </Box>
            {/* fourth purchase  */}
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "445px", md: "445px" },
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
                <Box sx={{ display: "flex", gap: "48px" }}>
                  <Typography>x4</Typography>
                  <Typography> $150</Typography>
                </Box>
              </Box>
              <Typography>Medium | Double Cheese</Typography>
            </Box>
          </Box>
        </Box>
        {/* Bill total  */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography>Bill Total</Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              flexDirection: "column",
              padding: "16px",
              gap: "17px",
              borderRadius: "10px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              background: "#F9F9F9",
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
              <Typography>$10.00</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSubscription;
