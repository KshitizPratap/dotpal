import React from "react";
import classes from "./jobListing.module.css";
import useCommonStore from "../../../store/useCommonStore";
import Bubble from "../bubble/Bubble";

const JobListing = () => {
  const { jobs } = useCommonStore();

  const randomBubbleGenerator = () => {
    const size = Math.random() * 100 + 100;
    const x = Math.random() * 70 + 10;
    const y = Math.random() * 70 + 10;

    return {
      coordinates: { x, y },
      size,
    };
  };

  return (
    <div className={classes.mainContainer}>
      {jobs.map((job, index) => {
        const { coordinates, size } = randomBubbleGenerator();
        return (
          <Bubble coordinates={coordinates} size={size} key={index} job={job} />
        );
      })}
    </div>
  );
};

export default JobListing;
