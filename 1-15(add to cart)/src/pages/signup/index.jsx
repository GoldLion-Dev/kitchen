import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { countries } from "country-data";

const useStyles = makeStyles((theme) => ({
  signup_header: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontSize: "24px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },

  signup_sub_header: {
    color: "#444",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "normal !important",
    marginTop: "11px !important",
  },

  signup_page_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal !important",
    lineHeight: "normal !important",
  },

  input_field: {
    background: "#FFF",
    marginBottom: "0px !important",
    marginLeft: "2px",
    height: "46px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    borderRadius: "6px",
  },

  signup_btn: {
    height: "47px",
    padding: "10px 14px 10px 14px !important",
    borderRadius: "5px !important",

    backgroundColor: "#0575FC !important",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700 !important",
    lineHeight: "normal",
    textTransform: "none !important",
  },

  outlinedInput: {
    border: "none", // Remove the border
  },
  select: {
    "&:before": {
      borderColor: "transparent", // Remove the border
    },
    "&:after": {
      borderColor: "transparent", // Remove the border
    },
  },
  phoneNumberInput: {
    "&:focus": {
      outline: "none" /* Remove the default focus border color */,
    },

    "&::placeholder": {
      fontSize: "16px",
    },
  },

  customTextField: {
    "& .MuiInputLabel-root": {
      transform: "translate(0, 13px) scale(1)",
      padding: "0 12px", // Adjust the padding as needed
      lineHeight: "1.2", // Adjust the line height as needed
    },
    "& .MuiInputLabel-root.Mui-focused": {
      transform: "translate(0, -6px) scale(0.75)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(0, -6px) scale(0.75)",
    },
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("+1");
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberStatus, setPhoneNumberStatus] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello");
    setCount(1);
  }, [props.visible]);

  useEffect(() => {
    // Extract country phone codes from the country-data library
    const codes = countries.all.map((country) => ({
      name: country.name,
      code: `${country.countryCallingCodes[0]}`,
    }));

    setCountryCodes(codes);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneNumberFocus = () => {
    setPhoneNumberStatus(true);
  };
  return (
    <Grid
      container
      component="main"
      justifyContent="flex-end"
      sx={{ height: "100vh", backgroundColor: { xs: "#000", md: "#0575FC" } }}
    >
      {count}
      <Grid
        container
        sx={{
          paddingLeft: { xs: "24px", md: "71px" },
          paddingRight: { xs: "18px", md: "63px" },
          width: { xs: "100%", md: "477px" },
          justifyContent: "center",
          alignItems: { xs: "flex-end", md: "center" },
        }}
        style={{
          float: { xs: "none", md: "right" },
        }}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography className={classes.signup_header}>Sign Up</Typography>

          <Typography className={classes.signup_sub_header}>
            Please create your account to continue.{" "}
          </Typography>
          <Box
            component="form"
            noValidate
            textAlign="center"
            x={{ flexGrow: 1 }}
          >
            <Grid container spacing="12px">
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  autoComplete="first_name"
                  className={classes.customTextField}
                  InputProps={{
                    className: classes.input_field,
                  }}
                  sx={{ mt: "24px", ml: "2px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  className={classes.customTextField}
                  InputProps={{
                    className: classes.input_field,
                  }}
                  sx={{ mt: "24px", ml: "2px" }}
                />
              </Grid>
            </Grid>
            <TextField
              required
              fullWidth
              name="email"
              label="Email ID"
              type="email"
              id="email"
              autoComplete="email"
              className={classes.customTextField}
              InputProps={{
                className: classes.input_field,
              }}
              sx={{ mt: "15px", ml: "2px" }}
            />
            <Box
              sx={{
                borderRadius: "6px",
                border: "2px solid rgba(0, 0, 0, 0.20)",
                background: "#FFF",
                display: "flex",
                height: "46px !important",
                mt: "15px",
                ml: "3px",
              }}
            >
              <Select
                labelId="select-label"
                id="select"
                value={selectedOption}
                onChange={handleSelectChange}
                label="Select an option"
                className={classes.outlinedInput}
                sx={{
                  borderRadius: 0,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                }}
              >
                {countryCodes.map((country) => (
                  <MenuItem key={country.name} value={country.code}>
                    {country.code}
                  </MenuItem>
                ))}
              </Select>

              <input
                placeholder="Phone Number *"
                style={{ width: "100%", border: "none", fontSize: "16px" }}
                className={classes.phoneNumberInput}
              />
            </Box>

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              className={classes.customTextField}
              InputProps={{
                className: classes.input_field,
              }}
              sx={{ mt: "15px", ml: "2px" }}
            />
            <Grid
              container
              alignItems="center"
              // justifyContent="flex-start"
              marginTop="15px"
            >
              <Grid item xs={2}>
                <Checkbox inputProps={{ "aria-label": "controlled" }} />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  gutterBottom
                  textAlign="start"
                  className={classes.signup_page_text}
                  sx={{
                    fontSize: "14px !important",
                    color: "#8C8C8C",
                    fontFamily: "MetropolisRegular !important",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineheight: "19px",
                  }}
                >
                  By Continuing you agree to our Terms of services and Privacy
                  policy.
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.signup_btn}
              sx={{ mt: "24px", mb: 2 }}
            >
              Sign Up
            </Button>

            <Typography
              variant="body2"
              sx={{
                mb: "30px",
                color: "#7C7C7C",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              {"Don't have an account? "}
              <Link
                href="#"
                variant="body2"
                sx={{ color: "#0575FC", fontSize: "14px", fontWeight: "700" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
