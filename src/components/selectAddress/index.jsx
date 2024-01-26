import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Input,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import {
  Location,
  Vector,
  Avatar,
  Cart,
  Ellipse,
} from "../../components/image";
import AddressTitle from "./addressTitle";

const SelectAddress = () => {
  const [isAddressModal, setAddressModal] = useState(false);
  const [isSelectAddressModal, setSelectAddressModal] = useState(false);
  const handleOpenSelectAddressModal = () => {
    setSelectAddressModal(true);
  };
  const handleCloseSelectAddressModal = () => {
    setSelectAddressModal(false);
  };
  const handleAddNewAddress = () => {
    setSelectAddressModal(false);
    setAddressModal(true);
  };

  const handleCloseAddAdressModal = () => {
    setAddressModal(false);
    console.log("select address modal");
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box>
        <Grid container>
          <Grid item>
            <Grid
              container
              flexDirection="column"
              alignItems="flex-start"
              gap="2px"
              onClick={handleOpenSelectAddressModal}
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
          </Grid>
        </Grid>
      </Box>

      {/* select address modal */}
      <Box
        sx={{
          width: "364px",
          display: isSelectAddressModal ? "block" : "none",
          right: "0px",
          marginTop: "36px",
          position: "absolute",
          borderRadius: "6px",
          border: "1px solid var(--border, #E2E2E2)",
          background: "#FFF",
          padding: "24px 16px 30px 16px",
          zIndex: "2",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Select Address</Typography>
          <Box onClick={handleCloseSelectAddressModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M8.14298 6.96147L13.813 1.29147C13.9404 1.14268 14.007 0.951284 13.9994 0.755536C13.9919 0.559788 13.9107 0.374102 13.7722 0.235584C13.6337 0.097066 13.448 0.0159182 13.2522 0.00835727C13.0565 0.000796372 12.8651 0.0673792 12.7163 0.1948L7.04631 5.8648L1.37631 0.187022C1.22752 0.0596013 1.03613 -0.00698084 0.840382 0.000580055C0.644633 0.00814095 0.458948 0.089288 0.32043 0.227806C0.181912 0.366324 0.100764 0.55201 0.093203 0.747758C0.0856421 0.943506 0.152225 1.1349 0.279645 1.28369L5.94965 6.96147L0.271868 12.6315C0.190448 12.7012 0.124321 12.787 0.0776367 12.8835C0.0309519 12.98 0.00471697 13.0851 0.000579584 13.1922C-0.0035578 13.2993 0.0144913 13.4061 0.0535937 13.5059C0.0926961 13.6057 0.152008 13.6964 0.227806 13.7722C0.303604 13.848 0.394252 13.9073 0.494061 13.9464C0.593869 13.9855 0.700683 14.0036 0.807798 13.9994C0.914913 13.9953 1.02002 13.969 1.11651 13.9224C1.21301 13.8757 1.29881 13.8096 1.36853 13.7281L7.04631 8.05813L12.7163 13.7281C12.8651 13.8556 13.0565 13.9221 13.2522 13.9146C13.448 13.907 13.6337 13.8259 13.7722 13.6873C13.9107 13.5488 13.9919 13.3631 13.9994 13.1674C14.007 12.9716 13.9404 12.7803 13.813 12.6315L8.14298 6.96147Z"
                fill="#3B3B3B"
              />
            </svg>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            marginTop: "26px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              borderRadius: "6px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              padding: "9px 8px 8px 7px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.8887 4.72363C12.2324 1.83613 9.71366 0.536133 7.50116 0.536133C7.50116 0.536133 7.50116 0.536133 7.49491 0.536133C5.28866 0.536133 2.76366 1.82988 2.10741 4.71738C1.37616 7.94238 3.35116 10.6736 5.13866 12.3924C5.80116 13.0299 6.65084 13.9065 7.50084 13.9065C8.35084 13.9065 9.20116 13.0299 9.85741 12.3924C11.6449 10.6736 13.6199 7.94863 12.8887 4.72363ZM7.50116 7.85488C6.41366 7.85488 5.53241 6.97363 5.53241 5.88613C5.53241 4.79863 6.41366 3.91738 7.50116 3.91738C8.58866 3.91738 9.46991 4.79863 9.46991 5.88613C9.46991 6.97363 8.58866 7.85488 7.50116 7.85488Z"
                fill="#0575FC"
              />
            </svg>
            <Box
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ lineHeight: "1" }}>Home</Typography>
                <Typography sx={{ lineHeight: "1" }}>
                  705 Sunny Day Drive Burbank{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              borderRadius: "6px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              padding: "9px 8px 8px 7px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.8887 4.72363C12.2324 1.83613 9.71366 0.536133 7.50116 0.536133C7.50116 0.536133 7.50116 0.536133 7.49491 0.536133C5.28866 0.536133 2.76366 1.82988 2.10741 4.71738C1.37616 7.94238 3.35116 10.6736 5.13866 12.3924C5.80116 13.0299 6.65084 13.9065 7.50084 13.9065C8.35084 13.9065 9.20116 13.0299 9.85741 12.3924C11.6449 10.6736 13.6199 7.94863 12.8887 4.72363ZM7.50116 7.85488C6.41366 7.85488 5.53241 6.97363 5.53241 5.88613C5.53241 4.79863 6.41366 3.91738 7.50116 3.91738C8.58866 3.91738 9.46991 4.79863 9.46991 5.88613C9.46991 6.97363 8.58866 7.85488 7.50116 7.85488Z"
                fill="#0575FC"
              />
            </svg>
            <Box
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ lineHeight: "1" }}>Home</Typography>
                <Typography sx={{ lineHeight: "1" }}>
                  705 Sunny Day Drive Burbank{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              borderRadius: "6px",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              padding: "9px 8px 8px 7px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.8887 4.72363C12.2324 1.83613 9.71366 0.536133 7.50116 0.536133C7.50116 0.536133 7.50116 0.536133 7.49491 0.536133C5.28866 0.536133 2.76366 1.82988 2.10741 4.71738C1.37616 7.94238 3.35116 10.6736 5.13866 12.3924C5.80116 13.0299 6.65084 13.9065 7.50084 13.9065C8.35084 13.9065 9.20116 13.0299 9.85741 12.3924C11.6449 10.6736 13.6199 7.94863 12.8887 4.72363ZM7.50116 7.85488C6.41366 7.85488 5.53241 6.97363 5.53241 5.88613C5.53241 4.79863 6.41366 3.91738 7.50116 3.91738C8.58866 3.91738 9.46991 4.79863 9.46991 5.88613C9.46991 6.97363 8.58866 7.85488 7.50116 7.85488Z"
                fill="#0575FC"
              />
            </svg>
            <Box
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ lineHeight: "1" }}>Home</Typography>
                <Typography sx={{ lineHeight: "1" }}>
                  705 Sunny Day Drive Burbank{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#989898" />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* or  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            marginTop: "17px",
            marginBottom: "17px",
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
              height: "1px",
              background: "rgba(0, 0, 0, 0.10)",
            }}
          ></Box>
          <Typography>OR</Typography>
          <Box
            sx={{
              flexGrow: "1",
              height: "1px",
              background: "rgba(0, 0, 0, 0.10)",
            }}
          ></Box>
        </Box>

        {/* Add new address  */}
        <Box
          onClick={handleAddNewAddress}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "6px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            background: "#FBFBFB",
            padding: "15px 6px 15px 14px",
            cursor: "pointer",
          }}
        >
          <Typography>Add New Address</Typography>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_8676)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.7064 11.2932C15.8938 11.4807 15.9992 11.735 15.9992 12.0002C15.9992 12.2653 15.8938 12.5197 15.7064 12.7072L10.0494 18.3642C9.95712 18.4597 9.84678 18.5359 9.72477 18.5883C9.60277 18.6407 9.47155 18.6683 9.33877 18.6694C9.20599 18.6706 9.07431 18.6453 8.95141 18.595C8.82852 18.5447 8.71686 18.4705 8.62297 18.3766C8.52908 18.2827 8.45483 18.171 8.40454 18.0481C8.35426 17.9252 8.32896 17.7936 8.33012 17.6608C8.33127 17.528 8.35886 17.3968 8.41126 17.2748C8.46367 17.1528 8.53986 17.0424 8.63537 16.9502L13.5854 12.0002L8.63537 7.05018C8.45321 6.86158 8.35241 6.60898 8.35469 6.34678C8.35697 6.08458 8.46214 5.83377 8.64755 5.64836C8.83296 5.46295 9.08377 5.35778 9.34597 5.35551C9.60816 5.35323 9.86076 5.45402 10.0494 5.63618L15.7064 11.2932Z"
                  fill="#0575FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_8676">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>

        {/* confirm button  */}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            padding: "10px 14px",
            marginTop: "22px",
          }}
        >
          Confirm
        </Button>
      </Box>

      {/* add new address modal */}
      <Box
        sx={{
          width: "364px",
          // height: "881px",
          display: isAddressModal ? "block" : "none",
          right: "0px",
          marginTop: "36px",
          position: "absolute",
          borderRadius: "6px",
          border: "1px solid var(--border, #E2E2E2)",
          background: "#FFF",
          padding: "24px 14px 14px 21px",
          zIndex: "2",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Add New Address</Typography>
          <Box
            sx={{ width: "14px", height: "14px" }}
            onClick={handleCloseAddAdressModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M8.14298 6.96147L13.813 1.29147C13.9404 1.14268 14.007 0.951284 13.9994 0.755536C13.9919 0.559788 13.9107 0.374102 13.7722 0.235584C13.6337 0.097066 13.448 0.0159182 13.2522 0.00835727C13.0565 0.000796372 12.8651 0.0673792 12.7163 0.1948L7.04631 5.8648L1.37631 0.187022C1.22752 0.0596013 1.03613 -0.00698084 0.840382 0.000580055C0.644633 0.00814095 0.458948 0.089288 0.32043 0.227806C0.181912 0.366324 0.100764 0.55201 0.093203 0.747758C0.0856421 0.943506 0.152225 1.1349 0.279645 1.28369L5.94965 6.96147L0.271868 12.6315C0.190448 12.7012 0.124321 12.787 0.0776367 12.8835C0.0309519 12.98 0.00471697 13.0851 0.000579584 13.1922C-0.0035578 13.2993 0.0144913 13.4061 0.0535937 13.5059C0.0926961 13.6057 0.152008 13.6964 0.227806 13.7722C0.303604 13.848 0.394252 13.9073 0.494061 13.9464C0.593869 13.9855 0.700683 14.0036 0.807798 13.9994C0.914913 13.9953 1.02002 13.969 1.11651 13.9224C1.21301 13.8757 1.29881 13.8096 1.36853 13.7281L7.04631 8.05813L12.7163 13.7281C12.8651 13.8556 13.0565 13.9221 13.2522 13.9146C13.448 13.907 13.6337 13.8259 13.7722 13.6873C13.9107 13.5488 13.9919 13.3631 13.9994 13.1674C14.007 12.9716 13.9404 12.7803 13.813 12.6315L8.14298 6.96147Z"
                fill="#3B3B3B"
              />
            </svg>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "46px",
            marginTop: "15px",
            padding: "12.5px 9px 12.5px 11px",
            borderRadius: "6px",
            border: "1px solid rgba(0, 0, 0, 0.20)",
          }}
        >
          <Input
            placeholder="Search Location"
            disableUnderline
            style={{ border: "none", height: "21px" }}
            sx={{
              "&:focus": {
                border: "none",
              },
            }}
          />
          <Box sx={{ width: "21px", height: "21px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M20.3375 10.8023H18.4398C18.1049 7.25814 15.277 4.42093 11.7328 4.09535V2.19767C11.7328 1.81628 11.4166 1.5 11.0352 1.5C10.6538 1.5 10.3375 1.81628 10.3375 2.19767V4.09535C6.7933 4.43023 3.95609 7.25814 3.63051 10.8023H1.73283C1.35144 10.8023 1.03516 11.1186 1.03516 11.5C1.03516 11.8814 1.35144 12.1977 1.73283 12.1977H3.63051C3.96539 15.7419 6.7933 18.5791 10.3375 18.9047V20.8023C10.3375 21.1837 10.6538 21.5 11.0352 21.5C11.4166 21.5 11.7328 21.1837 11.7328 20.8023V18.9047C15.277 18.5698 18.1142 15.7419 18.4398 12.1977H20.3375C20.7189 12.1977 21.0352 11.8814 21.0352 11.5C21.0352 11.1186 20.7189 10.8023 20.3375 10.8023ZM11.0352 14.4023C9.43516 14.4023 8.13283 13.1 8.13283 11.5C8.13283 9.9 9.43516 8.59767 11.0352 8.59767C12.6352 8.59767 13.9375 9.9 13.9375 11.5C13.9375 13.1 12.6352 14.4023 11.0352 14.4023Z"
                fill="#0575FC"
              />
            </svg>
          </Box>
        </Box>

        {/* map  */}
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "247px",
            border: "1px solid gray",
          }}
        ></Box>

        {/* address title  */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography>Address Title</Typography>
          <AddressTitle />
        </Box>

        {/* input fields  */}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField placeholder="House / Flat / Block No." />
          <TextField placeholder="Apartment/Road/Area" />
          <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
            <FormControl sx={{ width: "100%" }}>
              <Select
                inputProps={{
                  name: "mySelect",
                  id: "my-select",
                }}
                defaultValue={0}
                value={0}
              >
                <MenuItem value={0} disabled>
                  Select an option
                </MenuItem>
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <Select
                inputProps={{
                  name: "mySelect1",
                  id: "my-select1",
                }}
                value={0}
              >
                <MenuItem value={0} disabled>
                  Select an option
                </MenuItem>
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField placeholder="Zipcode" />
          <TextField placeholder="Delivery Note" multiline rows={4} />
        </Box>

        {/* button  */}
        <Button
          sx={{ marginTop: "16px", width: "100%", padding: "10px 14px" }}
          variant="contained"
        >
          Add Location{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default SelectAddress;
