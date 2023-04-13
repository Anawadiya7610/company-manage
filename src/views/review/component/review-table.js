import { React, useState } from "react";
import MUIDataTable from "mui-datatables";
import searchBtn from "@mui/icons-material/Search";
import { Grid } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./index.css";

export default function Table() {
  const [status, setStatus] = useState(false);

  const columns = [
    "Review Name",
    "Reviewers",
    "Begin On",
    "Due By",
    "Status",
    "Actions",
  ];

  const check = [{ label: "Completed" }, { label: "Rejected" }];

  const data = [
    [
      "Joe James",
      "Test Corp",
      "Yonkers",
      "NY",
      <div onClick={() => setStatus((current) => !current)}>
        {status ? (
          <p className="compStat">Completed</p>
        ) : (
          <p className="rejStat">Rejected</p>
        )}
      </div>,
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "John Walsh",
      "Test Corp",
      "Hartford",
      "CT",
      <div onClick={() => setStatus((current) => !current)}>
        {status ? (
          <p className="compStat">Completed</p>
        ) : (
          <p className="rejStat">Rejected</p>
        )}
      </div>,
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "Bob Herm",
      "Test Corp",
      "Tampa",
      "FL",
      <div onClick={() => setStatus((current) => !current)}>
        {status ? (
          <p className="compStat">Completed</p>
        ) : (
          <p className="rejStat">Rejected</p>
        )}
      </div>,
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "James Houston",
      "Test Corp",
      "Dallas",
      "TX",
      <div onClick={() => setStatus((current) => !current)}>
        {status ? (
          <p className="compStat">Completed</p>
        ) : (
          <p className="rejStat">Rejected</p>
        )}
      </div>,
      [<EditIcon />, <DeleteIcon />, <PreviewIcon />],
    ],
    [
      "Joe James",
      "Test Corp",
      "Yonkers",
      "NY",
      <div onClick={() => setStatus((current) => !current)}>
        {status ? (
          <p className="compStat">Completed</p>
        ) : (
          <p className="rejStat">Rejected</p>
        )}
      </div>,
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
            title={"Review Table"}
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
