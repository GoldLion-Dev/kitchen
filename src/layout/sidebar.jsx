import React from "react";
import { useState } from "react";
import { Box, Typography, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import { NoEncryption } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  sidebar_text: {
    fontFamily: "MetropolisRegular !important",
    fontStyle: "normal",
    lineheight: "normal !important",
  },
}));
const Sidebar = ({ removeMenu }) => {
  const classes = useStyles();

  const menuData = [
    {
      mainMenu: "Main Menu 1",
      subMenus: ["Submenu 1", "Submenu 2", "Submenu 3"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    {
      mainMenu: "Main Menu 2",
      subMenus: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    // Add more main menu items with their respective submenus as needed
  ];

  const [openMenus, setOpenMenus] = useState(
    Array(menuData.length).fill(false)
  );

  const handleToggle = (index) => {
    const newOpenMenus = [...openMenus];
    newOpenMenus[index] = !newOpenMenus[index];
    setOpenMenus(newOpenMenus);
  };

  return (
    <Box
      sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
      style={{
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 2px 12px 0px",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContents: "space-between ",
        }}
      >
        <Box
          style={{
            display: "flex",
            width: "235px",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >
          <Box
            sx={{ display: removeMenu ? "none" : "display" }}
            style={{ width: "100%", height: "45px" }}
          >
            <Box
              style={{
                borderRadius: "6px",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                background: "#FFF",
                padding: "8px",
              }}
            >
              <Box
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Input
                  className={classes.sidebar_text}
                  placeholder="Select Menu"
                  disableUnderline
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#989898",
                    border: "none",
                  }}
                  sx={{
                    "&:focus": {
                      border: "none",
                    },
                  }}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M9.10482 16.6247C13.2585 16.6247 16.6257 13.2575 16.6257 9.10384C16.6257 4.9502 13.2585 1.58301 9.10482 1.58301C4.95118 1.58301 1.58398 4.9502 1.58398 9.10384C1.58398 13.2575 4.95118 16.6247 9.10482 16.6247Z"
                    stroke="#969797"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4173 17.4163L15.834 15.833"
                    stroke="#969797"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
            marginTop: "23px",
          }}
        >
          <List>
            {menuData.map((menu, index) => (
              <div key={index}>
                <ListItemButton onClick={() => handleToggle(index)}>
                  <ListItemText
                    primary={menu.mainMenu}
                    sx={{
                      paddingLeft: "10px",
                      borderLeft: openMenus[index]
                        ? "2px solid var(--primary, #0575FC)"
                        : "",
                      color: openMenus[index] ? "#0575FC" : "#000",
                    }}
                  />
                </ListItemButton>
                <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.subMenus.map((submenu, subIndex) => (
                      <ListItemButton
                        key={subIndex}
                        sx={{ pl: 4 }}
                        onClick={() => console.log(submenu)}
                      >
                        <ListItemText primary={submenu} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
          {/* <Box
            style={{
              display: "flex",
              width: "157px",
              height: "319px",
              paddingBottom: "4px",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "flex-Start",
                gap: "15px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                  borderLeft: "2px solid var(--primary, #0575FC)",
                }}
              >
                <Typography
                  style={{
                    color: "#0575FC",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Most Ordered
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px 20px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px 20px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px 20px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px 20px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px 20px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "flex-Start",
                gap: "6px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Most Ordered
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  width: "157px",
                  height: "40px",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContents: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  style={{
                    color: "#777",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cheese Pizza
                </Typography>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
