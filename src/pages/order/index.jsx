import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  Input,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Product from "../../components/product";
import CustomCheckbox from "../../components/customeCheck";
import Cart from "../../components/cart/cart";
import { Product2 } from "../../components/image";
import { Toys } from "@mui/icons-material";
import RadioButtonCheckbox from "../../components/radioTypeCheckbox";
import CustomRadioGroupButton from "../../components/addCart/schedulePick";
import DatePicker from "../../components/addCart/datePicker";
import { Switch } from "@mui/material";
const useStyles = makeStyles(() => ({
  cart_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    fontSize: "20px !important",
    fontWeight: "650 !important",
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
  black_sub_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    lineHeight: "14px !important",
  },
  price_400_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    fontSize: "14px !important",
    fontWeight: "500 !important",
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
  extra_head_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "20px !important",
  },
  extra_text: {
    color: " var(--3, #444)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "20px !important",
  },
  price_text: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
  },
  sub_text1: {
    color: " var(--3, #444)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important",
  },
  sub_button_text: {
    color: " var(--3, #0575FC)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important",
  },

  sub_header: {
    color: " var(--3, #000)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important",
  },
  payment_method_text: {
    color: " var(--3, #444)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important",
  },
  pay_using_text: {
    color: " var(--3, #545454)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "10px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },
  master_card_text: {
    color: " var(--3, #888)",
    fontFamily: "MetropolisRegular !important",
    fontSize: "10px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },
  pay_btn: {
    padding: "13px 37px !important",
    lineHeight: "1 !important",
    textTransform: "none !important",
  },
}));
const Order = () => {
  const classes = useStyles();
  const white = "#FFF";
  const blue = "#0575FC";
  const [selectedValue, setSelectedValue] = useState(1);
  const [isSubScribe, setSubScribe] = useState(false);

  const handleClickSubScribe = () => {
    setSubScribe(!isSubScribe);
  };
  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    console.log(newValue);
  };
  return (
    <Box
      sx={{
        marginTop: "45px",
        marginLeft: { xs: "0px", sm: "70px", md: "70px" },
        paddingLeft: { xs: "18px" },
        paddingRight: { xs: "12px" },
        paddingBottom: { xs: "24px" },
      }}
    >
      {/* header */}
      <Box sx={{ display: "inline-flex", gap: "23px", alignItems: "center" }}>
        <Box
          sx={{
            width: "7.5px",
            height: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
        </Box>

        <Typography className={classes.cart_text}>Cart</Typography>
      </Box>
      <Typography
        className={classes.sub_text}
        sx={{
          display: { xs: "none", sm: "flex", md: "flex" },
          marginTop: "18px",
          marginLeft: "26.5px",
        }}
      >
        <Typography>Product / Details /</Typography>
        <Typography sx={{ color: "#0575FC !important", marginLeft: "3px" }}>
          Cart
        </Typography>
      </Typography>

      {/* tab  */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none" },
          flexGrow: "1",
          marginTop: "19px",
        }}
        style={{
          height: "45px",
          border: "1px solid",
          gap: "4px",
          backgroundColor: "#F1F1F1",
          borderRadius: "4px",
          border: "0.5px solid rgba(0, 0, 0, 0.01)",
          boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
          padding: "6px",
        }}
      >
        <Button
          onClick={() => {
            handleChange(1);
          }}
          sx={{
            flexGrow: "1",
            padding: {
              xs: "8px 6.34px 7px 6.66px",
              md: "8px 6.34px 7px 6.66px",
            }, // Adjust the padding as needed
          }}
          style={{
            backgroundColor: selectedValue == 1 ? "#0575FC" : "#F1F1F1",
            color: selectedValue == 1 ? "#FFF" : "#989898",
          }}
        >
          Pick UP
        </Button>

        <Button
          onClick={() => {
            handleChange(2);
          }}
          style={{
            backgroundColor: selectedValue == 2 ? "#0575FC" : "#F1F1F1",
            color: selectedValue == 2 ? "#FFF" : "#989898",
          }}
          sx={{
            padding: { xs: "8px 6.34px 7px 6.66px" },
            flexGrow: "1",
          }}
        >
          Delivery
        </Button>

        <Button
          onClick={() => {
            handleChange(3);
          }}
          style={{
            backgroundColor: selectedValue == 3 ? "#0575FC" : "#F1F1F1",
            color: selectedValue == 3 ? "#FFF" : "#989898",
          }}
          sx={{
            padding: { xs: "8px 6.34px 7px 6.66px" },
            flexGrow: "1",
          }}
        >
          Dine in
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          marginTop: "19px",
        }}
      >
        {/* delivery location  */}
        <Box>
          <Typography>Delivery Location</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              borderRadius: "6px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              padding: "9px 8px 8px 7px",
              marginTop: "11px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.8887 4.72363C12.2324 1.83613 9.71366 0.536133 7.50116 0.536133C7.50116 0.536133 7.50116 0.536133 7.49491 0.536133C5.28866 0.536133 2.76366 1.82988 2.10741 4.71738C1.37616 7.94238 3.35116 10.6736 5.13866 12.3924C5.80116 13.0299 6.65084 13.9065 7.50084 13.9065C8.35084 13.9065 9.20116 13.0299 9.85741 12.3924C11.6449 10.6736 13.6199 7.94863 12.8887 4.72363ZM7.50116 7.85488C6.41366 7.85488 5.53241 6.97363 5.53241 5.88613C5.53241 4.79863 6.41366 3.91738 7.50116 3.91738C8.58866 3.91738 9.46991 4.79863 9.46991 5.88613C9.46991 6.97363 8.58866 7.85488 7.50116 7.85488Z"
                fill="#0575FC"
              />
            </svg>
            <Box
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ lineHeight: "1" }}>Home</Typography>
                <Typography sx={{ lineHeight: "1" }}>
                  705 Sunny Day Drive Burbank{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* list of products  */}
        <Box
          sx={{
            width: { xs: "100%", sm: "400px", md: "400px" },
            marginTop: "24px",
          }}
        >
          <Typography className={classes.header_text}>
            List of Products
          </Typography>

          {/* product component */}
          <Box sx={{ marginTop: "14px" }}>
            <Cart img={Product2} isArrange={true} addedToCart={true} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              marginTop: "8px",
            }}
          >
            <Product />
          </Box>

          {/* extra */}
          <Box sx={{ marginTop: "16px" }}>
            <Typography className={classes.extra_head_text}>Extras</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
              }}
            >
              <Typography className={classes.extra_text}>
                Vegetable +Fried Tofu
              </Typography>
              <Typography className={classes.price_text}>$4.00</Typography>
            </Box>
          </Box>

          {/* Subscription */}
          <Box
            sx={{
              marginTop: "29px",
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            <Typography className={classes.header_text}>
              Subscription
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                flexDirection: "column",
                borderRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                display: "flex",
                gap: "15px",
                marginTop: "11px",
                padding: "19.7px 19.7px 4px 14px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "92px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography className={classes.header_text}>
                    Cashew Pineapple Fried...
                  </Typography>
                  <Typography
                    className={classes.price_text}
                    sx={{ color: "#444 !important" }}
                  >
                    Quantity - 2 Packets
                  </Typography>
                </Box>
                <Typography className={classes.price_text}>$300.00</Typography>
              </Box>

              <Box
                sx={{ display: "flex", gap: "7px" }}
                className={classes.sub_text1}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_4486)">
                      <path
                        d="M6.70703 0C6.25762 0 5.89453 0.363086 5.89453 0.8125V2.4375C5.89453 2.88691 6.25762 3.25 6.70703 3.25C7.15645 3.25 7.51953 2.88691 7.51953 2.4375V1.69355C9.825 2.07949 11.582 4.08535 11.582 6.5C11.582 9.19141 9.39844 11.375 6.70703 11.375C4.01562 11.375 1.83203 9.19141 1.83203 6.5C1.83203 5.13652 2.39062 3.90254 3.29453 3.01895C3.61445 2.7041 3.61953 2.19121 3.30723 1.86875C2.99492 1.54629 2.47949 1.54375 2.15703 1.85605C0.956055 3.03672 0.207031 4.68203 0.207031 6.5C0.207031 10.0902 3.1168 13 6.70703 13C10.2973 13 13.207 10.0902 13.207 6.5C13.207 2.90977 10.2973 0 6.70703 0ZM5.10742 4.03711C4.86875 3.79844 4.48281 3.79844 4.24668 4.03711C4.01055 4.27578 4.00801 4.66172 4.24668 4.89785L6.27793 6.9291C6.5166 7.16777 6.90254 7.16777 7.13867 6.9291C7.3748 6.69043 7.37734 6.30449 7.13867 6.06836L5.10742 4.03711Z"
                        fill="#0575FC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4486">
                        <rect
                          width="13"
                          height="13"
                          fill="white"
                          transform="translate(0.207031)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography>Alternate Day</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_4489)">
                      <path
                        d="M2.09592 0.9375C1.05408 0.9375 0.207031 1.77832 0.207031 2.8125V3.75H17.207V2.8125C17.207 1.77832 16.36 0.9375 15.3181 0.9375H2.09592ZM17.207 6.5625H0.207031V12.1875C0.207031 13.2217 1.05408 14.0625 2.09592 14.0625H15.3181C16.36 14.0625 17.207 13.2217 17.207 12.1875V6.5625ZM3.51259 10.3125H5.40148C5.6612 10.3125 5.8737 10.5234 5.8737 10.7813C5.8737 11.0391 5.6612 11.25 5.40148 11.25H3.51259C3.25286 11.25 3.04036 11.0391 3.04036 10.7813C3.04036 10.5234 3.25286 10.3125 3.51259 10.3125ZM6.81814 10.7813C6.81814 10.5234 7.03064 10.3125 7.29036 10.3125H11.0681C11.3279 10.3125 11.5404 10.5234 11.5404 10.7813C11.5404 11.0391 11.3279 11.25 11.0681 11.25H7.29036C7.03064 11.25 6.81814 11.0391 6.81814 10.7813Z"
                        fill="#0575FC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4489">
                        <rect
                          width="17"
                          height="15"
                          fill="white"
                          transform="translate(0.207031)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography>Auto Pay Enabled</Typography>
              </Box>

              {/* started on ..../../../ */}
              <Box sx={{ display: "flex", gap: "7px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M5.29632 0.703125C5.29632 0.313477 4.93806 0 4.49275 0C4.04743 0 3.68917 0.313477 3.68917 0.703125V1.875H2.34989C1.16797 1.875 0.207031 2.71582 0.207031 3.75V4.21875V5.625V13.125C0.207031 14.1592 1.16797 15 2.34989 15H13.0642C14.2461 15 15.207 14.1592 15.207 13.125V5.625V4.21875V3.75C15.207 2.71582 14.2461 1.875 13.0642 1.875H11.7249V0.703125C11.7249 0.313477 11.3666 0 10.9213 0C10.476 0 10.1177 0.313477 10.1177 0.703125V1.875H5.29632V0.703125ZM1.81417 5.625H13.5999V13.125C13.5999 13.3828 13.3588 13.5938 13.0642 13.5938H2.34989C2.05525 13.5938 1.81417 13.3828 1.81417 13.125V5.625ZM3.42132 8.4375C3.42132 8.68614 3.5342 8.9246 3.73513 9.10041C3.93606 9.27623 4.20858 9.375 4.49275 9.375C4.77691 9.375 5.04943 9.27623 5.25036 9.10041C5.45129 8.9246 5.56417 8.68614 5.56417 8.4375C5.56417 8.18886 5.45129 7.9504 5.25036 7.77459C5.04943 7.59877 4.77691 7.5 4.49275 7.5C4.20858 7.5 3.93606 7.59877 3.73513 7.77459C3.5342 7.9504 3.42132 8.18886 3.42132 8.4375ZM10.9213 10.3125C10.6372 10.3125 10.3646 10.4113 10.1637 10.5871C9.96277 10.7629 9.84989 11.0014 9.84989 11.25C9.84989 11.4986 9.96277 11.7371 10.1637 11.9129C10.3646 12.0887 10.6372 12.1875 10.9213 12.1875C11.2055 12.1875 11.478 12.0887 11.6789 11.9129C11.8799 11.7371 11.9927 11.4986 11.9927 11.25C11.9927 11.0014 11.8799 10.7629 11.6789 10.5871C11.478 10.4113 11.2055 10.3125 10.9213 10.3125ZM6.6356 8.4375C6.6356 8.82715 6.99386 9.14062 7.43917 9.14062H11.1892C11.6345 9.14062 11.9927 8.82715 11.9927 8.4375C11.9927 8.04785 11.6345 7.73438 11.1892 7.73438H7.43917C6.99386 7.73438 6.6356 8.04785 6.6356 8.4375ZM7.97489 10.5469H4.22489C3.77958 10.5469 3.42132 10.8604 3.42132 11.25C3.42132 11.6396 3.77958 11.9531 4.22489 11.9531H7.97489C8.4202 11.9531 8.77846 11.6396 8.77846 11.25C8.77846 10.8604 8.4202 10.5469 7.97489 10.5469Z"
                      fill="#0575FC"
                    />
                  </svg>
                </Box>
                <Typography
                  className={classes.sub_text1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Started on DD/MM/YYYY
                </Typography>
              </Box>

              {/* button group  */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Typography className={classes.sub_button_text}>
                  Modify
                </Typography>
                <Typography className={classes.sub_button_text}>
                  Pause
                </Typography>
                <Typography className={classes.sub_button_text}>
                  Cancel
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* mobile subscription  */}
          {/* subscribe  */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <RadioButtonCheckbox
              sx={{ marginRight: "0px" }}
              selected={isSubScribe}
              handleToggle={handleClickSubScribe}
            />
            <Typography>Subscribe & Save</Typography>
            <Box
              sx={{
                marginLeft: "22px",
                padding: "5px 10px",
                borderRadius: "2px",
                background: "var(--border, #E2E2E2)",
              }}
            >
              <Typography>10% OFF</Typography>
            </Box>
          </Box>
          {/* fourth */}
          <Box
            sx={{
              display: isSubScribe ? "flex" : "none",
              flexDirection: "column",
              gap: "22px",
              marginTop: { xs: "30px", sm: "20px", md: "20px" },
            }}
          >
            <Box>
              <Typography className={classes.sub_scription_text}>
                Add as Subscription
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: "17px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "22px" }}
              >
                <Box>
                  <Typography className={classes.sub_text1}>
                    Pick Schedule
                  </Typography>
                </Box>
                <Box sx={{ width: "343px" }}>
                  <CustomRadioGroupButton />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography className={classes.sub_text1}>
                  Start Date
                </Typography>
                <Box sx={{ marginTop: "6px", width: "100%" }}>
                  <DatePicker />
                </Box>

                <Box sx={{ marginTop: "6px", width: "100%" }}>
                  {/* <WeekPicker /> */}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "23.5px",
                    gap: "9px",
                  }}
                >
                  <Switch
                  // sx={{ width: "18px", height: "8px" }}
                  // inputProps={{ style: { width: "24px", height: "15px" } }}
                  />
                  <Typography className={classes.sub_text1}>
                    Enable Auto Pay
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* cupon */}
        <Box
          sx={{
            width: { xs: "100%", sm: "400px", md: "400px" },
            marginLeft: { xs: "0px", sm: "31px", md: "31px" },
            marginTop: { xs: "24px" },
          }}
        >
          <Typography className={classes.header_text}>Cupon</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "29px",
              marginTop: "6px",
              width: "100%",
            }}
          >
            {/* cupon */}
            <Box
              sx={{
                display: "flex",
                padding: "19px 21px",
                borderRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "28.5px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.4878 9.00099C21.4878 9.81449 22.2815 10.4764 23.2569 10.4764C23.7487 10.4764 24.1479 10.8093 24.1479 11.2195V13.8958C24.1479 16.159 21.9405 18 19.227 18H5.30885C2.59532 18 0.386719 16.159 0.386719 13.8958V11.2195C0.386719 10.8093 0.785907 10.4764 1.27776 10.4764C2.25435 10.4764 3.04797 9.81449 3.04797 9.00099C3.04797 8.2083 2.28643 7.6118 1.27776 7.6118C1.04134 7.6118 0.815608 7.53352 0.648092 7.39381C0.480575 7.2541 0.386719 7.06485 0.386719 6.86866L0.389095 4.10514C0.389095 1.84201 2.59651 0 5.31004 0H19.2246C21.9381 0 24.1467 1.84201 24.1467 4.10514L24.1479 6.78245C24.1479 6.97864 24.0541 7.16889 23.8877 7.30761C23.7202 7.44732 23.4945 7.5256 23.2569 7.5256C22.2815 7.5256 21.4878 8.18749 21.4878 9.00099ZM14.9428 9.64802L16.3435 8.51051C16.5871 8.31432 16.6715 8.02499 16.5657 7.75746C16.4612 7.48993 16.1879 7.29968 15.8576 7.26104L13.9223 7.02521L13.0562 5.5627C12.9077 5.31102 12.6059 5.15446 12.2697 5.15347H12.2673C11.9323 5.15347 11.6305 5.31003 11.4796 5.56171L10.6135 7.02521L8.68175 7.26005C8.34791 7.29968 8.07465 7.48993 7.96892 7.75746C7.86437 8.02499 7.94872 8.31432 8.19108 8.51051L9.59181 9.64802L9.26152 11.2562C9.2045 11.5336 9.33875 11.8091 9.612 11.9746C9.76645 12.0667 9.94585 12.1143 10.1276 12.1143C10.2666 12.1143 10.4068 12.0855 10.5351 12.0291L12.2673 11.2701L13.9959 12.0271C14.2953 12.1609 14.6506 12.14 14.9226 11.9736C15.1971 11.8091 15.3313 11.5336 15.2743 11.2562L14.9428 9.64802Z"
                    fill="#0575FC"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  marginLeft: "14.26px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "14.26px",
                    lineHeight: "1",
                  }}
                >
                  <Typography
                    sx={{ lineHeight: "1" }}
                    className={classes.sub_header}
                  >
                    Frenzy30
                  </Typography>
                  <Typography
                    className={classes.sub_header}
                    sx={{
                      lineHeight: "1",
                      color: "rgba(77, 77, 77, 0.90) !important",
                    }}
                  >
                    Applied
                  </Typography>
                </Box>
                <Typography
                  sx={{ lineHeight: "1", color: "rgba(0, 0, 0, 0.60)" }}
                  className={classes.sub_header}
                >
                  -$72 | (30% off)
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: "1",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  className={classes.sub_header}
                  sx={{
                    color: "#E00B0B !important",
                    fontWeight: "600 !important",
                  }}
                >
                  Remove
                </Typography>
              </Box>
            </Box>

            {/* total amount */}
            <Box>
              <Typography className={classes.header_text}>
                Total amount
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "17px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                    padding: "16px 15px 16px 19px",
                    marginTop: "10px",
                    background: "#F9F9F9",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.black_sub_text}>
                      Order Subtotal
                    </Typography>
                    <Typography className={classes.price_400_text}>
                      $105.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.black_sub_text}>
                      Addon Subscript ion
                    </Typography>
                    <Typography className={classes.price_400_text}>
                      $105.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.black_sub_text}>
                      Tax
                    </Typography>
                    <Typography className={classes.price_400_text}>
                      $105.00
                    </Typography>
                  </Box>
                  <Box></Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.header_text}>
                      Total amount
                    </Typography>
                    <Typography className={classes.header_text}>
                      $165.00
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* pay button  */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    minWidth: "21.4px",
                    height: "21.6px",
                  }}
                >
                  <CustomCheckbox
                    backgroundColor={white}
                    checkedBackgroundColor={blue}
                  />
                </Box>
                <Box sx={{ marginLeft: "9.74px" }}>
                  By Continuing you agree to our
                  <a> Terms of services </a>
                  and
                  <a> Privacy policy.</a>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "16px",
                  borderRadius: "10px",
                  border: "1px solid var(--1, #0575FC)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    paddingTop: "8px",
                    paddingLeft: "14.9px",
                    paddingBottom: "8px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                  >
                    <Typography className={classes.pay_using_text}>
                      {" "}
                      Pay Using
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <path
                        d="M7.58789 3.75L5.08789 6.25L2.58789 3.75"
                        stroke="#0575FC"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "3px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24 "
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                    >
                      <path
                        opacity="0.2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.9388 15.0563C20.7912 15.0563 23.9142 11.8971 23.9142 7.99997C23.9142 4.10285 20.7912 0.943604 16.9388 0.943604C15.2122 0.943604 13.6322 1.57818 12.4141 2.62936C11.1961 1.57818 9.61601 0.943609 7.88945 0.943609C4.03705 0.943609 0.914062 4.10285 0.914062 7.99997C0.914062 11.8971 4.03705 15.0563 7.88945 15.0563C9.61602 15.0563 11.1961 14.4218 12.4141 13.3706C13.6322 14.4218 15.2122 15.0563 16.9388 15.0563Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4137 13.3718C13.9135 12.0775 14.8645 10.1516 14.8645 8.00107C14.8645 5.8505 13.9135 3.92464 12.4137 2.63037C10.9139 3.92464 9.96289 5.8505 9.96289 8.00107C9.96289 10.1516 10.9139 12.0775 12.4137 13.3718Z"
                        fill="#8D8D8D"
                      />
                    </svg>
                    <Typography className={classes.master_card_text}>
                      ***** 7054
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ width: "207px" }}
                  className={classes.pay_btn}
                >
                  Proceed & Pay
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* select payment method */}
        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "block" },
            width: "335px",
            marginLeft: "20px",
          }}
        >
          <Typography className={classes.header_text} sx={{ color: "#444" }}>
            Select Payment Method
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Radio />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                viewBox="0 0 38 24"
                fill="none"
              >
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.7906 20.3057C16.8003 22.0232 14.2187 23.0599 11.3977 23.0599C5.10291 23.0599 0 17.8978 0 11.53C0 5.16214 5.10291 0 11.3977 0C14.2187 0 16.8004 1.03681 18.7907 2.75431C20.7809 1.03687 23.3626 9.80299e-05 26.1836 9.80299e-05C32.4784 9.80299e-05 37.5813 5.16224 37.5813 11.5301C37.5813 17.8979 32.4784 23.06 26.1836 23.06C23.3625 23.06 20.7808 22.0232 18.7906 20.3057Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.7896 2.75464C21.2402 4.86945 22.7941 8.01626 22.7941 11.5302C22.7941 15.0441 21.2403 18.1909 18.7897 20.3057C16.3391 18.1909 14.7852 15.0441 14.7852 11.5301C14.7852 8.01622 16.339 4.86945 18.7896 2.75464Z"
                  fill="#8D8D8D"
                />
              </svg>

              <Typography className={classes.payment_method_text}>
                Credit | Debit | ATM
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <TextField
                InputProps={{
                  style: {
                    height: "45px",
                    borderRadius: "6px",
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                  },
                }}
                placeholder="Card Holder's Name"
              />
              <TextField
                placeholder="Card Number"
                InputProps={{
                  style: {
                    height: "45px",
                    borderRadius: "6px",
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                  },
                }}
              />
              <Box sx={{ display: "flex", gap: "11px" }}>
                <TextField
                  placeholder="Expire"
                  InputProps={{
                    style: {
                      height: "45px",
                      borderRadius: "6px",
                      border: "1px solid rgba(0, 0, 0, 0.07)",
                    },
                  }}
                />
                <TextField
                  placeholder="CVV"
                  InputProps={{
                    style: {
                      height: "45px",
                      borderRadius: "6px",
                      border: "1px solid rgba(0, 0, 0, 0.07)",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* four radio button  */}
            <Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0, 0, 0, 0.10)",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="18"
                  viewBox="0 0 42 18"
                  fill="none"
                >
                  <path
                    d="M7.67419 2.60074C7.18195 3.18323 6.39436 3.64266 5.60677 3.57703C5.50832 2.78944 5.89391 1.95262 6.34513 1.43577C6.83738 0.836869 7.6988 0.410258 8.39615 0.377441C8.47819 1.19785 8.15823 2.00185 7.67419 2.60074ZM8.38795 3.7329C7.24758 3.66727 6.2713 4.38103 5.72983 4.38103C5.18016 4.38103 4.35155 3.76572 3.4491 3.78213C2.27592 3.79854 1.18478 4.46307 0.585881 5.52139C-0.644729 7.63804 0.265922 10.772 1.45551 12.4948C2.038 13.3481 2.73535 14.2833 3.6542 14.2505C4.52383 14.2177 4.8684 13.6844 5.91852 13.6844C6.97685 13.6844 7.2804 14.2505 8.19925 14.2341C9.15092 14.2177 9.74982 13.3809 10.3323 12.5277C10.9968 11.5596 11.2676 10.6161 11.284 10.5669C11.2676 10.5505 9.44627 9.85314 9.42986 7.7529C9.41345 5.99723 10.8656 5.16041 10.9312 5.11119C10.1108 3.89699 8.83097 3.76572 8.38795 3.7329ZM14.9758 1.35373V14.1439H16.9612V9.7711H19.7096C22.22 9.7711 23.9839 8.04824 23.9839 5.55421C23.9839 3.06017 22.2528 1.35373 19.7752 1.35373H14.9758ZM16.9612 3.02735H19.2501C20.973 3.02735 21.9575 3.94621 21.9575 5.56241C21.9575 7.17861 20.973 8.10567 19.2419 8.10567H16.9612V3.02735ZM27.6101 14.2423C28.8571 14.2423 30.0139 13.6106 30.5389 12.6097H30.5799V14.1439H32.4177V7.77751C32.4177 5.93159 30.9409 4.742 28.6684 4.742C26.5599 4.742 25.0012 5.948 24.9437 7.60522H26.7322C26.8799 6.81763 27.6101 6.30078 28.611 6.30078C29.8252 6.30078 30.5061 6.86686 30.5061 7.90877V8.61432L28.0285 8.762C25.7231 8.90146 24.4761 9.84493 24.4761 11.4857C24.4761 13.143 25.7642 14.2423 27.6101 14.2423ZM28.1433 12.7246C27.085 12.7246 26.4123 12.2159 26.4123 11.4365C26.4123 10.6325 27.0604 10.1649 28.2992 10.0911L30.5061 9.95158V10.6735C30.5061 11.8713 29.4888 12.7246 28.1433 12.7246ZM34.8707 17.6224C36.8068 17.6224 37.7175 16.884 38.5133 14.6443L42 4.86507H39.9818L37.6436 12.421H37.6026L35.2645 4.86507H33.1888L36.5525 14.1767L36.372 14.7428C36.0685 15.7026 35.5762 16.0718 34.6984 16.0718C34.5425 16.0718 34.239 16.0554 34.1159 16.039V17.5732C34.2308 17.606 34.723 17.6224 34.8707 17.6224Z"
                    fill="#9A9A9A"
                  />
                </svg>
                <Typography
                  className={classes.payment_method_text}
                  sx={{ marginLeft: "14px" }}
                >
                  Apple Pay
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0, 0, 0, 0.10)",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                >
                  <path
                    d="M27.2969 4.95108C24.3323 3.23974 20.5414 4.25665 18.8281 7.22129L14.5095 14.7024C13.2599 16.8627 14.8686 17.6176 16.6624 18.6931L20.818 21.0916C22.2252 21.9033 24.0227 21.4214 24.8344 20.016L29.2739 12.3278C30.7654 9.74431 29.8804 6.44258 27.2969 4.95108Z"
                    fill="#7E7E7E"
                  />
                  <path
                    d="M22.4117 8.04748L18.2561 5.64906C15.9621 4.37563 14.663 4.29135 13.7212 5.78832L7.5923 16.4027C5.88093 19.3655 6.89969 23.1546 9.86246 24.8623C12.446 26.3538 15.7477 25.4688 17.2392 22.8853L23.4854 12.0657C24.3008 10.6585 23.8189 8.85919 22.4117 8.04748Z"
                    fill="#9A9A9A"
                  />
                  <path
                    d="M23.212 2.5911L20.2932 0.90541C17.0647 -0.958013 12.9366 0.146846 11.0732 3.37531L5.51593 13.0002C4.69507 14.4202 5.18246 16.2378 6.6025 17.0569L9.87128 18.9441C11.4855 19.8768 13.5486 19.3234 14.4813 17.7092L20.8301 6.71373C22.1456 4.4362 25.0571 3.65565 27.3346 4.97122L23.212 2.5911Z"
                    fill="#AEAEAE"
                  />
                  <path
                    d="M11.8624 6.1291L8.70723 4.31149C7.30001 3.50163 5.50258 3.98168 4.69088 5.3852L0.905412 11.9264C-0.958015 15.1457 0.146847 19.2647 3.37531 21.1226L5.77742 22.5059L8.69072 24.1843L9.955 24.9117C7.71046 23.4093 6.99771 20.3988 8.37006 18.0279L9.35033 16.3349L12.9398 10.1326C13.7496 8.73279 13.2678 6.93896 11.8624 6.1291Z"
                    fill="#7E7E7E"
                  />
                </svg>
                <Typography
                  className={classes.payment_method_text}
                  sx={{ marginLeft: "14px" }}
                >
                  GPay
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0, 0, 0, 0.10)",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="19"
                  viewBox="0 0 44 19"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.4229 3.04111L20.4064 3.68849V1.24282L23.4229 0.607422V3.04111ZM29.6962 4.39585C28.5184 4.39585 27.7613 4.94733 27.3407 5.33096L27.1844 4.58767H24.5405V18.5664L27.545 17.931L27.557 14.5382C27.9897 14.8499 28.6266 15.2935 29.6842 15.2935C31.8354 15.2935 33.7943 13.5671 33.7943 9.76675C33.7823 6.29005 31.7994 4.39585 29.6962 4.39585ZM28.975 12.656C28.2659 12.656 27.8453 12.4043 27.5569 12.0926L27.5449 7.64481C27.8573 7.29714 28.29 7.05737 28.975 7.05737C30.0686 7.05737 30.8258 8.28021 30.8258 9.85071C30.8258 11.4572 30.0807 12.656 28.975 12.656ZM43.2646 9.88663C43.2646 6.81755 41.7744 4.39585 38.9261 4.39585C36.0658 4.39585 34.3352 6.81755 34.3352 9.86265C34.3352 13.4712 36.3783 15.2935 39.3107 15.2935C40.7408 15.2935 41.8224 14.9698 42.6397 14.5142V12.1165C41.8224 12.5241 40.885 12.7759 39.6953 12.7759C38.5295 12.7759 37.496 12.3683 37.3638 10.9536H43.2406C43.2406 10.8875 43.2449 10.7374 43.2499 10.5645C43.2566 10.3295 43.2646 10.0524 43.2646 9.88663ZM37.3274 8.74792C37.3274 7.39321 38.1566 6.82974 38.9138 6.82974C39.6469 6.82974 40.428 7.39321 40.428 8.74792H37.3274ZM20.4062 4.59968H23.4228V15.0897H20.4062V4.59968ZM16.9814 4.59961L17.1737 5.48677C17.8827 4.192 19.2889 4.45575 19.6734 4.59961V7.35699C19.3009 7.22512 18.0991 7.05728 17.39 7.9804V15.0896H14.3855V4.59961H16.9814ZM11.1646 1.99824L8.23215 2.62165L8.22014 12.2245C8.22014 13.9988 9.55414 15.3056 11.3328 15.3056C12.3183 15.3056 13.0394 15.1258 13.436 14.91V12.4763C13.0514 12.6321 11.1525 13.1836 11.1525 11.4093V7.15334H13.436V4.59977H11.1525L11.1646 1.99824ZM4.06209 6.99738C3.42513 6.99738 3.04056 7.17721 3.04056 7.64477C3.04056 8.15526 3.70242 8.37982 4.52353 8.65842C5.86214 9.1126 7.62399 9.71037 7.63143 11.9247C7.63143 14.0707 5.91286 15.3055 3.41311 15.3055C2.37957 15.3055 1.24987 15.1017 0.132198 14.6221V11.7688C1.14171 12.3203 2.41562 12.7279 3.41311 12.7279C4.08612 12.7279 4.56684 12.5481 4.56684 11.9966C4.56684 11.4312 3.84937 11.1727 2.98319 10.8607C1.66405 10.3854 0 9.78597 0 7.78863C0 5.66664 1.62243 4.39585 4.06209 4.39585C5.05958 4.39585 6.04506 4.5517 7.04255 4.94733V7.76465C6.12918 7.27312 4.97546 6.99738 4.06209 6.99738Z"
                    fill="#9A9A9A"
                  />
                </svg>
                <Typography
                  className={classes.payment_method_text}
                  sx={{ marginLeft: "14px" }}
                >
                  {" "}
                  Stripe
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0, 0, 0 , 0.10)",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="7"
                  viewBox="0 0 41 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.2951 0.401468C38.7542 0.401468 39.5567 1.04619 39.5567 2.264C39.6297 3.19527 38.9731 3.98326 38.0976 4.12654L40.0674 6.77707H38.5354L36.8574 4.19817H36.7115V6.77707H35.4713V0.401468H37.2951ZM36.7115 3.33853H37.0763C37.8788 3.33853 38.2435 2.98035 38.2435 2.33562C38.2435 1.76254 37.8788 1.40436 37.0763 1.40436H36.7115V3.33853ZM31.167 6.77706H34.6688V5.70252H32.4072V3.98326H34.5958V2.90872H32.4072V1.476H34.6688V0.401459H31.167V6.77706V6.77706ZM27.5192 4.69961L25.8413 0.401459H24.5281L27.2274 6.92033H27.884L30.5833 0.401459H29.2701L27.5192 4.69961V4.69961ZM12.7095 3.62508C12.7095 5.41597 14.1686 6.92033 15.9924 6.92033C16.5761 6.92033 17.0867 6.77706 17.5974 6.56215V5.12943C17.2327 5.55925 16.722 5.84579 16.1383 5.84579C14.9711 5.84579 14.0227 4.98616 14.0227 3.83998V3.69671C13.9497 2.55054 14.8981 1.54763 16.0654 1.476C16.649 1.476 17.2327 1.76254 17.5974 2.19236V0.759638C17.1597 0.473094 16.5761 0.401459 16.0654 0.401459C14.1686 0.258187 12.7095 1.76254 12.7095 3.62508V3.62508ZM10.4479 2.83708C9.71834 2.55054 9.49948 2.40726 9.49948 2.04909C9.57244 1.61927 9.93721 1.26109 10.3749 1.33273C10.7397 1.33273 11.1045 1.54763 11.3963 1.83418L12.0529 0.974546C11.5422 0.544731 10.8856 0.258187 10.229 0.258187C9.20766 0.186551 8.33221 0.974546 8.25926 1.97745V2.04909C8.25926 2.90872 8.62403 3.41017 9.7913 3.76835C10.0831 3.83998 10.3749 3.98326 10.6668 4.12653C10.8856 4.2698 11.0315 4.48471 11.0315 4.77125C11.0315 5.2727 10.5938 5.70252 10.1561 5.70252H10.0831C9.49948 5.70252 8.9888 5.34434 8.76994 4.84289L7.96744 5.63088C8.40516 6.41888 9.28062 6.84869 10.1561 6.84869C11.3233 6.92033 12.2718 6.0607 12.3447 4.91452V4.69961C12.2718 3.83998 11.907 3.41017 10.4479 2.83708V2.83708ZM6.21653 6.77706H7.45676V0.401459H6.21653V6.77706V6.77706ZM0.453125 0.401468H2.27699H2.64176C4.39267 0.473104 5.7788 1.90582 5.70585 3.62509C5.70585 4.55635 5.26812 5.41598 4.53858 6.06071C3.88199 6.56216 3.07949 6.8487 2.27699 6.77707H0.453125V0.401468ZM2.05812 5.70252C2.64175 5.77416 3.29834 5.55925 3.73607 5.20107C4.1738 4.77126 4.39266 4.19817 4.39266 3.55345C4.39266 2.98036 4.1738 2.40727 3.73607 1.97746C3.29834 1.61928 2.64175 1.40437 2.05812 1.47601H1.69335V5.70252H2.05812Z"
                    fill="#AEAEAE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.3168 0.253662C19.493 0.253662 17.9609 1.68638 17.9609 3.54891C17.9609 5.33981 19.42 6.84417 21.3168 6.9158C23.2137 6.98744 24.6728 5.48308 24.7457 3.62055C24.6728 1.75802 23.2137 0.253662 21.3168 0.253662V0.253662Z"
                    fill="#7E7E7E"
                  />
                </svg>
                <Typography
                  className={classes.payment_method_text}
                  sx={{ marginLeft: "14px" }}
                >
                  Discover
                </Typography>
              </Box>
            </Box>

            {/* confirm button   */}
            <Button
              variant="contained"
              sx={{ padding: "15px 140px 15px 136px", lineHeight: "1" }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
