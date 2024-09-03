import React from "react";
import classes from "./jobListing.module.css";
import useCommonStore from "../../../store/useCommonStore";
import Bubble from "../bubble/Bubble";

const JobListing = () => {
  const { jobs } = useCommonStore();

  return (
    <div className={classes.mainContainer}>
      {Object.keys(jobs).map((id) => {
        const { coordinates, size } = jobs[id];

        return (
          <Bubble
            coordinates={coordinates}
            size={size}
            key={id}
            job={jobs[id]}
          />
        );
      })}
    </div>
  );
};

export default JobListing;
