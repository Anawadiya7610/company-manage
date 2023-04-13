import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@mui/material/Avatar";
import { fade, makeStyles } from "@material-ui/core/styles";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import india from "./img/india.png";
import usa from "./img/usa.png";
import australia from "./img/australia.png";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AutoStories } from "@mui/icons-material";
import CountryDropdown from "country-dropdown-with-flags-for-react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: "#F9FAFB",
    color: "gray",
    height: "5rem",
    display: "flex",
    boxShadow: "none",
    justifyContent: "center",
  },
  title: {
    flexGrow: 2,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  avtarbackground: {
    backgroundColor: "transparent !important",
    color: "gray",
    "&:hover": {
      backgroundColor: "#E1F5FE !important",
    },
  },
  headerColor: {
    color: "rgb(99, 115, 129);",
  },
  flagDrop: {
    height: "40px !important",
    border: "none !important",
    backgroundColor: "#F9FAFB",
  },
}));

const Header = () => {
  const classes = useStyles();
  // const countryData = [india, usa, AutoStories];
  const [country, setCountry] = useState(usa);

  const handleCountry = (e) => {
    console.log(e.target.value);
    console.log(e.target);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [countryEl, setCountryEl] = React.useState(null);
  const openCountry = Boolean(countryEl);
  const countryClick = (event) => {
    setCountryEl(event.currentTarget);
  };
  const countryClose = (e) => {
    setCountryEl(null);
  };

  const [noticeEl, setNoticeEl] = React.useState(null);
  const openNotice = Boolean(noticeEl);
  const noticeClick = (event) => {
    setNoticeEl(event.currentTarget);
  };
  const noticeClose = () => {
    setNoticeEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <div className="tool_section">
          <div className="menu">
            <Avatar className="avatarhover">
              <MenuIcon />
            </Avatar>
          </div>
          <div className="avatar_group ">
            <div>
              <Box sx={{ ml: 1 }}>
                <CountryDropdown
                  id="UNIQUE_ID"
                  className={classes.flagDrop}
                  preferredCountries={["gb", "us"]}
                  value=""
                  // handleChange={(e) => console.log(e.target.value)}
                ></CountryDropdown>
              </Box>
            </div>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={noticeClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={openNotice ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNotice ? "true" : undefined}
                >
                  <Badge badgeContent={4} color="secondary">
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      className="avatarhover"
                    >
                      <NotificationsIcon />
                    </Avatar>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={noticeEl}
              id="account-menu"
              open={openNotice}
              onClose={noticeClose}
              onClick={noticeClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Box
                  sx={{ display: "flex", flexDirection: "column" }}
                  className="unclickable"
                >
                  <p className="head_notice"> Notifications</p>
                  <p className="notice_text">You have 2 unread messages</p>
                </Box>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                You have 2 unread messages
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
            </Menu>

            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      className="avatarhover"
                    >
                      M
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>Ashok</MenuItem>
                <MenuItem onClick={handleClose}>ashok@123.com</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Home
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Avatar fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
