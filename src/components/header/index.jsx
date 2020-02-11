import React from "react";

// import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={"https://avatars1.githubusercontent.com/u/19200161?s=400&u=fd6ccd26d2915ee4dcf47e242f77850a5a1f50d0&v=4"}
          alt="Akash Vishwakarma"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Akash Vishwakarma</h1>
        <h2>Full-Stack Developer based in New Delhi, India.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
