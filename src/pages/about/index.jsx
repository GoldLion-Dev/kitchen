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
  country_text: {
    lineHeight: "1",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        paddingRight: { xs: "21px" },
        paddingLeft: { xs: "21px" },
        paddingTop: { xs: "18px" },
        paddingBottom: { xs: "18px" },
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
        <Typography>About</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        {/* image  */}
        <Box sx={{ width: "100%", marginTop: "41px" }}>
          <img src={MobileBG} style={{ width: "100%" }} />
        </Box>

        {/* section1  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "9px",
          }}
        >
          <Typography>Kitchen Café & Resto</Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam lobortis massa id facilisis. Vivamus a semper nisi.
          </Typography>
        </Box>

        {/* divider  */}
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* location  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <Typography>Location</Typography>
          <Typography>705 Sunny Day Drive</Typography>
          <Typography></Typography>
        </Box>
        {/* divider  */}
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* Timing  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography>TImmings</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Mon</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Tue</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Wed</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Thu</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Fri</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Sat</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography sx={{ width: "36px" }}>Sun</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "73px" }}>Open</Typography>
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
                <Typography>Mon</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>
                10:00 AM to 10:00 PM
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* divider  */}
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* direction  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <Typography>Directions</Typography>
          <Typography>Navigate in Google Maps</Typography>
          <Typography></Typography>
        </Box>

        {/* divider  */}
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* contact detail  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <Typography>Contact Details</Typography>
          <Typography>+91 9292938393, +91 839484909</Typography>
        </Box>

        {/* divider  */}
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* show media  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <Typography>Social Media</Typography>
          <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
            background: "rgba(0, 0, 0, 0.10)",
            height: "1px",
            width: "100%",
          }}
        ></Box>

        {/* terms  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <Typography>Terms & Policies</Typography>
          <Typography>Privacy policy</Typography>
          <Typography>Returns and refunds policy</Typography>
          <Typography>Cancellation policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
