import React from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { Avatar, Box } from "@material-ui/core";

function Flag() {
  return (
    <Box sx={{ width: "50px", height: "50px", borderRadius: "50%" }}>
      <CountryDropdown
        id="UNIQUE_ID"
        // className="YOUR_CSS_CLASS"
        preferredCountries={["gb", "us"]}
        value=""
        // handleChange={(e) => console.log(e.target.value)}
      ></CountryDropdown>
    </Box>
  );
}

export default Flag;
