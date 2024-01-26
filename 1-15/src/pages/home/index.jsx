import React from "react";
import Menu from "../../layout/menu";
import Sidebar from "../../layout/sidebar";
import Products from "./products.jsx";
import SearchableSelect from "../../components/searchSelect/index.jsx";
import TimeSlot from "../../components/timeslot/index.jsx";
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
import BottomMenu from "../../layout/bottomMenu.jsx";
import PickUp from "../../components/pickup/index.jsx";
import { makeStyles } from "@mui/styles";
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
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
  sub_text: {
    color: "#444",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
  select_box: {
    "& .MuiSelect-select": {
      height: "45px", // Set the height of the select box in pixels
    },
  },

  menuPaper: {
    maxWidth: "50px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
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
                    <Grid item>
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
                height: "28px",
                border: "1px solid",
                display: "flex",
                gap: "4px",
                backgroundColor: "#F1F1F1",
                borderRadius: "4px",
                border: "0.5px solid rgba(0, 0, 0, 0.01)",
                boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
                padding: "3px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: {
                    xs: "8px 1px",
                    md: "8px 6.34px 7px 6.66px",
                  }, // Adjust the padding as needed
                }}
              >
                Pick Up
              </Button>
              <Button
                style={{ color: "#989898" }}
                sx={{
                  padding: {
                    xs: "8px 6.34px 7px 6.66px",
                    md: "8px 6.34px 7px 6.66px",
                  }, // Adjust the padding as needed
                }}
              >
                Delivery
              </Button>
              <Button
                style={{ color: "#989898" }}
                sx={{
                  padding: {
                    xs: "8px 6.34px 7px 6.66px",
                    md: "8px 6.34px 7px 6.66px",
                  }, // Adjust the padding as needed
                }}
              >
                Dine in
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
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
          <Grid
            container
            sx={{
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
                style={{ fontSize: "32px", lineHeight: "1", fontWeight: "600" }}
              >
                Kitchen Café & Resto Bar, Spadina
              </Typography>

              {/* mobile title */}
              <Typography
                sx={{ display: { xs: "block", sm: "none", md: "none" } }}
                className={classes.home_text}
                style={{ fontSize: "22px", lineHeight: "1", fontWeight: "600" }}
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
            <Grid
              item
              sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            >
              <Box
                className={classes.home_text}
                sx={{
                  gap: { xs: "10px", md: "42px" },
                }}
                style={{
                  marginTop: "16px",
                  display: "flex",
                  width: "100%",
                  height: "16px",
                  alignItems: "flex-start",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <Box
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ color: "#19930E" }}>Open</span>
                  <span className={classes.dot}></span>
                  <span>Franch</span>
                  <span className={classes.dot}></span>
                  <span>Chinese</span>
                  <span className={classes.dot}></span>
                  <span>Italian</span>
                </Box>
                <Box className={classes.home_text}>
                  Mon 10:00 AM To 10:00 PM
                </Box>
              </Box>
            </Grid>
            <Box
              sx={{
                width: "100%",
                marginTop: { xs: "0px", sm: "19px", md: "19px" },
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "space-between",
              }}
            >
              {/* web */}
              <Box sx={{ flexBasis: { sm: "286px", md: "286px", xs: "100%" } }}>
                <div style={{ width: "100%", m: 1 }}>
                  <SearchableSelect />
                </div>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  flexGrow: "1",
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
                  variant="contained"
                  sx={{
                    flexGrow: "1",
                    padding: {
                      xs: "8px 6.34px 7px 6.66px",
                      md: "8px 6.34px 7px 6.66px",
                    }, // Adjust the padding as needed
                  }}
                >
                  Pick UP
                </Button>

                <Button
                  style={{ color: "#989898" }}
                  sx={{
                    padding: { xs: "8px 6.34px 7px 6.66px" },
                    flexGrow: "1",
                  }}
                >
                  Delivery
                </Button>

                <Button
                  style={{ color: "#989898" }}
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
                  display: { xs: "none", sm: "flex", md: "flex" },
                  flexBasis: "184px",
                }}
              >
                <TimeSlot />
              </Box>
              <Box
                sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
                style={{
                  borderRadius: "6px",
                  border: "1px solid var(--border, #E2E2E2)",
                  background: "#FFF",
                  height: "45px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 12px",
                  minWidth: "100px",
                }}
              >
                Pick up 25mile
              </Box>
            </Box>
          </Grid>
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
