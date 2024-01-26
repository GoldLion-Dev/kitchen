import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TimerCircle = ({
  durationInSeconds,
  size,
  passedColor,
  remainingColor,
}) => {
  const [progress, setProgress] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(durationInSeconds);

  useEffect(() => {
    let timer;
    const interval = 1000; // Update every second

    const decrementProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress - 100 / durationInSeconds;
        return newProgress < 0 ? 0 : newProgress;
      });

      setTimeRemaining((prevTime) => {
        const newTime = prevTime - 1;
        return newTime < 0 ? 0 : newTime;
      });
    };

    timer = setInterval(decrementProgress, interval);

    return () => {
      clearInterval(timer);
    };
  }, [durationInSeconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // return `${String(minutes).padStart(2, "0")}:${String(
    //   remainingSeconds
    // ).padStart(2, "0")}`;
    return remainingSeconds;
  };

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={`${size}px`}
      width={`${size}px`}
    >
      {/* Remaining part */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={5}
        sx={{
          color: remainingColor,
          position: "absolute",
        }}
      />
      {/* Passed part */}
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        thickness={5}
        sx={{
          color: passedColor,
          position: "absolute",
          clipPath: "circle(50% at 50% 50%)", // Adjusted clipPath for a circle starting from the top
        }}
      />
      {/* Text and Timer */}
      <Typography variant="h5" component="div" color="textPrimary">
        {formatTime(timeRemaining)}
      </Typography>
    </Box>
  );
};
export default TimerCircle;
