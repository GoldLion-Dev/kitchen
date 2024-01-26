import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Category from "../../components/category";
import AddCart from "../../components/addCart";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../../components/image";
import Cart from "../../components/cart/cart";
const Products = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AddCart isOpen={isOpen} handleClose={handleClose} />
      <Grid container flexDirection="column" alignItems="flex-start" gap="32px">
        <Grid item style={{ width: "100%" }}>
          <Grid
            container
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
          >
            <Grid item>
              <Typography>Featured</Typography>
            </Grid>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", md: "53px" },
              }}
            >
              <Category img={Product1} title="Mango Snake" />
              <Category img={Product2} title="Mango snake" />
            </Box>
          </Grid>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Grid
            container
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
          >
            {/* web */}
            <Box
              sx={{
                width: "100%",
                display: { xs: "none", sm: "flex", md: "flex" },
                alignItems: "center",
                gap: { xs: "10px", md: "28px" },
              }}
            >
              <Category img={Product3} />
              <Category img={Product4} />
              <Category img={Product5} />
            </Box>

            {/* mobile */}
            <Box
              sx={{
                width: "100%",
                display: { xs: "flex", sm: "none", md: "none" },
                alignItems: "center",
                gap: { xs: "10px", md: "28px" },
              }}
            >
              <Category img={Product3} title="French" />
              <Category img={Product4} title="Italian" />
            </Box>
          </Grid>
        </Grid>

        {/* web  */}
        <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          <Grid item style={{ width: "100%" }}>
            <Grid
              container
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <Category img={Product3} />
                <Category img={Product4} />
                <Category img={Product5} />
                <Category img={Product2} />
                <Category img={Product2} />
              </Box>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%", marginTop: "32px" }}>
            <Grid
              container
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Most Ordered</Typography>
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="86"
                      height="46"
                      viewBox="0 0 86 46"
                      fill="none"
                    >
                      <rect
                        y="0.899902"
                        width="86"
                        height="45"
                        rx="8"
                        fill="white"
                      />
                      <rect
                        x="0.5"
                        y="1.3999"
                        width="85"
                        height="44"
                        rx="7.5"
                        stroke="black"
                        stroke-opacity="0.07"
                      />
                      <rect
                        x="44"
                        y="3.8999"
                        width="39"
                        height="39"
                        rx="6"
                        fill="#0575FC"
                      />
                      <rect
                        x="44.5"
                        y="4.3999"
                        width="38"
                        height="38"
                        rx="5.5"
                        stroke="black"
                        stroke-opacity="0.07"
                      />
                      <path
                        d="M73.0833 20.0652V15.7144C73.0833 14.3631 72.47 13.8169 70.9463 13.8169H67.0746C65.5508 13.8169 64.9375 14.3631 64.9375 15.7144V20.0556C64.9375 21.4165 65.5508 21.9531 67.0746 21.9531H70.9463C72.47 21.9627 73.0833 21.4165 73.0833 20.0652Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M73.0833 30.8462V26.9745C73.0833 25.4507 72.47 24.8374 70.9463 24.8374H67.0746C65.5508 24.8374 64.9375 25.4507 64.9375 26.9745V30.8462C64.9375 32.3699 65.5508 32.9832 67.0746 32.9832H70.9463C72.47 32.9832 73.0833 32.3699 73.0833 30.8462Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M62.0618 20.0652V15.7144C62.0618 14.3631 61.4485 13.8169 59.9248 13.8169H56.0531C54.5293 13.8169 53.916 14.3631 53.916 15.7144V20.0556C53.916 21.4165 54.5293 21.9531 56.0531 21.9531H59.9248C61.4485 21.9627 62.0618 21.4165 62.0618 20.0652Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M62.0618 30.8462V26.9745C62.0618 25.4507 61.4485 24.8374 59.9248 24.8374H56.0531C54.5293 24.8374 53.916 25.4507 53.916 26.9745V30.8462C53.916 32.3699 54.5293 32.9832 56.0531 32.9832H59.9248C61.4485 32.9832 62.0618 32.3699 62.0618 30.8462Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="3"
                        y="3.8999"
                        width="39"
                        height="39"
                        rx="6"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M21.5 31.6699V27.6299C21.5 26.0399 20.86 25.3999 19.27 25.3999H15.23C13.64 25.3999 13 26.0399 13 27.6299V31.6699C13 33.2599 13.64 33.8999 15.23 33.8999H19.27C20.86 33.8999 21.5 33.2599 21.5 31.6699Z"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26 27.3999H32"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M26 31.3999H32"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M21.5 20.1699V16.1299C21.5 14.5399 20.86 13.8999 19.27 13.8999H15.23C13.64 13.8999 13 14.5399 13 16.1299V20.1699C13 21.7599 13.64 22.3999 15.23 22.3999H19.27C20.86 22.3999 21.5 21.7599 21.5 20.1699Z"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26 15.8999H32"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M26 19.8999H32"
                        stroke="#545454"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Grid item style={{ width: "100%" }}>
                  <Grid
                    container
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="16px"
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                      }}
                    >
                      <Cart img={Product3} handleOpen={handleOpen} />
                      <Cart img={Product4} handleOpen={handleOpen} />
                      <Cart img={Product5} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                  <Grid
                    container
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="16px"
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                      }}
                    >
                      <Cart img={Product3} handleOpen={handleOpen} />
                      <Cart img={Product4} handleOpen={handleOpen} />
                      <Cart img={Product5} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                  <Grid
                    container
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="16px"
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                      }}
                    >
                      <Cart img={Product3} handleOpen={handleOpen} />
                      <Cart img={Product4} handleOpen={handleOpen} />
                      <Cart img={Product5} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                      <Cart img={Product2} handleOpen={handleOpen} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* mobile  */}
        <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", sm: "none", md: "none" },
              alignItems: "center",
              gap: { xs: "10px", md: "28px" },
            }}
          >
            <Category img={Product3} title="Food" />
            <Category img={Product4} title="Grocery" />
            <Category img={Product5} title="Dine in" />
            <Category img={Product2} title="Deliver" />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", sm: "none", md: "none" },
              alignItems: "center",
              gap: { xs: "10px", md: "28px" },
            }}
          >
            <Category img={Product3} title="Food" />
            <Category img={Product4} title="Grocery" />
            <Category img={Product5} title="Dine in" />
            <Category img={Product2} title="Deliver" />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Products;
