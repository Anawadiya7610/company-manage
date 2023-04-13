import React from "react";
import { Grid, Paper } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./index.css";

function Social() {
  return (
    <div>
      <Paper className="paper_head">
        <h2>social traffic</h2>
        <div className="data">
          <div className="data1">
            <Grid container>
              <Grid lg={6} md={6} className="gird_div">
                <div className="social_container">
                  <Paper className="paper_social">
                    <div className="socil_icon">
                      <FacebookRoundedIcon style={{color:"#1877F2"}}/>
                    </div>
                    <div className="social_data">
                      <h4>323.23k</h4>
                      <p>FaceBook</p>
                    </div>
                  </Paper>
                </div>
              </Grid>
              <Grid lg={6} md={6}  className="gird_div">
                <div className="social_container">
                  <Paper className="paper_social">
                    <div className="socil_icon">
                      <GoogleIcon style={{color:"#DF3E30"}} />
                    </div>
                    <div className="social_data">
                      <h4>323.23k</h4>
                      <p>Google</p>
                    </div>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="data2">
            <Grid container>
              <Grid lg={6} md={6} className="gird_div">
                <div className="social_container">
                  <Paper className="paper_social">
                    <div className="socil_icon">
                      <TwitterIcon style={{color:"#006097"}}/>
                    </div>
                    <div className="social_data">
                      <h4>323.23k</h4>
                      <p>linkdin</p>
                    </div>
                  </Paper>
                </div>
              </Grid>
              <Grid lg={6} md={6} className="gird_div">
                <div className="social_container">
                  <Paper className="paper_social">
                    <div className="socil_icon">
                      <LinkedInIcon style={{color:"#1C9CEA"}}/>
                    </div>
                    <div className="social_data">
                      <h4>323.23k</h4>
                      <p>FaceBook</p>
                    </div>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Social;
