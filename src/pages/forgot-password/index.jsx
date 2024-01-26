import * as React from "react";
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
  },

  send_code_btn: {
    height: "47px",
    padding: "10px 14px 10px 5px !important",
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

export default function ForgotPassword() {
  const classes = useStyles();

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
          paddingLeft: { xs: "25px", md: "78px" },
          paddingRight: { xs: "18px", md: "67px" },
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
            Forgot Password
          </Typography>

          <Typography className={classes.login_sub_header}>
            Enter your registered email to receive a verification link{" "}
          </Typography>
          <Box component="form" noValidate textAlign="center">
            <TextField
              required
              fullWidth
              id="email"
              label="Email ID"
              name="email"
              autoComplete="email"
              className={classes.customTextField}
              InputProps={{
                style: {
                  height: "46px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  borderRadius: "6px",
                },
              }}
              sx={{ mt: "13px", ml: "2px" }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.send_code_btn}
              sx={{ mt: "20px", mb: "25px" }}
            >
              Send Code
            </Button>

            <Typography
              variant="body2"
              sx={{
                mb: "35px",
                color: "#7C7C7C",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <Link
                href="#"
                variant="body2"
                sx={{ color: "#0575FC", fontSize: "14px", fontWeight: "600" }}
              >
                Back to Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
