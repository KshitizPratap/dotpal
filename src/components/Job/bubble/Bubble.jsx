import React from "react";
import classes from "./bubble.module.css";
import useCommonStore from "../../../store/useCommonStore";

const Bubble = ({ coordinates, size, job }) => {
  const { setShowCreateJob, setSelectedJobsIndex, setShowBackdrop } =
    useCommonStore();
  return (
    <div
      className={classes.mainContainer}
      onClick={() => {
        setShowCreateJob(true);
        setSelectedJobsIndex(job.id);
        setShowBackdrop(true);
      }}
      style={{
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`,
        "--size": `${size}px`,
      }}
    >
      <p>{job.name}</p>
    </div>
  );
};

export default Bubble;
