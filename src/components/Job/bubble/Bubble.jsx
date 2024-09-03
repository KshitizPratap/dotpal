import React from "react";
import classes from "./bubble.module.css";
import BubbleImg from "../../../asset/bubble.png";

const Bubble = ({ coordinates, size }) => {
  return (
    <div
      className={classes.mainContainer}
      style={{
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`,
      }}
    >
      <img
        src={BubbleImg}
        style={{
          "--size": `${size}px`,
        }}
      />
    </div>
  );
};

export default Bubble;
