import React from "react";
import { useState } from "react";
import Menu from "../../layout/menu";
import Sidebar from "../../layout/sidebar";
import Products from "./products.jsx";
import SearchableSelect from "../../components/searchSelect/index.jsx";
import TimeSlot from "../../components/timeslot/index.jsx";
import HeaderTab from "../../components/header_tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Grid,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  FormHelperText,
  Paper,
  Input,
  TextField,
  Popover,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Background, Logo, MobileBG } from "../../components/image.jsx";
import {
  Location,
  Vector,
  Avatar,
  Cart,
  Ellipse,
} from "../../components/image.jsx";
import PickUp from "../../components/pickup/index.jsx";
import { makeStyles } from "@mui/styles";
import WaitingTime from "../../components/waitingTime/index.jsx";
import BookingTable from "../../components/bookingTable/index.jsx";
import CartComponent from "../../components/cart/cart";
import { Product1, Product2 } from "../../components/image";
import BottomMenu from "../../layout/bottomMenu";
import AddCart from "../../components/addCart";

const useStyles = makeStyles((theme) => ({
  dot: {
    width: "6px",
    height: "6px",
    flexShrink: "0",
    borderRadius: "90px",
    background: "#444",
  },
  home_text: {
    color: "#000",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
  sub_text: {
    color: "#444",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
  menu_title: {
    color: "#000",
    fontSize: "20px !important",
    fontWeight: "500 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineheight: "14px !important",
  },
  select_box: {
    "& .MuiSelect-select": {
      height: "45px", // Set the height of the select box in pixels
    },
  },

  menuPaper: {
    maxWidth: "50px",
  },

  category: {
    display: "flex",
    height: "37px",
    padding: "10px 14px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.09)",
    background: "#FFF",
    whiteSpace: "nowrap",
  },
  sub_category: {
    // display: "flex",
    // height: "37px",
    // padding: "10px 14px",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: "5px",
    // borderRadius: "8px",
    // border: "1px solid rgba(0, 0, 0, 0.09)",
    padding: "10px 0px 10px 0px",
    background: "#FFF",
    whiteSpace: "nowrap",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    console.log(newValue);
  };

  const [isArrange, setArrange] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const products = [
    { img: Product2, addedToCart: true },
    { img: Product2, addedToCart: true },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
  ];
  const handleArrange = () => {
    setArrange(!isArrange);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menu />
      <Grid
        container
        component="main"
        sx={{
          paddingLeft: { xs: "19px", md: "100px" },
          paddingRight: { xs: "21px", md: "100px" },
          paddingBottom: { sm: "57px", md: "57px" },
        }}
      >
        {/* mobile  */}
        <Box
          compoenent="header"
          style={{
            marginTop: "22px",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginTop: "19px",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-between",
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            <Box
              sx={{
                flexGrow: "1",
                display: { xs: "none", sm: "none", md: "block" },
                width: "100%",
              }}
            >
              <div
                sx={{
                  width: "100%",
                  m: 1,
                }}
              >
                {/* mobile  */}
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%", height: "45px" }}
                >
                  <MenuItem value="">Select Outline</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </Box>
            <Box>
              <Grid container alignItems="flex-end" gap="11px">
                <Grid item>
                  <Grid
                    container
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="2px"
                  >
                    <Grid item style={{ lineHeight: "1" }}>
                      <Grid container alignItems="center" gap="5px">
                        <Grid item>
                          <img
                            src={Location}
                            style={{
                              width: "12px",
                              height: "14px",
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: "#000",
                              fontFamily: "Metropolis",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "normal",
                            }}
                          >
                            Home
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" gap="9px">
                        <Grid item>
                          <Typography
                            style={{
                              color: "#989898",
                              fontFamily: "Metropolis",
                              fontSize: "10px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "normal",
                            }}
                          >
                            3569,spadina...
                          </Typography>
                        </Grid>

                        <img
                          src={Vector}
                          style={{
                            width: "8px",
                            height: "4px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            {/* mobile  */}
            <Box
              style={{
                // height: "28px",
                border: "1px solid",
                display: "flex",
                // gap: "4px",
                backgroundColor: "#F1F1F1",
                borderRadius: "4px",
                border: "0.5px solid rgba(0, 0, 0, 0.01)",
                boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
                padding: "3px",
              }}
            >
              <Button
                onClick={() => {
                  handleChange(1);
                }}
                style={{
                  backgroundColor: selectedValue == 1 ? "#0575FC" : "#F1F1F1",
                  color: selectedValue == 1 ? "#FFF" : "#989898",
                  lineHeight: "1",
                }}
                sx={{
                  padding: {
                    xs: "8px 6px",
                    md: "8px 6.34px 7px 6.66px",
                  }, // Adjust the padding as needed
                }}
              >
                Pick Up
              </Button>
              <Button
                onClick={() => {
                  handleChange(2);
                }}
                style={{
                  backgroundColor: selectedValue == 2 ? "#0575FC" : "#F1F1F1",
                  color: selectedValue == 2 ? "#FFF" : "#989898",
                  lineHeight: "1",
                }}
                sx={{
                  padding: {
                    xs: "8px 6.34px 8px 6.66px",
                    md: "8px 6.34px 8px 6.66px",
                  }, // Adjust the padding as needed
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
                  lineHeight: "1",
                }}
                sx={{
                  padding: {
                    xs: "8px 6.34px 8px 6.66px",
                    md: "8px 6.34px 8px 6.66px",
                  }, // Adjust the padding as needed
                }}
              >
                Dine in
              </Button>
            </Box>

            {/* for pickup, delivery  */}
            <Box
              sx={{
                display:
                  selectedValue == 2 || selectedValue == 3 ? "none" : "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TimeSlot />
              <Box
                item
                style={{
                  borderRadius: "6px",
                  border: "1px solid var(--border, #E2E2E2)",
                  background: "#FFF",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 12px",
                  minWidth: "100px",
                  width: "165px",
                }}
              >
                Pickup time 25min
              </Box>
            </Box>

            {/* for dine in  */}
            <Box
              sx={{
                display: selectedValue == 3 ? "flex" : "none",
                width: "100%",
                gap: "15px",
              }}
            >
              <BookingTable />
              <WaitingTime selectedValue={selectedValue} />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
            <img
              src={Background}
              style={{
                width: "100%",
                height: "417px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              marginTop: "10.08px",
            }}
          >
            <img
              src={MobileBG}
              style={{
                width: "100%",
                height: "196px",
              }}
            />
          </Box>
          <Box
            container
            sx={{
              display: "flex",
              paddingLeft: { xs: "", md: "260px" },
              flexDirection: { xs: "row", md: "column" },
              marginTop: "10.08px",
              gap: "11px",
              alignItems: "flex-start",
            }}
            style={{
              marginTop: "15px",
              position: "relative",
            }}
          >
            {/* mobile logo*/}
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <img
                src={Logo}
                style={{
                  width: { md: "100%", xs: "66px" },
                  bottom: "0px",
                  borderRadius: "11px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "lightgray 50% / cover no-repeat",
                  boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
                  width: "100%",
                  maxWidth: "66px",
                }}
              />
            </Box>
            {/* web logo*/}
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <img
                src={Logo}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "6px",
                  borderRadius: "11px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "lightgray 50% / cover no-repeat",
                  boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
                }}
              />
            </Box>

            {/* kitchen header  */}
            <Box sx={{ flexGrow: "1", width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: { xs: "5px", sm: "10ppx" },
                }}
              >
                {/* left side  */}
                <Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      flexDirection: { xs: "column" },
                      justifyContent: "flex-start",
                      alignItems: "flex-start",

                      gap: "5px",
                    }}
                  >
                    {/* web title */}
                    <Typography
                      sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                      className={classes.home_text}
                      style={{
                        fontSize: "32px",
                        lineHeight: "1",
                        fontWeight: "600",
                      }}
                    >
                      Kitchen Café & Resto Bar, Spadina
                    </Typography>

                    {/* mobile title */}
                    <Typography
                      sx={{ display: { xs: "block", sm: "none", md: "none" } }}
                      className={classes.home_text}
                      style={{
                        fontSize: "22px",
                        lineHeight: "1",
                        fontWeight: "600",
                      }}
                    >
                      Kitchen Café & Resto
                    </Typography>

                    {/* mobile */}
                    <Box
                      className={classes.home_text}
                      sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
                      style={{
                        alignItems: "center",
                        gap: "8px",
                        color: "#444",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "1",
                      }}
                    >
                      <span>Franch</span>
                      <span className={classes.dot}></span>
                      <span>Chinese</span>
                      <span className={classes.dot}></span>
                      <span>Italian</span>
                    </Box>

                    {/* mobile */}
                    <Typography
                      className={classes.home_text}
                      sx={{
                        display: { xs: "flex", sm: "none", md: "none" },
                        alignItems: "center",
                        color: "#444",
                        fontSize: "15px",
                        fontWeight: "400",
                        gap: "5px",
                        lineHeight: "1",
                      }}
                    >
                      <span>Open</span>
                      <span className={classes.dot}></span>
                      Mon 10:00 AM To 10:00 PM
                    </Typography>
                  </Box>
                  {/* web */}
                  <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                    <Box
                      className={classes.home_text}
                      sx={{
                        justifyContent: "space-between",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                      style={{
                        marginTop: "16px",
                        width: "100%",
                        alignItems: "flex-start",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span style={{ color: "#19930E" }}>Open</span>
                        <span className={classes.dot}></span>
                        <span>Franch</span>
                        <span className={classes.dot}></span>
                        <span>Chinese</span>
                        <span className={classes.dot}></span>
                        <span>Italian</span>
                      </Box>
                      <Typography className={classes.home_text}>
                        Mon 10:00 AM To 10:00 PM
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      flexBasis: { sm: "286px", md: "286px", xs: "100%" },
                      marginTop: "12px",
                      display: { xs: "none", sm: "block", md: "block" },
                    }}
                  >
                    <div
                      style={{ width: "100%", m: 1 }}
                      sx={{ display: "none" }}
                    >
                      <SearchableSelect />
                    </div>
                  </Box>
                </Box>
                {/* web  right side  */}
                <Box
                  sx={{
                    // flexGrow: "1",
                    display: { xs: "none", sm: "block", md: "block" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      marginTop: { xs: "0px", sm: "0px", md: "0px" },
                      alignItems: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* web */}

                    <Box
                      sx={{
                        display: { xs: "none", sm: "flex", md: "flex" },
                        width: "100%",
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
                          backgroundColor:
                            selectedValue == 1 ? "#0575FC" : "#F1F1F1",
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
                          backgroundColor:
                            selectedValue == 2 ? "#0575FC" : "#F1F1F1",
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
                          backgroundColor:
                            selectedValue == 3 ? "#0575FC" : "#F1F1F1",
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
                        width: "100%",
                        display: selectedValue == 2 ? "none" : "block",
                      }}
                    >
                      {/* for pickup, delivery  */}
                      <Box sx={{ display: "flex", width: "100%", gap: "15px" }}>
                        <Box
                          sx={{
                            display:
                              selectedValue == 3
                                ? "none"
                                : { xs: "none", sm: "flex", md: "flex" },
                            flexBasis: "195px",
                            flexGrow: "1",
                          }}
                        >
                          <TimeSlot />
                        </Box>
                        <Box
                          sx={{
                            display:
                              selectedValue == 3
                                ? "none"
                                : { xs: "none", sm: "flex", md: "flex" },
                            flexGrow: "1",
                          }}
                          style={{
                            borderRadius: "6px",
                            border: "1px solid var(--border, #E2E2E2)",
                            background: "#FFF",
                            height: "45px",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "13px 12px",
                            minWidth: "100px",
                            // whiteSpace: "nowrap",
                          }}
                        >
                          Pick up 25mile
                        </Box>
                      </Box>

                      {/* for dine in  */}
                      <Box
                        sx={{
                          display: selectedValue == 3 ? "flex" : "none",
                          width: "100%",
                          gap: "15px",
                        }}
                      >
                        <BookingTable />
                        <WaitingTime selectedValue={selectedValue} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* mobile select outlet */}
          <Box
            sx={{
              flexBasis: { sm: "286px", md: "286px", xs: "100%" },
              marginTop: "12px",
              display: { xs: "flex", sm: "none", md: "none" },
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", m: 1 }}>
              <SearchableSelect />
            </div>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22Z"
                  stroke="#444444"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 12.6297C16.1234 11.7975 15.9812 10.9475 15.5937 10.2007C15.2062 9.45388 14.5931 8.84829 13.8416 8.47003C13.0901 8.09176 12.2384 7.9601 11.4077 8.09377C10.5771 8.22743 9.80971 8.61962 9.21479 9.21454C8.61987 9.80946 8.22768 10.5768 8.09402 11.4075C7.96035 12.2381 8.09202 13.0898 8.47028 13.8413C8.84854 14.5928 9.45414 15.206 10.2009 15.5935C10.9477 15.981 11.7977 16.1231 12.63 15.9997C13.4789 15.8738 14.2648 15.4782 14.8716 14.8714C15.4785 14.2645 15.8741 13.4786 16 12.6297Z"
                  stroke="#444444"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 17.5H17.5113"
                  stroke="#444444"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#444444"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke="#444444"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          component="body"
          sx={{ marginTop: { sm: "26px", md: "26px", xs: "30px" } }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "23px",
            marginBottom: { xs: "37px", sm: "57.1px", md: "57.1px" },
          }}
        >
          <Box
            style={{ flexBasis: "235px", flexGrow: "1" }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Sidebar />
          </Box>
          <Box style={{ flexGrow: "2" }}>
            <Products />
          </Box>
        </Box>
      </Grid>
      {/* mobile menu  */}

      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
          padding: "10px 20px",
        }}
      >
        <AddCart isOpen={isOpen} handleClose={handleClose} />
        <Box
        // sx={{
        //   paddingTop: "18px",
        //   paddingLeft: "20px",
        //   paddingRight: "20px",
        //   paddingBottom: "150px",
        // }}
        >
          {/* order now  */}
          <Box sx={{ marginTop: "23px" }}>
            {/* <Box sx={{ width: "7px", height: "16px" }}>
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
            </Box> */}
            <Typography className={classes.menu_title}>Menu</Typography>
          </Box>

          {/* header part  */}
          <Box sx={{ marginTop: "19px" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              {/* search menu  */}
              <Box style={{ width: "100%", boxSizing: "border-box" }}>
                <Box
                  style={{
                    borderRadius: "6px",
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                    background: "#FFF",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Input
                      className={classes.sidebar_text}
                      placeholder="Select Menu"
                      disableUnderline
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#989898",
                        border: "none",
                        height: "43px",
                      }}
                      sx={{
                        "&:focus": {
                          border: "none",
                        },
                      }}
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M9.10482 16.6247C13.2585 16.6247 16.6257 13.2575 16.6257 9.10384C16.6257 4.9502 13.2585 1.58301 9.10482 1.58301C4.95118 1.58301 1.58398 4.9502 1.58398 9.10384C1.58398 13.2575 4.95118 16.6247 9.10482 16.6247Z"
                        stroke="#969797"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.4173 17.4163L15.834 15.833"
                        stroke="#969797"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
              {/* arrange icon  */}
              <Box
                sx={{ display: "flex", width: "86px", height: "45px" }}
                onClick={handleArrange}
              >
                <Box sx={{ display: isArrange ? "none" : "block" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="45"
                    viewBox="0 0 86 45"
                    fill="none"
                  >
                    <rect width="86" height="45" rx="8" fill="white" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="85"
                      height="44"
                      rx="7.5"
                      stroke="black"
                      stroke-opacity="0.07"
                    />
                    <rect
                      x="44"
                      y="3"
                      width="39"
                      height="39"
                      rx="6"
                      fill="#0575FC"
                    />
                    <rect
                      x="44.5"
                      y="3.5"
                      width="38"
                      height="38"
                      rx="5.5"
                      stroke="black"
                      stroke-opacity="0.07"
                    />
                    <path
                      d="M73.0833 19.1653V14.8145C73.0833 13.4632 72.47 12.917 70.9463 12.917H67.0746C65.5508 12.917 64.9375 13.4632 64.9375 14.8145V19.1557C64.9375 20.5166 65.5508 21.0532 67.0746 21.0532H70.9463C72.47 21.0628 73.0833 20.5166 73.0833 19.1653Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.0833 29.9463V26.0746C73.0833 24.5508 72.47 23.9375 70.9463 23.9375H67.0746C65.5508 23.9375 64.9375 24.5508 64.9375 26.0746V29.9463C64.9375 31.47 65.5508 32.0833 67.0746 32.0833H70.9463C72.47 32.0833 73.0833 31.47 73.0833 29.9463Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.0626 19.1653V14.8145C62.0626 13.4632 61.4492 12.917 59.9255 12.917H56.0538C54.5301 12.917 53.9167 13.4632 53.9167 14.8145V19.1557C53.9167 20.5166 54.5301 21.0532 56.0538 21.0532H59.9255C61.4492 21.0628 62.0626 20.5166 62.0626 19.1653Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.0625 29.9463V26.0746C62.0625 24.5508 61.4491 23.9375 59.9254 23.9375H56.0537C54.53 23.9375 53.9166 24.5508 53.9166 26.0746V29.9463C53.9166 31.47 54.53 32.0833 56.0537 32.0833H59.9254C61.4491 32.0833 62.0625 31.47 62.0625 29.9463Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="39"
                      height="39"
                      rx="6"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M21.5 30.77V26.73C21.5 25.14 20.86 24.5 19.27 24.5H15.23C13.64 24.5 13 25.14 13 26.73V30.77C13 32.36 13.64 33 15.23 33H19.27C20.86 33 21.5 32.36 21.5 30.77Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 26.5H32"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26 30.5H32"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21.5 19.27V15.23C21.5 13.64 20.86 13 19.27 13H15.23C13.64 13 13 13.64 13 15.23V19.27C13 20.86 13.64 21.5 15.23 21.5H19.27C20.86 21.5 21.5 20.86 21.5 19.27Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 15H32"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26 19H32"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </Box>
                <Box sx={{ display: isArrange ? "block" : "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="45"
                    viewBox="0 0 86 45"
                    fill="none"
                  >
                    <rect width="86" height="45" rx="8" fill="white" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="85"
                      height="44"
                      rx="7.5"
                      stroke="black"
                      stroke-opacity="0.07"
                    />
                    <rect
                      x="44"
                      y="3"
                      width="39"
                      height="39"
                      rx="6"
                      fill="#F1F1F1"
                    />
                    <rect
                      x="44.5"
                      y="3.5"
                      width="38"
                      height="38"
                      rx="5.5"
                      stroke="black"
                      stroke-opacity="0.07"
                    />
                    <path
                      d="M73.0833 19.1653V14.8145C73.0833 13.4632 72.47 12.917 70.9463 12.917H67.0746C65.5508 12.917 64.9375 13.4632 64.9375 14.8145V19.1557C64.9375 20.5166 65.5508 21.0532 67.0746 21.0532H70.9463C72.47 21.0628 73.0833 20.5166 73.0833 19.1653Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.0833 29.9463V26.0746C73.0833 24.5508 72.47 23.9375 70.9463 23.9375H67.0746C65.5508 23.9375 64.9375 24.5508 64.9375 26.0746V29.9463C64.9375 31.47 65.5508 32.0833 67.0746 32.0833H70.9463C72.47 32.0833 73.0833 31.47 73.0833 29.9463Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.0626 19.1653V14.8145C62.0626 13.4632 61.4492 12.917 59.9255 12.917H56.0538C54.5301 12.917 53.9167 13.4632 53.9167 14.8145V19.1557C53.9167 20.5166 54.5301 21.0532 56.0538 21.0532H59.9255C61.4492 21.0628 62.0626 20.5166 62.0626 19.1653Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.0625 29.9463V26.0746C62.0625 24.5508 61.4491 23.9375 59.9254 23.9375H56.0537C54.53 23.9375 53.9166 24.5508 53.9166 26.0746V29.9463C53.9166 31.47 54.53 32.0833 56.0537 32.0833H59.9254C61.4491 32.0833 62.0625 31.47 62.0625 29.9463Z"
                      stroke="#545454"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="39"
                      height="39"
                      rx="6"
                      fill="#0575FC"
                    />
                    <path
                      d="M21.5 30.77V26.73C21.5 25.14 20.86 24.5 19.27 24.5H15.23C13.64 24.5 13 25.14 13 26.73V30.77C13 32.36 13.64 33 15.23 33H19.27C20.86 33 21.5 32.36 21.5 30.77Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 26.5H32"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26 30.5H32"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21.5 19.27V15.23C21.5 13.64 20.86 13 19.27 13H15.23C13.64 13 13 13.64 13 15.23V19.27C13 20.86 13.64 21.5 15.23 21.5H19.27C20.86 21.5 21.5 20.86 21.5 19.27Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 15H32"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26 19H32"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                marginTop: "15px",
                width: "100%",
                overflowX: "auto",
              }}
            >
              <Box
                sx={{ display: "flex", gap: "5px" }}
                className={classes.category}
              >
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M11 3.75H8"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 3.75H1"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 5.5C5.9665 5.5 6.75 4.7165 6.75 3.75C6.75 2.7835 5.9665 2 5 2C4.0335 2 3.25 2.7835 3.25 3.75C3.25 4.7165 4.0335 5.5 5 5.5Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 9.25H9"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 9.25H1"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 11C7.9665 11 8.75 10.2165 8.75 9.25C8.75 8.2835 7.9665 7.5 7 7.5C6.0335 7.5 5.25 8.2835 5.25 9.25C5.25 10.2165 6.0335 11 7 11Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Typography>Filter</Typography>
              </Box>
              <Box className={classes.category}>Drinks</Box>
              <Box className={classes.category}>Starters</Box>
              <Box className={classes.category}>Main Courses</Box>
            </Box>
            <Box
              sx={{
                marginTop: "9px",
                gap: "18px",
                display: "flex",
                width: "100%",
                overflowX: "auto",
              }}
            >
              <Typography className={classes.sub_category}>
                Cocktails
              </Typography>
              <Typography className={classes.sub_category}>
                Mocktails
              </Typography>
              <Typography className={classes.sub_category}>Liquor</Typography>
              <Typography className={classes.sub_category}>
                Soft Drinks
              </Typography>
              <Typography className={classes.sub_category}>Tea</Typography>
            </Box>
          </Box>

          {/* product part  */}
          <Box sx={{ marginTop: "20px", marginBottom: "150px" }}>
            <Grid container spacing="15px">
              {products.map((product) => (
                <Grid
                  item
                  xs={isArrange ? 12 : 6}
                  md={6}
                  sx={{ marginTop: "15px" }}
                >
                  <CartComponent
                    img={product.img}
                    addedToCart={product.addedToCart}
                    isArrange={isArrange}
                    handleOpen={handleOpen}
                  />
                  <Box
                    sx={{
                      marginTop: "30px",
                      background: "rgba(0, 0, 0, 0.10)",
                      width: "100%",
                      height: "1px",
                    }}
                  ></Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          width: "100%",
          background: "#fff",
          position: "fixed",
          bottom: "70px",
          padding: "10px 10px",

          border: "1px solid rgba(0, 0, 0, 0.10)",
        }}
      >
        <Typography>2 Items Added</Typography>
        <Button variant="contained">View Cart</Button>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
          marginTop: "37.58px",
        }}
      >
        <BottomMenu />
      </Box>
    </>
  );
};

export default Home;
