import React from "react";
import { HeaderContainerPage } from "../../component/Header/header.container";
import { SidebarContainerPage } from "../../component/Sidebar/sidebar.container";
import Table from "./component/projectmanajar-table";
import { Grid, Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import "./../../index.css";

function Project() {
  return (
    <section className="background">
      <Grid container >
        <Grid item sm={0} lg={2} md={0}>
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
          <div className="table_dash">
            <div className="table_btn">
               <div className="btn">
               <Button variant="contained">Create +</Button>
               </div>
              <Table />
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Project;
