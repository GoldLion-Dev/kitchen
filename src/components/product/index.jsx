import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { AddCart } from "../image";
const useStyles = makeStyles(() => ({
  cart_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    fontSize: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "14px !important",
    marginTop: "5px",
  },
  sub_text: {
    color: "#444",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    lineHeight: "14px !important",
  },
  header_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  description_text: {
    color: " var(--3, #989898)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "14px !important",
  },
  sub_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "14px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },
  count_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "14px !important",
  },
}));
const Product = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        width: "100%",
        border: "1px solid var(--border, #E2E2E2)",
        justifyContent: "space-between",
        padding: "14px 11px",
        borderRadius: "6px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: "9px", sm: "9px", md: "9px" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          position: { xs: "relative", sm: "", md: "" },
          flexGrow: "1",
        }}
      >
        {/* web */}
        <Box
          sx={{
            height: "90px",
            width: "98px",
            display: { xs: "none", sm: "block", md: "block" },
          }}
        >
          <img
            src={AddCart}
            style={{
              width: "98px",
              maxHeight: "90px",
              height: "100%",
              borderRadius: "6px",
            }}
          />
        </Box>

        {/* mobile */}
        <Box
          sx={{
            height: "328px",
            display: { xs: "block", sm: "none", md: "none" },
          }}
        >
          <img
            src={AddCart}
            style={{
              width: "100%",
              height: "328px",
              borderRadius: "6px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            flexGrow: "1",
          }}
        >
          <Box>
            <Typography
              className={classes.header_text}
              style={{ fontSize: "20px" }}
            >
              Cashew Pineapple Pizza
            </Typography>
            <Typography
              className={classes.description_text}
              sx={{ marginTop: "7px" }}
            >
              Medium | Double Cheese
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "space-between",
            }}
          >
            <Typography
              className={classes.sub_text}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              $35.00
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "117px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "28.3px",
                  height: "26px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="34"
                    height="34"
                    rx="5"
                    stroke="black"
                    stroke-opacity="0.1"
                    stroke-width="2"
                  />
                  <path
                    d="M19.2724 19.272H16.7269H11.636C10.9331 19.272 10.3633 18.7022 10.3633 17.9993C10.3633 17.2964 10.9331 16.7266 11.636 16.7266H16.7269L19.2724 16.7269L24.3632 16.7266C25.0662 16.7266 25.636 17.2964 25.636 17.9993C25.636 18.7022 25.0662 19.272 24.3633 19.272H19.2724Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <Box
                sx={{ width: "21px", textAlign: "center" }}
                className={classes.sub_text}
              >
                3
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "28.3px",
                  height: "26px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="34"
                    height="34"
                    rx="5"
                    stroke="black"
                    stroke-opacity="0.1"
                    stroke-width="2"
                  />
                  <path
                    d="M19.2724 24.3633C19.2724 25.0662 18.7026 25.636 17.9996 25.636C17.2967 25.636 16.7269 25.0662 16.7269 24.3633V19.2724H11.636C10.9331 19.2724 10.3633 18.7026 10.3633 17.9996C10.3633 17.2967 10.9331 16.7269 11.636 16.7269H16.7269V11.636C16.7269 10.9331 17.2967 10.3633 17.9996 10.3633C18.7026 10.3633 19.2724 10.9331 19.2724 11.636V16.7269H24.3633C25.0662 16.7269 25.636 17.2967 25.636 17.9996C25.636 18.7026 25.0662 19.2724 24.3633 19.2724H19.2724V24.3633Z"
                    fill="black"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-start", marginTop: "3px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
        >
          <path
            d="M5.09075 3.99093L8.69404 0.683803C8.76525 0.607487 8.80245 0.50932 8.79823 0.408919C8.794 0.308518 8.74866 0.213277 8.67125 0.14223C8.59384 0.0711828 8.49007 0.0295613 8.38068 0.0256832C8.27128 0.0218051 8.16433 0.0559562 8.08118 0.121311L4.47789 3.42844L0.874608 0.117322C0.792761 0.042202 0.681753 0 0.566004 0C0.450255 0 0.339246 0.042202 0.257399 0.117322C0.175552 0.192442 0.129571 0.294327 0.129571 0.400562C0.129571 0.506798 0.175552 0.608683 0.257399 0.683803L3.86503 3.99093L0.257399 7.29807C0.211899 7.33383 0.174944 7.37784 0.148855 7.42733C0.122766 7.47682 0.108105 7.53073 0.105793 7.58567C0.103481 7.64061 0.113567 7.6954 0.135419 7.74659C0.157271 7.79778 0.190417 7.84428 0.232776 7.88316C0.275135 7.92203 0.325793 7.95245 0.38157 7.97251C0.437347 7.99257 0.497039 8.00182 0.556899 7.9997C0.61676 7.99758 0.675495 7.98412 0.729421 7.96018C0.783346 7.93623 0.831296 7.90232 0.870262 7.86056L4.47789 4.55343L8.08118 7.86056C8.16433 7.92591 8.27128 7.96006 8.38068 7.95618C8.49007 7.95231 8.59384 7.91069 8.67125 7.83964C8.74866 7.76859 8.794 7.67335 8.79823 7.57295C8.80245 7.47255 8.76525 7.37438 8.69404 7.29807L5.09075 3.99093Z"
            fill="#989898"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Product;
