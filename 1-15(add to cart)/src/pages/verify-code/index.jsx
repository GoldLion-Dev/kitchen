import * as React from "react";
import { useState } from "react";
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
import TimerCircle from "../../components/count-time";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  verify_code_header: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontSize: "24px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
    marginTop: "44px !important",
  },

  verify_code_sub_header: {
    color: "#444",
    fontFamily: "MetropolisRegular !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "normal !important",
    marginTop: "11px !important",
  },

  reset_pwd_page_text: {
    color: "#000",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal !important",
    lineHeight: "normal !important",
  },

  input_field: {
    background: "#FFF",
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
}));

// TODO remove, this demo shouldn't need to reset the theme.

export default function VerifyCode() {
  const classes = useStyles();
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleCodeChange = (index) => (event) => {
    const newCode = [...verificationCode];
    newCode[index] = event.target.value;
    setVerificationCode(newCode);
  };

  const durationInSeconds = 20;
  const borderWidth = 10;
  const size = 93;
  const passedColor = "#0575FC";
  const remainingColor = "#D7D7D7";

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
          <Grid container alignItems="center" justifyContent="center">
            <TimerCircle
              durationInSeconds={durationInSeconds}
              borderWidth={borderWidth}
              passedColor={passedColor}
              remainingColor={remainingColor}
              size={size}
            />
          </Grid>
          <Typography className={classes.verify_code_header}>
            Reset Password
          </Typography>

          <Typography className={classes.verify_code_sub_header}>
            Create your new password to login your account.
          </Typography>
          <Box component="form" noValidate textAlign="center">
            <Box display="flex" justifyContent="space-between" mt="21px">
              {Array.from({ length: 6 }).map((_, index) => (
                <TextField
                  key={index}
                  value={verificationCode[index]}
                  onChange={handleCodeChange(index)}
                  variant="outlined"
                  size="small"
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      width: "52px",
                      height: "52px",
                      borderRadius: "6px",
                      padding: "0px",
                    },
                  }}
                />
              ))}
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.send_code_btn}
              sx={{ mt: "37px", mb: "29px" }}
            >
              Confirm
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
                Resend Code
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
