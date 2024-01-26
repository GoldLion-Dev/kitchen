import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customCheckbox: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  hiddenCheckbox: {
    display: "none",
  },
  checkboxIcon: {
    width: "100%",
    height: "100%",
    border: "1.2px solid #CCD1D8",
    borderRadius: "4px",

    transition: "background-color 0.3s",
    position: "relative",
  },
  checkmark: {
    visibility: "hidden",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  checked: {},
  checkedCheckmark: {
    visibility: "visible",
  },
}));
const CustomCheckbox = ({ backgroundColor, checkedBackgroundColor }) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={classes.customCheckbox}
      style={{ width: "100%", height: "100%" }}
    >
      <input
        style={{ width: "100%", height: "100%" }}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={classes.hiddenCheckbox}
      />
      <span
        className={`${classes.checkboxIcon} ${isChecked && classes.checked}`}
        style={{
          backgroundColor: isChecked ? checkedBackgroundColor : backgroundColor,
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          width="12"
          height="9"
          xmlns="http://www.w3.org/2000/svg"
          className={`${classes.checkmark} ${
            isChecked && classes.checkedCheckmark
          }`}
        >
          <path
            d="M1 4.304L3.696 7l6-6"
            stroke="#FFF"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </span>
    </label>
  );
};

export default CustomCheckbox;
