import React from "react";
import classes from "./createJob.module.css";

const CreateJob = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.profile}></div>
        <div className={classes.username}></div>
      </div>
      <div className={classes.description}></div>
    </div>
  );
};

export default CreateJob;
