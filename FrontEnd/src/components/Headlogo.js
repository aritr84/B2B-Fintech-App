/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import abc from "../logo/abc.svg";
import hrc from "../logo/logo.svg";
import { Grid } from "@mui/material";

const Headlogo = () => {
  return (
    <Grid container style={{ backgroundColor: "#375366" }}>
      <Grid item sm={5}>
        <img
          alt="hrclogo"
          style={{ display: "flex", height: "50px", float: "left" }}
          src={abc}
        />
      </Grid>
      <Grid item sm={6} sx={{ paddingLeft: "20px" }}>
        <img
          alt="logo2"
          style={{ display: "inline-block", height: "50px" }}
          src={hrc}
        />
      </Grid>

      <Grid item sm={12}>
        <div
          style={{
            display: "flex",
            float: "left",
            paddingLeft: "10px",
            color: "white",
          }}
        >
          <h4>INVOICE LIST</h4>
        </div>
      </Grid>
    </Grid>
  );
};

export default Headlogo;
