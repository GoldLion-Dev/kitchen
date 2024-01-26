import * as React from "react";
import { react, useState, useEffect } from "react";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  login_header: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontSize: "24px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },

  login_sub_header: {
    color: "#444",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "normal !important",
    marginTop: "11px !important",
  },

  login_page_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal !important",
    lineHeight: "normal !important",
  },

  input_field: {
    background: "#FFF",
    // border: "1px solid rgba(0, 0, 0, 0.10) !important",
    marginBottom: "0px !important",
    marginLeft: "2px",
  },

  login_btn: {
    height: "47px",
    padding: "10px 14px 10px 5px !important",
    borderRadius: "5px !important",
    opacity: "",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "none !important",
  },

  desable_login_btn: {
    backgroundColor: "#989898 !important",
    opacity: "0.5",
    // backgroundColor: "#0575FC !important",
  },

  active_login_btn: {
    backgroundColor: "#0575FC !important",
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

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValue] = useState([]);
  const [isActive, setActive] = useState(false);
  let btn_class;
  useEffect(() => {
    // btn_class = `${classes.login_btn} ${
    //   isActive ? classes.active_login_btn : classes.desable_login_btn
    // }`;
  }, [isActive]);

  const handleGoSignUp = () => {
    navigate("/signup");
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValue((values) => ({
      ...values,
      [name]: value,
    }));
    console.log(values);
    if (values["email"] != "" && values["password"] != "") {
      setActive(true);
    }

    if (values["email"] == "" && values["password"] == "") {
      setActive(false);
    }
  };

  const handleClickLogin = (event) => {
    event.preventDefault();

    if (values["email"] == "keeda@gmail.com" && values["password"] == "admin") {
      navigate("/home");
    }
  };
  return (
    <Grid
      container
      component="main"
      justifyContent="flex-end"
      sx={{ height: "100vh", backgroundColor: { xs: "#000", md: "#0575FC" } }}
    >
      <Grid
        container
        sx={{
          paddingLeft: { xs: "24px", md: "72px" },
          paddingRight: { xs: "18px", md: "72px" },
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
            // bottom: { xs: "0px" },
            // position: { xs: "fixed", md: "" },
          }}
        >
          <Typography className={classes.login_header}>
            Hi, Welcome back
          </Typography>

          <Typography className={classes.login_sub_header}>
            Please login your account to continue.{" "}
          </Typography>
          <Box component="form" noValidate textAlign="center">
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              placeholder="Email ID"
              value={values["email"] || ""}
              onChange={handleChange}
              className={classes.customTextField}
              InputProps={{
                style: {
                  height: "46px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  borderRadius: "6px",
                },
              }}
              sx={{ mt: "24px", ml: "2px" }}
            />
            <TextField
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              value={values["password"] || ""}
              onChange={handleChange}
              className={classes.customTextField}
              InputProps={{
                style: {
                  height: "46px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  borderRadius: "6px",
                },
              }}
              sx={{ mt: "15px", ml: "2px" }}
            />
            <Typography
              component="div"
              className={classes.login_page_text}
              sx={{
                marginTop: "24px",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "14px !important",
              }}
            >
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Typography>
            <Button
              onClick={handleClickLogin}
              type="submit"
              fullWidth
              variant="contained"
              className={`${classes.login_btn} ${
                values["email"] === "" || values["password"] === ""
                  ? classes.desable_login_btn
                  : classes.active_login_btn
              }`}
              sx={{ mt: "13px", mb: 2 }}
            >
              Login
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
                onClick={handleGoSignUp}
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
