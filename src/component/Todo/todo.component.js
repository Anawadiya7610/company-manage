import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./../../index.css";

function Todoapp() {
  return (
    <div>
      <FormControl className="checkbok_head">
        <FormLabel component="legend" style={{marginLeft:"10px",fontWeight:"600",color:"#000"}}>Tasks</FormLabel>
        <FormGroup aria-label="position" row>
          <div className="checkbok_head">
            <div className="checkbox_Div">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Create FireStone Logo"
                labelPlacement="end"
              />
              <div className="more_icon">
                <MoreVertIcon />
              </div>
            </div>
            <div className="checkbox_Div">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Create FireStone Logo"
                labelPlacement="end"
              />
              <div className="more_icon">
                <MoreVertIcon />
              </div>
            </div>
            <div className="checkbox_Div">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Create FireStone Logo"
                labelPlacement="end"
              />
              <div className="more_icon">
                <MoreVertIcon />
              </div>
            </div>
            <div className="checkbox_Div">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Create FireStone Logo"
                labelPlacement="end"
              />
              <div className="more_icon">
                <MoreVertIcon />
              </div>
            </div>
            <div className="checkbox_Div">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Create FireStone Logo"
                labelPlacement="end"
              />
              <div className="more_icon">
                <MoreVertIcon />
              </div>
            </div>
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Todoapp;
