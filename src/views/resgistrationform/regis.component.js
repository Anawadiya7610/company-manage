import React, { useState } from "react";
import { HeaderContainerPage } from "../../component/Header/header.container";
import { SidebarContainerPage } from "../../component/Sidebar/sidebar.container";
import { Grid, Box, Button, TextField, Typography } from "@material-ui/core";
import "./../../index.css";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Password:", password);
    console.log("Re-Password:", repassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepasswordChange = (event) => {
    setRepassword(event.target.value);
  };

  return (
    <section className="background">
      <Grid container>
        <Grid item sm={0} lg={2} md={0} className="sidebargrid">
          <Box
            component="Button"
            className="sidebar_dash"
            display={{ lg: "block", md: "none", sm: "none", xs: "none" }}
          >
            <SidebarContainerPage className="sidebar_container" />
          </Box>
        </Grid>
        <Grid item sm={12} lg={10} md={12} className="homegrid">
          <div className="header_fix">
            <HeaderContainerPage className="header_container" />
          </div>
          <div className="form_dash">
            <Box
              sx={{
                maxWidth: 400,

                height: "100vh",
                mt: 8,
                my: 10,
                p: 2,
              }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Password Form
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Re-enter Password"
                  variant="outlined"
                  type="password"
                  value={repassword}
                  onChange={handleRepasswordChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, width: 1 / 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Registration;
