import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import {Button} from "./Styles"


export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => darkMode ? theme.dispatch({ type: "LIGHTMODE" }) : theme.dispatch({ type: "DARKMODE" });
  
    return (
      <Button onClick={onClick}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    );
  }