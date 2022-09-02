import React, { useContext } from "react";
import MyContext from "../../context/useContext";

function Header() {
  const { theme, setTheme } = useContext(MyContext);
    console.log(theme);
  return (
    <div>
      <h1 style={{ color: "white" }}>{ theme && `Ramazan`}</h1>
    </div>
  );
}

export default Header;
