import React, { useEffect, useState } from "react";
import classes from "./jobInteraction.module.css";
import useCommonStore from "../../../store/useCommonStore";
import DefaultUserProfile from "../../../asset/userProfile.png";
import { Conditional } from "../../../common-ui/commonUI";
import { randomBubbleGenerator } from "../../../utils/utils";

const JobInteraction = () => {
  const {
    jobs,
    selectedJobsIndex,
    setShowCreateJob,
    setShowBackdrop,
    setJobs,
    userCred,
  } = useCommonStore();
  const [jobDetails, setJobDetails] = useState({});

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

  const handlePublish = () => {
    const { coordinates, size } = randomBubbleGenerator();
    const { title, description } = jobDetails;
    const newJobs = {
      ...jobs,
      [userCred.username]: {
        name: userCred.username,
        id: userCred.username,
        profileImg: "",
        coordinates,
        size,
        title,
        description,
      },
    };

    setJobs(newJobs);
    setShowBackdrop(false);
    setShowCreateJob(false);
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
          value={jobDetails?.title}
          onChange={handleJobDetails}
        />
      </div>
      <textarea
        className={classes.jobDescription}
        placeholder="Description"
        name="description"
        value={jobDetails?.description}
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
          Close
        </button>
        <Conditional show={!selectedJobsIndex}>
          <button className={classes.button} onClick={handlePublish}>
            Publish
          </button>
        </Conditional>
      </div>
    </div>
  );
};

export default JobInteraction;
