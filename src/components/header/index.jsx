import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

import useSiteMetadata from '../../hooks/use-site-metadata'

const Header = () => {

  const { siteURL } = useSiteMetadata();
  
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={`${siteURL}${imgSrc}`}
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
