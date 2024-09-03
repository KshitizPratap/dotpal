import React from "react";
import classes from "./Navbar.module.css";
import useCommonStore from "../../store/useCommonStore";

const Navbar = () => {
  const { setShowCreateJob, setShowBackdrop } = useCommonStore();
  return (
    <div className={classes.mainContainer}>
      <button>Setting</button>
      <button
        onClick={() => {
          setShowCreateJob(true);
          setShowBackdrop(true);
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Navbar;
