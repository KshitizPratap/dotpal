import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import classes from "./layout.module.css";
import JobInteraction from "../components/Job/jobInteraction/JobInteraction";
import { Backdrop, Conditional } from "../common-ui/commonUI";
import useCommonStore from "../store/useCommonStore";
import JobListing from "../components/Job/jobListing/JobListing";
import Login from "../components/login/Login";

const Layout = () => {
  const { showCreateJob, setShowCreateJob, userCred } = useCommonStore();

  console.log("[userCred]", userCred);

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.childrenContainer}>
          <Navbar />
          <Conditional show={showCreateJob}>
            <JobInteraction />
          </Conditional>
          <Conditional show={userCred.username.length}>
            <JobListing />
          </Conditional>
        </div>
      </div>
      <Conditional show={!userCred.username.length}>
        <Login />
      </Conditional>
      <Backdrop onBackdropClick={() => setShowCreateJob(false)} />
    </>
  );
};

export default Layout;
