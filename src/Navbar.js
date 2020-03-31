import React, { Component } from "react";
import Grid from "@material-ui/core/Grid"
import ihLogo from "./ironhack-logo.svg";
import menuTop from "./menu-top.svg";

class Navbar extends Component {
  render() {
    return (
      <Grid container style={{width: "100vw"}}>
        <Grid item xs={6} style={{marginLeft: "-23vw"}}>
          <img src={ihLogo} alt="ironhacklogo" />
        </Grid>
        <Grid item xs={6} style={{marginLeft: "22vw"}}>
          <img src={menuTop} alt="topmenu" />
        </Grid>
      </Grid>
    );
  }
}

export default Navbar;
