import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Groups3Icon from "@mui/icons-material/Groups3";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CachedIcon from '@mui/icons-material/Cached';
import "./../../index.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./sidebar.css";

const drawerWidth = 205;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh",
  },

  drawerPaper: {
    width: drawerWidth,
    position: "relative",
    backgroundColor: "#F9FAFB",
    borderRight: "2px solid black",
  },

  sidebarTopList: {
    backgroundColor: "#E8EBEE",
    width: "90%",
    marginTop: "1.5rem",
    marginLeft: "10px",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  imgSidebar: {
    width: "20%",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={`${classes.drawer} border_set`}
      variant="permanent"
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
    >
      <div className="imgSidebar">
        <img
          src="https://images.unsplash.com/photo-1557053964-937650b63311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80"
          alt="logo img"
        />
      </div>

      <ListItem button className={classes.sidebarTopList}>
        <Avatar className="avtarSidebar"></Avatar>
        <ListItemText primary="Ashok" />
      </ListItem>
      <div className={classes.toolbar} />

      <List>
        <Link
          to={"/dashboard"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link
          to={"/department"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Department" />
          </ListItem>
        </Link>
        <Link
          to={"/employ"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Employee" />
          </ListItem>
        </Link>
        <Link
          to={"/Project"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary="project management" />
          </ListItem>
        </Link>
        <Link
          to={"/report"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </Link>
        <Link
          to={"/registration"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary=" Settings" />
          </ListItem>
        </Link>
        <Link
          to={"/staff"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <Groups3Icon />
            </ListItemIcon>
            <ListItemText primary=" Staff" />
          </ListItem>
        </Link>
        <Link
          to={"/review"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary=" Review" />
          </ListItem>
        </Link>
        <Link
          to={"/manage"}
          style={{ textDecoration: "none", color: "#2d3436" }}
        >
          <ListItem button className="listbutton">
            <ListItemIcon>
              <CachedIcon />
            </ListItemIcon>
            <ListItemText primary=" Manage" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
