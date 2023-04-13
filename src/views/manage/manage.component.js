import React from "react";
import { HeaderContainerPage } from "../../component/Header/header.container";
import { SidebarContainerPage } from "../../component/Sidebar/sidebar.container";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Avatar, Button, Grid, Paper, Link } from "@mui/material";
import "./../../index.css";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";

function Manage() {
  return (
    <section className="background">
      <Grid container spacing={0}>
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
          <div className="home_dash">
            <Box
              sx={{
                width: "98%",
              }}
            >
              <Paper>
                <Box
                  sx={{
                    height: 70,
                    marginTop: "8rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: "16px",
                  }}
                >
                  {" "}
                  <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="/">
                        Home
                      </Link>
                      <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                      >
                        Manage
                      </Link>
                    </Breadcrumbs>
                  </Box>
                  <Box>
                    <Typography>Manage</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>

            <Box sx={{ margin: "14px 0px" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#D1E9FC",
                  color: "blue",
                  ":hover": {
                    color: "#fff",
                  },
                }}
              >
                Account Rolles
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "8px",
                  background: "#D1E9FC",
                  color: "blue",
                  ":hover": {
                    color:"#fff",
                  },
                }}
              >
                Leadership Rolles
              </Button>
            </Box>
            <Box sx={{ width: "98%" }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between" }}
                className="manage_boxes"
              >
                <Box sx={{ width: "49%" }} className="box_cards">
                  <Paper>
                    <Box>
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600" }}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography
                          sx={{ padding: "20px auto", color: "#000018" }}
                        >
                          They can see and do everything best not to have many
                          with this role.
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Avatar src="https://images.unsplash.com/photo-1589800221366-5cf066781928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                          <Button
                            variant="contained"
                            sx={{
                              background: "#D1E9FC",
                              color: "blue",
                              ":hover": {
                                color: "#fff",
                              },
                            }}
                          >
                            View Permition
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ width: "49%" }} className="box_cards box_cards2">
                  <Paper>
                    <Box>
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600" }}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography
                          sx={{ padding: "20px auto", color: "#000018" }}
                        >
                          They can see and do everything best not to have many
                          with this role.
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Avatar src="https://images.unsplash.com/photo-1589800221366-5cf066781928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                          <Button
                            variant="contained"
                            sx={{
                              background: "#D1E9FC",
                              color: "blue",
                              ":hover": {
                                color: "#fff",
                              },
                            }}
                          >
                            View Permition
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
                className="manage_boxes"
              >
                <Box sx={{ width: "49%" }} className="box_cards">
                  <Paper>
                    <Box>
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600" }}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography
                          sx={{ padding: "20px auto", color: "#000018" }}
                        >
                          They can see and do everything best not to have many
                          with this role.
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Avatar src="https://images.unsplash.com/photo-1589800221366-5cf066781928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                          <Button
                            variant="contained"
                            sx={{
                              background: "#D1E9FC",
                              color: "blue",
                              ":hover": {
                                color: "#fff",
                              },
                            }}
                          >
                            View Permition
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ width: "49%" }} className="box_cards box_cards2">
                  <Paper>
                    <Box>
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "600" }}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ padding: "20px 25px" }}>
                        <Typography
                          sx={{ padding: "20px auto", color: "#000018" }}
                        >
                          They can see and do everything best not to have many
                          with this role.
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Avatar src="https://images.unsplash.com/photo-1589800221366-5cf066781928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

                          <Button
                            variant="contained"
                            sx={{
                              background: "#D1E9FC",
                              color: "blue",
                              ":hover": {
                                color: "#fff",
                              },
                            }}
                          >
                            View Permition
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Manage;
