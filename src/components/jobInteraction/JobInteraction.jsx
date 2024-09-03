import React, { useEffect, useState } from "react";
import classes from "./jobInteraction.module.css";
import useCommonStore from "../../store/useCommonStore";
import DefaultUserProfile from "../../asset/userProfile.png";

const JobInteraction = () => {
  const { jobs, selectedJobsIndex, setShowCreateJob, setShowBackdrop } =
    useCommonStore();
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (selectedJobsIndex) {
      setJobDetails({ ...jobs[selectedJobsIndex] });
    }
  }, [selectedJobsIndex]);

  const handleJobDetails = (e) => {
    setJobDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <img src={DefaultUserProfile} className={classes.userProfile} />
        <input
          className={classes.jobTitle}
          type="text"
          placeholder="Title"
          name="title"
          value={jobDetails.title}
          onChange={handleJobDetails}
        />
      </div>
      <textarea
        className={classes.jobDescription}
        placeholder="Description"
        name="description"
        value={jobDetails.description}
        onChange={handleJobDetails}
      />

      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={() => {
            setShowCreateJob(false);
            setShowBackdrop(false);
          }}
        >
          Cancel
        </button>
        <button className={classes.button}>Publish</button>
      </div>
    </div>
  );
};

export default JobInteraction;
