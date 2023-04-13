import React from "react";
import { HeaderContainerPage } from "../../component/Header/header.container";
import { SidebarContainerPage } from "../../component/Sidebar/sidebar.container";
import { HomeContainerPage } from "../../component/Homepage/home.container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./../../index.css";

function Dashboard() {
  return (
    <section className="background">
      <Grid container spacing={0}>
        <Grid item sm={0} lg={2} md={0} >
          <Box
            component="Button"
            className="sidebar_dash"
            display={{ lg: "block", md: "none", sm: "none", xs: "none" }}
          >
            <SidebarContainerPage className="sidebar_container" />
          </Box>
        </Grid>
        <Grid item sm={12} lg={10} md={12}>
          <div className="header_fix">
            <HeaderContainerPage className="header_container" />
          </div>
          <div className="home_dash">
            <HomeContainerPage />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Dashboard;
