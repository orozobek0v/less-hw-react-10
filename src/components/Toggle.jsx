import React from "react";
import { Switch } from "@mui/material";
import { useContext } from "react";
import classes from "./Toggle.module.css";
import MyContext from "../context/useContext";

function Toggle({ children }) {
  const { theme, setTheme } = useContext(MyContext);
  const switchHandler = ({ target }) => {
    const val = target.checked;
    if (val === true) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={theme ? classes.dark : classes.light}>
      <form onSubmit={submitHandler}>
        <Switch
          onClick={switchHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
      </form>
      <>{children}</>
    </div>
  );
}

export default Toggle;
