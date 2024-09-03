import React from "react";
import Navbar from "../components/navbar/Navbar";
import classes from "./layout.module.css";
import JobInteraction from "../components/jobInteraction/JobInteraction";
import { Backdrop, Conditional } from "../common-ui/commonUI";
import useCommonStore from "../store/useCommonStore";

const Layout = () => {
  const { showCreateJob, setShowCreateJob } = useCommonStore();

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.childrenContainer}>
          <Navbar />
          <Conditional show={showCreateJob}>
            <JobInteraction />
          </Conditional>
        </div>
      </div>
      <Backdrop onBackdropClick={() => setShowCreateJob(false)} />
    </>
  );
};

export default Layout;
