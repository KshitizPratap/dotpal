import useCommonStore from "../store/useCommonStore";
import classes from "./commonUI.module.css";

export const Conditional = ({ show, children }) => {
  return show ? children : "";
};

export const Backdrop = () => {
  const { showBackdrop, setShowBackdrop } = useCommonStore();
  return (
    showBackdrop && (
      <div
        className={classes.backdrop}
        onClick={() => setShowBackdrop(false)}
      />
    )
  );
};
