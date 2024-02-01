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
        paddingRight: { xs: "24px", sm: "58px", md: "58px" },
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
        <Typography className={classes.about_title}>Privacy Policy</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", sm: "30px", md: "30px" },
          marginTop: { xs: "40px", sm: "35px", md: "35x" },
        }}
      >
        <Typography>Last Updated: [Date]</Typography>
        <Typography>
          Thank you for choosing [Your Company Name] ("us", "we", or "our").
          This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your personal information when you access our website or use
          our services (collectively, the "Service").
        </Typography>

        <Typography>**Information We Collect**</Typography>
        <Typography>
          We collect various types of information to enhance and personalize
          your experience with our Service. This may include:
        </Typography>
        <Typography>
          1. **Personal Information:** When you use our Service, we may request
          personal information such as your name, email address, phone number,
          and address. This information is collected with your consent and is
          necessary for the provision of our services.
        </Typography>
        <Typography>
          2. **Usage Information:** We gather data on how you interact with our
          Service, including pages visited, time spent on each page, and
          features used. This helps us analyze and improve the performance of
          our Service.
        </Typography>
        <Typography>
          3. **Cookies and Tracking Technologies:** We use cookies and similar
          tracking technologies to enhance your browsing experience. These
          technologies help us understand your preferences and provide
          personalized content.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
