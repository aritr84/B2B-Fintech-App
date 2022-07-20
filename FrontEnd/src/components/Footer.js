import React from "react";
import { year } from "./vars";

function Footer() {
  return (
    <div className="footer" style={{ color: "white" }}>
      Privacy Policy | @{year} Highradius Corporation.All rights Reserved
    </div>
  );
}

export default Footer;
