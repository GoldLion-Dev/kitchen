import React from "react";
import { Location, Vector, Avatar, Cart, Ellipse } from "../components/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SelectAddress from "../components/selectAddress";
const Menu = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex", md: "flex" },
        background: "#FFF",
        boxShadow: "0px 4px 7px 0px rgba(0, 0, 0, 0.10)",
        padding: "11px 98px 23px ",
        justifyContent: "flex-end",
      }}
    >
      <Grid
        container
        alignItems="flex-end"
        gap="19px"
        style={{
          height: "46px",
          width: "206px",
          paddingRight: "0px",
        }}
      >
        <Grid item>
          <Grid container alignItems="flex-end" gap="11px">
            {/* <Grid item>
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
            </Grid> */}
            <SelectAddress />
            <Grid item>
              <Box
                style={{
                  width: "34px",
                  height: "34px",
                }}
              >
                <img
                  src={Avatar}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.10)",
                    background: "lightgray 50% / cover no-repeat",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Box
            style={{
              backgroundColor: "#0575FC",
              borderRadius: "6px",
              width: "34px",
              height: "34px",
              boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.30)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={Cart}
              style={{
                width: "16px",
                height: "12.889px",
              }}
            />
            <img
              src={Ellipse}
              style={{
                width: "22px",
                height: "22px",
                position: "absolute",
                right: "-12px",
                top: "-12px",
              }}
            />
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "MetropolisRegular",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                position: "absolute",
                right: "-4px",
                top: "-7px",
              }}
            >
              2
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;
