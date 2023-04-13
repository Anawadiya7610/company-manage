import { React, useState } from "react";
import MUIDataTable from "mui-datatables";
import searchBtn from "@mui/icons-material/Search";
import { Grid, Paper, Divider, Button } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import "./index.css";

export default function Table() {
  const columns = ["Name", "Company", "City", "State", "Actions"];
  const data = [
    [
      "Joe James",
      "Test Corp",
      "Yonkers",
      "NY",
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "John Walsh",
      "Test Corp",
      "Hartford",
      "CT",
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "Bob Herm",
      "Test Corp",
      "Tampa",
      "FL",
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "James Houston",
      "Test Corp",
      "Dallas",
      "TX",
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "Joe James",
      "Test Corp",
      "Yonkers",
      "NY",
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
  ];
  const options = {
    search: searchBtn,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
  };



  return (
    <Grid container xs={12} elevation={0}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        elevation={3}
      >
        <section className="container" elevation={0}>
          <MUIDataTable
            title={"Employee"}
            data={data}
            columns={columns}
            options={options}
            style={{ borderRadius: "0px" }}
            elevation={0}
            className="tablestyle"
          />
        </section>
      </Grid>
    </Grid>
  );
}
