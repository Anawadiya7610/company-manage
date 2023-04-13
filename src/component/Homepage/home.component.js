import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid, Paper, Divider, Button, Box } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import FireHydrantAltIcon from "@mui/icons-material/FireHydrantAlt";
import AppleIcon from "@mui/icons-material/Apple";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PestControlIcon from "@mui/icons-material/PestControl";
import { PieChartContainerPage } from "../piechart/piechart.container";
import { MixchartContainerPage } from "../mixchart/mixchart.container";
import { BarlineContainerPage } from "../barlinechart/bar.container";
import { RadarChartsContainerPage } from "../radarcharts/radar.container";
import { NewscontentContainerPage } from "../newscontent/news.container";
import { SocialContainerPage } from "../socialFolow/social.container";
import CircleIcon from "@mui/icons-material/Circle";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { TodoItemContainerPage } from "../Todo/todo.container";
import "./home.css";

function Home() {
  return (
    <section className="home_main">
      <section className="topdata_home">
        <Typography variant="h5" className="heading">
          Hi, Welcome back
        </Typography>
        <div className="card">
          <div className="cardPaper ">
            <Paper className="paperheader" id="paper1">
              <div className="top">
                <div className="topPaper">
                  <Avatar className="avatar_icon">
                    <FireHydrantAltIcon style={{ color: "#103996" }} />
                  </Avatar>
                </div>

                <div className="card_text">
                  <h2>714k </h2>

                  <p> Weekly Sales</p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="cardPaper cardpaperSet">
            <Paper className="paperheader " id="paper1">
              <div className="top2">
                <div className="topPaper">
                  <Avatar className="avatar_icon avtar_background">
                    <AppleIcon style={{ color: "#103996" }} />
                  </Avatar>
                </div>
                <div className="card_text">
                  <h2>714k </h2>

                  <p> Weekly Sales</p>
                </div>
              </div>
            </Paper>
          </div>

          <div className="cardPaper cardpaperSet">
            <Paper className="paperheader" id="paper1">
              <div className="top3">
                <div className="topPaper">
                  <Avatar className="avatar_icon3">
                    <BorderAllIcon style={{ color: "#B78103" }} />
                  </Avatar>
                </div>
                <div className="card_text">
                  <h2 style={{ color: "#7A4F01" }}>714k </h2>

                  <p style={{ color: "#D6C38D" }}> Weekly Sales</p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="cardPaper cardpaperSet">
            <Paper className="paperheader" id="paper1">
              <div className="top4">
                <div className="topPaper">
                  <Avatar className="avatar_icon4">
                    <PestControlIcon style={{ color: "#B72136" }} />
                  </Avatar>
                </div>

                <div className="card_text">
                  <h2 style={{ color: "#7A0C2E" }}>714k </h2>

                  <p style={{ color: "#C68990" }}> Weekly Sales</p>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </section>
      <section className="charts">
        <Grid container>
          <Grid lg={8} md={6} sm={12}>
            <div className="left_chart">
              <div className="liner_charts">
                <Paper className="chart_paper">
                  <div className="chart_text">
                    <h4>Website Visits</h4>
                    <p>(+43%) than last year</p>
                  </div>
                  <div className="liner_chart">
                    <MixchartContainerPage />
                  </div>
                </Paper>
              </div>

              <div className="liner_charts liner_chartSpacing">
                <Paper className="chart_paper">
                  <div className="chart_text">
                    <h4> Conversion Rates</h4>
                    <p>(+43%) than last year</p>
                  </div>
                  <div className="liner_chart">
                    <BarlineContainerPage />
                  </div>
                </Paper>
              </div>

              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Paper className="chart_paper">
                  <NewscontentContainerPage />
                </Paper>
              </div>

              <div className="todoapp">
                <Paper className="chart_paper">
                  <TodoItemContainerPage />
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <div className="right_chart">
              <div className="right1">
                <Paper className="paper_rightcharts">
                  <div className="char_text">
                    <h4>Current Visits</h4>
                  </div>
                  <div className="chart_div">
                    <PieChartContainerPage />
                  </div>
                </Paper>
              </div>
              <div className="right2">
                <Paper className="paper_rightcharts">
                  <RadarChartsContainerPage />
                </Paper>
              </div>
              <div className="right3">
                <Paper className="paper_rightcharts">
                  <div className="timeline">
                    <h4>Order Timeline</h4>

                    <div className="order_data">
                      <div className="timeline_icon">
                        <div className="toporder_icon">
                          <CircleIcon style={{ width: "10px" }} />
                        </div>
                      </div>
                      <div className="order_datatext">
                        <p className="order_p"> 1983, orders, $4220</p>

                        <span className="text_span"> 26 Aug 2022 2:26 PM</span>
                      </div>
                    </div>
                    <div className="order_data">
                      <div className="timeline_icon">
                        <div className="toporder_icon">
                          <CircleIcon style={{ width: "10px" }} />
                        </div>
                      </div>
                      <div className="order_datatext">
                        <p className="order_p"> 1983, orders, $4220</p>

                        <span className="text_span"> 26 Aug 2022 2:26 PM</span>
                      </div>
                    </div>
                    <div className="order_data">
                      <div className="timeline_icon">
                        <div className="toporder_icon">
                          <CircleIcon style={{ width: "10px" }} />
                        </div>
                      </div>
                      <div className="order_datatext">
                        <p className="order_p"> 1983, orders, $4220</p>

                        <span className="text_span"> 26 Aug 2022 2:26 PM</span>
                      </div>
                    </div>
                    <div className="order_data">
                      <div className="timeline_icon">
                        <div className="toporder_icon">
                          <CircleIcon style={{ width: "10px" }} />
                        </div>
                      </div>
                      <div className="order_datatext">
                        <p className="order_p"> 1983, orders, $4220</p>

                        <span className="text_span"> 26 Aug 2022 2:26 PM</span>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
              <div className="right4">
                <SocialContainerPage />
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </section>
  );
}

export default Home;
