import React from "react";
import Navbar from "../components/navbar/Navbar";
import BgURL from "../asset/globe.png";
import classes from "./layout.module.css";
import CreateJob from "../components/createJob/CreateJob";
import { Conditional } from "../common-ui/commonUI";
import useCommonStore from "../store/useCommonStore";

const Layout = () => {
  const { showCreateJob, setShowCreateJob } = useCommonStore();

  return (
    <>
      <Backdrop />
      <div className={classes.mainContainer}>
        <img src={BgURL} className={classes.bgImg} />
        <div className={classes.childrenContainer}>
          <Navbar />
          <Conditional show={showCreateJob}>
            <CreateJob />
          </Conditional>
        </div>
      </div>
    </>
  );
};

export default Layout;
