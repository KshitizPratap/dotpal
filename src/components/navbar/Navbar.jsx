import React from "react";
import classes from "./Navbar.module.css";
import useCommonStore from "../../store/useCommonStore";

const Navbar = () => {
  const { setShowCreateJob, setShowBackdrop, userCred, setSelectedJobsIndex } =
    useCommonStore();
  return (
    <div className={classes.mainContainer}>
      <button disabled={!userCred.username.length}>Setting</button>
      <button
        disabled={!userCred.username.length}
        onClick={() => {
          setShowCreateJob(true);
          setShowBackdrop(true);
          setSelectedJobsIndex(undefined);
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Navbar;
