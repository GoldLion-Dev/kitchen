import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, ButtonBase, Input, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Counter from "../counter";
import DatePicker from "../addCart/datePicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  home_text: {
    color: "#FFF",
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
    fontSize: "18px",
    fontWeight: "500",
  },
  bottomDialog: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
  },
  header_text: {
    color: "#444",
    fontFamily: "MetropolisRegular!important",
    fontStyle: "normal",
    lineHeight: "normal !important",
    fontWeight: "500 !important",
    fontSize: "20px !important",
  },
  button_text: {
    color: "#FFF",
    fontFamily: "MetropolisRegular!important",
    fontStyle: "normal",
    lineHeight: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    textTransform: "none !important",
  },
}));
const Modal = ({ isOpen, handleClose }) => {
  const classes = useStyles();
  const data = "Sunny Day Drive Bank";
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        maxWidth: "375px",
        maxHeight: "550px",
        "& .MuiPaper-root": { margin: 0 },
        display: "flex",
        borderRadius: "12px 12px 0px 0px",
      }}
      PaperProps={{
        style: {
          margin: 0,
          width: "375px",
          height: "550px",
          display: "flex",
          borderRadius: "12px 12px 12px 12px",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          lineHeight: "1",
          paddingBottom: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography className={classes.header_text}>Select Outlet</Typography>
        <Box onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M8.14298 6.96147L13.813 1.29147C13.9404 1.14268 14.007 0.951284 13.9994 0.755536C13.9919 0.559788 13.9107 0.374102 13.7722 0.235584C13.6337 0.097066 13.448 0.0159182 13.2522 0.00835727C13.0565 0.000796372 12.8651 0.0673792 12.7163 0.1948L7.04631 5.8648L1.37631 0.187022C1.22752 0.0596013 1.03613 -0.00698084 0.840382 0.000580055C0.644633 0.00814095 0.458948 0.089288 0.32043 0.227806C0.181912 0.366324 0.100764 0.55201 0.093203 0.747758C0.0856421 0.943506 0.152225 1.1349 0.279645 1.28369L5.94965 6.96147L0.271868 12.6315C0.190448 12.7012 0.124321 12.787 0.0776367 12.8835C0.0309519 12.98 0.00471697 13.0851 0.000579584 13.1922C-0.0035578 13.2993 0.0144913 13.4061 0.0535937 13.5059C0.0926961 13.6057 0.152008 13.6964 0.227806 13.7722C0.303604 13.848 0.394252 13.9073 0.494061 13.9464C0.593869 13.9855 0.700683 14.0036 0.807798 13.9994C0.914913 13.9953 1.02002 13.969 1.11651 13.9224C1.21301 13.8757 1.29881 13.8096 1.36853 13.7281L7.04631 8.05813L12.7163 13.7281C12.8651 13.8556 13.0565 13.9221 13.2522 13.9146C13.448 13.907 13.6337 13.8259 13.7722 13.6873C13.9107 13.5488 13.9919 13.3631 13.9994 13.1674C14.007 12.9716 13.9404 12.7803 13.813 12.6315L8.14298 6.96147Z"
              fill="black"
            />
          </svg>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ width: "100%", padding: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* first  */}
          <Box>
            <Typography>Which Area ?</Typography>
            <Box sx={{ display: "flex", gap: "16px", marginTop: "10px" }}>
              <Box
                sx={{
                  padding: "10px 14px",
                  borderRadius: "5px",
                  border: "1px solid var(--primary, #0575FC)",
                  background: "#FFF",
                }}
              >
                <Typography>Main Dining</Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <Typography>Terrace</Typography>
              </Box>
            </Box>
          </Box>

          {/* second */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>How many people ?</Typography>
            <Box>
              <Counter />
            </Box>
          </Box>

          {/* third  */}
          <Box>
            <Typography>Select Date and Time</Typography>
            <DatePicker />
          </Box>
          {/* fourth  */}
          <Box sx={{ width: "100%" }}>
            <Typography>Additional Info</Typography>
            <textarea
              style={{
                height: "133px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                background: " #FFF",
              }}
            ></textarea>
          </Box>

          {/* book table button */}
          <Button
            variant="contained"
            sx={{ width: "100%", textTransform: "none" }}
          >
            Book Table
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
