import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  ButtonBase,
  Checkbox,
  Input,
  Switch,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";
import CustomCheckBox from "../../components/customeCheck";
import RadioButton from "../../components/radioButton";
import SelectColor from "../../components/selectColor";
import CustomRadioGroupButton from "./schedulePick";
import DatePicker from "./datePicker";
import RadioButtonCheckbox from "../radioTypeCheckbox";
import { AddCart } from "../image";
import Counter from "../counter";
import { makeStyles } from "@mui/styles";
// import WeekPicker from "./weekpicker";

const useStyles = makeStyles((theme) => ({
  header_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "20px",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "20px !important",
  },
  sub_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "16px !important",
  },
  additional_info_text: {
    color: " var(--3, #202020)",
    fontFamily: "Metropolis !important",
    fontSize: "14px",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "17px !important",
    padding: "12px 43px 62px 9px",
  },
  description_text: {
    color: " var(--3, #989898)",
    fontFamily: "Metropolis !important",
    fontSize: "16px",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "19px !important",
  },
  food_name_text: {
    color: " var(--3, #444)",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "17px !important",
  },
  food_price_text: {
    color: " var(--3, #444)",
    fontFamily: "Metropolis !important",
    fontSize: "15px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "17px !important",
  },
  sub_scription_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "17px !important",
  },
  add_cart_btn_text: {
    color: " var(--3, #FFF) !important",
    fontFamily: "Metropolis !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "17px !important",
  },
  sub_text1: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "normal !important",
  },
  sub_scription_head: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "17px !important",
  },
  discount_text: {
    color: " var(--3, #000)",
    fontFamily: "Metropolis !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    lineHeight: "17px !important",
  },

  subScribe_box: {
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
  },

  root: {
    borderRadius: "14px", // Set your desired border-radius value
    "&$checked": {
      borderRadius: "14px", // Set the same value for checked state
    },
  },
  checked: {},
}));
const Modal = ({ isOpen, productData, handleClose }) => {
  const classes = useStyles();
  const white = "#FFF";
  const blue = "#0575FC";
  const [isSubScribe, setSubScribe] = useState(false);

  const handleClickSubScribe = () => {
    setSubScribe(!isSubScribe);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        maxWidth: "69%",
        // maxHeight: "1985px",
        // height: "100%",
        "& .MuiPaper-root": { margin: 0 },
        display: "flex",
        borderRadius: "12px 12px 0px 0px",
      }}
      PaperProps={{
        sx: {
          margin: 0,
          display: "flex",
          borderRadius: "12px 12px 12px 12px",
          position: "fixed",
          width: { xs: "100%", sm: "69%", md: "69%" },
          left: { xs: "0", sm: "19.5%", md: "19.5%" },
          right: { xs: "0", sm: "19.5%", md: "19.5%" },
          // top: { xs: "0", sm: "5%", md: "5%" },
          // bottom: { xs: "0" },
          height: "667px",
        },
      }}
    >
      <DialogTitle
        sx={{
          lineHeight: "1",
          paddingBottom: "0px",
          display: { xs: "none", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Typography></Typography>
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
      <DialogContent
        sx={{
          width: "100%",
          paddingLeft: { xs: "15px", sm: "59px", md: "59px" },
          paddingRight: { xs: "15px", sm: "60px", md: "60px" },
          paddingBottom: "0px ",
          marginTop: { xs: "18px" },
        }}
      >
        <Box>
          {/* first */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "30px", sm: "33px", md: "33px" },
              flexDirection: { xs: "column", sm: "row", md: "row" },
              position: { xs: "relative", sm: "", md: "" },
            }}
          >
            {/* close button  */}
            <Box
              onClick={handleClose}
              sx={{
                width: "24px",
                height: "31px",
                position: { xs: "absolute" },
                display: { xs: "block", sm: "none", md: "none" },
                top: "14.76px",
                right: "24px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
              >
                <rect
                  y="0.761963"
                  width="24"
                  height="30.9593"
                  rx="4"
                  fill="black"
                  fill-opacity="0.7"
                />
                <path
                  d="M7.33341 24.7002L6.16675 23.1599L10.8334 16.9987L6.16675 10.8375L7.33341 9.29724L12.0001 15.4584L16.6667 9.29724L17.8334 10.8375L13.1667 16.9987L17.8334 23.1599L16.6667 24.7002L12.0001 18.539L7.33341 24.7002Z"
                  fill="white"
                />
              </svg>
            </Box>
            {/* web */}
            <Box
              sx={{
                height: "180px",
                display: { xs: "none", sm: "block", md: "block" },
              }}
            >
              <img
                src={AddCart}
                style={{
                  maxWidth: "284px",
                  maxHeight: "180px",
                  height: "100%",
                  borderRadius: "6px",
                }}
              />
            </Box>

            {/* mobile */}
            <Box
              sx={{
                height: "328px",
                display: { xs: "block", sm: "none", md: "none" },
              }}
            >
              <img
                src={AddCart}
                style={{
                  width: "100%",
                  height: "328px",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "8px", sm: "11px", md: "11px" },
                flexDirection: "column",
              }}
            >
              <Typography
                className={classes.header_text}
                style={{ fontSize: "20px" }}
              >
                Cashew Pineapple Pizza
              </Typography>
              <Typography className={classes.description_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                diam leo, convallis scelerisque orci vitae, auctor imperdiet
                dolor. Vestibulum ultricies mi id purus sollicitudin, et
                molestie massa tempor. Duis ut neque vel risus accumsan
                efficitur a mattis erat. Nullam mauris erat, egestas at neque
                non, cursus lobortis libero.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: "1",
                  justifyContent: "space-between",
                  marginTop: "12px",
                }}
              >
                <Typography
                  className={classes.sub_text}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  $35.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "117px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Counter />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* second */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              marginTop: "28px",
              gap: { xs: "20px", sm: "16px", md: "16px" },
            }}
          >
            <Box
              sx={{
                borderRadius: "6px",
                border: "1px solid #E9E9E9",
                background: "#FFF",
                width: "100%",
              }}
            >
              <Box sx={{ height: { xs: "", sm: "292px", md: "292px" } }}>
                <Typography
                  className={classes.header_text}
                  sx={{
                    lineHeight: "17px !important",
                    paddingLeft: { xs: "18px", sm: "22.46px", md: "22.46px" },
                    paddingTop: { xs: "18px", sm: "22.46px", md: "22.46px" },
                    paddingBottom: { xs: "18px", sm: "22.46px", md: "22.46px" },
                  }}
                >
                  Protein Choice
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "13px",

                    paddingLeft: { xs: "18px", sm: "60.5px", md: "60.5px" },
                    paddingRight: { xs: "18px", sm: "60.5px", md: "60.5px" },
                    paddingBottom: { xs: "31px", sm: "60.5px", md: "60.5px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Chicken
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Box sx={{ width: "18px", height: "18px" }}>
                        <CustomCheckBox
                          backgroundColor={white}
                          checkedBackgroundColor={blue}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Vegetable + Fried Tofu
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Box sx={{ width: "18px", height: "18px" }}>
                        <CustomCheckBox
                          backgroundColor={white}
                          checkedBackgroundColor={blue}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Shrimp
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Box sx={{ width: "18px", height: "18px" }}>
                        <CustomCheckBox
                          backgroundColor={white}
                          checkedBackgroundColor={blue}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Beef{" "}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Box sx={{ width: "18px", height: "18px" }}>
                        <CustomCheckBox
                          backgroundColor={white}
                          checkedBackgroundColor={blue}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: "6px",
                border: "1px solid #E9E9E9",
                background: "#FFF",
                width: "100%",
              }}
            >
              <Box sx={{ height: { xs: "", sm: "292px", md: "292px" } }}>
                <Typography
                  className={classes.header_text}
                  sx={{
                    lineHeight: "17px !important",
                    paddingLeft: { xs: "18px", sm: "22.46px", md: "22.46px" },
                    paddingTop: { xs: "18px", sm: "22.46px", md: "22.46px" },
                    paddingBottom: { xs: "18px", sm: "22.46px", md: "22.46px" },
                  }}
                >
                  Extras
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "13px",
                    paddingLeft: { xs: "18px", sm: "60.5px", md: "60.5px" },
                    paddingRight: { xs: "18px", sm: "60.5px", md: "60.5px" },
                    paddingBottom: { xs: "31px", sm: "60.5px", md: "60.5px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Cheese
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Radio
                        sx={{
                          width: "18px",
                          height: "18px",
                          color: "#E9E9E9",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Mexican Dip
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Radio
                        sx={{
                          width: "18px",
                          height: "18px",
                          color: "#E9E9E9",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Garlics
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Radio
                        sx={{
                          width: "18px",
                          height: "18px",
                          color: "#E9E9E9",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      border: "1px dotted #E9E9E9",
                      background: "#E9E9E9",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography className={classes.food_name_text}>
                      Bacon Strips
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Typography className={classes.food_price_text}>
                        $3.00
                      </Typography>
                      <Radio
                        sx={{
                          width: "18px",
                          height: "18px",
                          color: "#E9E9E9",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* thrid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              gap: { xs: "20px", sm: "14px", md: "20px" },
              marginTop: { xs: "20px", sm: "19px", md: "19px" },
              height: { xs: "", sm: "93.29px", md: "93.29px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: "1px solid #E9E9E9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* size  */}
              <RadioButton />
            </Box>
            <Box
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: "1px solid #E9E9E9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: { xs: "8.56px", sm: "16px" },
                paddingBottom: { xs: "8.56px", sm: "10.36px" },
                // paddingRight: { sm: "15px" },
                paddingLeft: { sm: "15.59px" },
              }}
            >
              {/* color  */}
              <SelectColor />
            </Box>
            <Box
              sx={{
                width: "100%",
                // borderRadius: "6px",
                // border: "1px solid #E9E9E9",
              }}
            >
              <textarea
                className={classes.additional_info_text}
                name="Text1"
                style={{
                  width: "100%",
                  height: "91px",
                  borderRadius: "6px",
                  border: "1px solid #E9E9E9",
                }}
                placeholder="Additional Info (optional)"
              ></textarea>
            </Box>
          </Box>

          {/* subscribe  */}
          <Box
            className={classes.subScribe_box}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px",
              padding: "13.5px 18px",
            }}
          >
            {/* <RadioButtonCheckbox
              sx={{ marginRight: "0px" }}
              selected={isSubScribe}
              handleToggle={handleClickSubScribe}
            /> */}
            <Box>
              <Typography className={classes.sub_scription_head}>
                Subscribe & Save
              </Typography>
              <Box
                sx={{
                  marginLeft: "22px",
                  padding: "5px 10px",
                  borderRadius: "2px",
                  background: "var(--border, #E2E2E2)",
                }}
              >
                <Typography className={classes.discount_text}>
                  10% OFF
                </Typography>
              </Box>
            </Box>
            <Box>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.79078 4.47065C5.06974 4.21033 5.06974 3.78758 4.79078 3.52727L1.22015 0.195236C0.941196 -0.0650787 0.488172 -0.0650787 0.209217 0.195236C-0.0697389 0.455551 -0.0697389 0.878303 0.209217 1.13862L3.2755 4L0.211448 6.86138C-0.0675075 7.1217 -0.0675075 7.54445 0.211448 7.80476C0.490404 8.06508 0.943428 8.06508 1.22238 7.80476L4.79302 4.47273L4.79078 4.47065Z"
                  fill="#141514"
                />
              </svg>
            </Box>
          </Box>
          {/* fourth */}
          <Box
            sx={{
              display: isSubScribe ? "flex" : "none",
              flexDirection: "column",
              gap: "22px",
              marginTop: { xs: "30px", sm: "20px", md: "20px" },
            }}
          >
            <Box>
              <Typography className={classes.sub_scription_text}>
                Add as Subscription
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: "17px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "22px" }}
              >
                <Box>
                  <Typography className={classes.sub_text1}>
                    Pick Schedule
                  </Typography>
                </Box>
                <Box sx={{ width: "343px" }}>
                  <CustomRadioGroupButton />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography className={classes.sub_text1}>
                  Start Date
                </Typography>
                <Box sx={{ marginTop: "6px", width: "100%" }}>
                  <DatePicker />
                </Box>

                <Box sx={{ marginTop: "6px", width: "100%" }}>
                  {/* <WeekPicker /> */}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "23.5px",
                    gap: "9px",
                  }}
                >
                  <Switch
                  // sx={{ width: "18px", height: "8px" }}
                  // inputProps={{ style: { width: "24px", height: "15px" } }}
                  />
                  <Typography className={classes.sub_text1}>
                    Enable Auto Pay
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* add to cart button? */}
          <Box
            sx={{
              width: "100%",
              marginTop: { xs: "22px", md: "32.71px", sm: "32.71px" },
            }}
          >
            <Button
              variant="contained"
              fullWidth
              className={classes.add_cart_btn_text}
              sx={{
                height: "47px",
                paddingTop: "15px",
                paddingBottom: "15px",
                textTransform: "none",
                marginBottom: { xs: "39px", sm: "30px", md: "30px" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
