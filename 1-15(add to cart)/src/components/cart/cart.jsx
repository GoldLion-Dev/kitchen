import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Cart = ({ img, handleOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <img src={img} style={{ width: "100%" }} />
      </Box>
      <Box>
        <Typography>Old Fashioned</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography>150$</Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              width: "58px",
              height: "23px",
              borderRadius: "100px",
              padding: "5px 13px",
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
