import React from "react";
import { Box, Typography } from "@mui/material";
import { MobileBG } from "../../components/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dot: {
    width: "4px",
    height: "4px",
    borderRadius: "90px",
    background: "var(--subtext, #444)",
  },
  // country_text: {
  //   lineHeight: "1",
  // },

  about_title: {
    color: "#000 !important",
    fontFamily: "Metropolis !important",
    fontSize: "20px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "14px !important" /* 70% */,
  },
  kitchen_title: {
    color: "#000 !important",
    fontFamily: "Metropolis !important",
    fontSize: "22px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "normal !important" /* 70% */,
  },
  country_text: {
    color: "#444 !important",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "normal !important" /* 70% */,
  },
  description_text: {
    color: "#989898 !important",
    fontFamily: "Metropolis !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "19px !important" /* 70% */,
  },
  timing_text: {
    color: "#989898 !important",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important" /* 70% */,
  },
  timing_body: {
    color: "#444 !important",
    fontFamily: "Metropolis !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important" /* 70% */,
  },
  location_text: {
    color: "#000 ",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important" /* 70% */,
  },
  contact_text: {
    color: "#0575FC ",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important" /* 70% */,
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        paddingRight: { sm: "58px", md: "58px" },
        paddingLeft: { xs: "24px", sm: "62px", md: "62px" },
        paddingTop: { xs: "18px", sm: "46px", md: "46px" },
        paddingBottom: { xs: "97px", sm: "40px", md: "40px" },
      }}
    >
      {/* about title  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "23px" }}>
        <Box sx={{ width: "7.5px", height: "16px" }}>
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
        </Box>
        <Typography className={classes.about_title}>About</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { sm: "30px", md: "30px" },
          marginTop: { xs: "40px", sm: "35px", md: "35x" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: { xs: "22px", sm: "50px", md: "50px" },
            alignItems: "flex-start",
          }}
        >
          {/* image  */}
          <Box
            sx={{
              width: { xs: "100%", sm: "335px", md: "335px" },
              // marginTop: { xs: "41px", sm: "0px", md: "0px" },
            }}
          >
            <img src={MobileBG} />
          </Box>

          {/* section1  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <Typography className={classes.kitchen_title}>
              Kitchen Café & Resto
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography className={classes.country_text}>Franch</Typography>
              <Box className={classes.dot}></Box>
              <Typography className={classes.country_text}>Chinese</Typography>
              <Box className={classes.dot}></Box>
              <Typography className={classes.country_text}>Italian</Typography>
            </Box>
            <Typography className={classes.description_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              diam leo, convallis scelerisque orci vitae, auctor imperdiet
              dolor. Vestibulum ultricies mi id purus sollicitudin, et molestie
              massa tempor. Duis ut neque vel risus accumsan efficitur a mattis
              erat. Nullam mauris erat, egestas at neque non, cursus lobortis
              libero.
            </Typography>
          </Box>

          {/* divider  */}
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              background: "rgba(0, 0, 0, 0.10)",
              height: "1px",
              width: "95%",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: { xs: "22px" },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: { xs: "22px", sm: "50px", md: "50px" },
          }}
        >
          {/* mobile location  */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              flexDirection: "column",
            }}
          >
            <Typography className={classes.timing_text}>Location</Typography>
            <Typography
              className={classes.location_text}
              sx={{ marginTop: { xs: "9px" } }}
            >
              705 Sunny Day Drive
            </Typography>
          </Box>
          {/* divider  */}
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              background: "rgba(0, 0, 0, 0.10)",
              height: "1px",
              width: "95%",
            }}
          ></Box>

          {/* Timing  */}
          <Box
            sx={{
              width: { sm: "330px", md: "330px" },
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography className={classes.timing_text}>TImmings</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }} className={classes.timing_body}>
                <Typography
                  sx={{ width: "73px" }}
                  className={classes.timing_body}
                >
                  Open
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={classes.dot}
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                  ></Box>
                  <Typography
                    sx={{ width: "36px" }}
                    className={classes.timing_body}
                  >
                    Mon
                  </Typography>
                </Box>
                <Typography
                  sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}
                  className={classes.timing_body}
                >
                  10:00 AM to 10:00 PM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* divider  */}
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              background: "rgba(0, 0, 0, 0.10)",
              height: "1px",
              width: "95%",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "column" },
              gap: "20px",
            }}
          >
            <Box sx={{ display: "flex", gap: "50px" }}>
              {/* web location  */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                <Typography className={classes.timing_text}>
                  Location
                </Typography>
                <Typography className={classes.location_text}>
                  705 Sunny Day Drive
                </Typography>
                <Typography></Typography>
              </Box>
              {/* direction  */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "9px" }}
              >
                <Typography className={classes.timing_text}>
                  Directions
                </Typography>
                <Typography
                  className={classes.location_text}
                  // style={{ color: "#0575FC !important" }}
                >
                  Navigate in Google Maps
                </Typography>
                <Typography></Typography>
              </Box>
            </Box>

            {/* divider  */}
            <Box
              sx={{
                display: { xs: "block", sm: "none", md: "none" },
                background: "rgba(0, 0, 0, 0.10)",
                height: "1px",
                width: "95%",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: "22px", sm: "50px", md: "50px" },
              }}
            >
              {/* contact detail  */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "9px" }}
              >
                <Typography className={classes.timing_text}>
                  Contact Details
                </Typography>
                <Typography
                  style={{ color: "#0575FC !important" }}
                  className={classes.contact_text}
                >
                  +91 9292938393, +91 839484909
                </Typography>
              </Box>

              {/* divider  */}
              <Box
                sx={{
                  display: { xs: "block", sm: "none", md: "none" },
                  background: "rgba(0, 0, 0, 0.10)",
                  height: "1px",
                  width: "95%",
                }}
              ></Box>

              {/* show media  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "11px", sm: "9px", md: "9px" },
                }}
              >
                <Typography className={classes.timing_text}>
                  {" "}
                  Social Media
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <Box sx={{ width: "24px", height: "24px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="#444444"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                        stroke="#444444"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 6.5H17.51"
                        stroke="#444444"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Box sx={{ width: "24px", height: "24px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="#444444"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>

              {/* divider  */}
              <Box
                sx={{
                  display: { xs: "block", sm: "none", md: "none" },
                  background: "rgba(0, 0, 0, 0.10)",
                  height: "1px",
                  width: "95%",
                }}
              ></Box>
            </Box>

            {/* terms  */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <Typography className={classes.timing_text}>
                Terms & Policies
              </Typography>
              <Typography
                className={classes.contact_text}
                style={{ color: "#0575FC !important" }}
              >
                Privacy policy
              </Typography>
              <Typography
                className={classes.contact_text}
                style={{ color: "#0575FC !important" }}
              >
                Returns and refunds policy
              </Typography>
              <Typography
                className={classes.contact_text}
                style={{ color: "#0575FC !important" }}
              >
                Cancellation policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
