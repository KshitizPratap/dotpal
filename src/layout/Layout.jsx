import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import classes from "./layout.module.css";
import JobInteraction from "../components/Job/jobInteraction/JobInteraction";
import { Backdrop, Conditional } from "../common-ui/commonUI";
import useCommonStore from "../store/useCommonStore";
import JobListing from "../components/Job/jobListing/JobListing";
import Login from "../components/login/Login";
import { randomBubbleGenerator } from "../utils/utils";

const Layout = () => {
  const { showCreateJob, setShowCreateJob, userCred, jobs, setJobs } =
    useCommonStore();

  useEffect(() => {
    const tempjobs = { ...jobs };
    Object.keys(tempjobs).map((id) => {
      const { coordinates, size } = randomBubbleGenerator();

      tempjobs[id] = {
        ...tempjobs[id],
        coordinates,
        size,
      };
    });

    setJobs(tempjobs);
  }, []);

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
