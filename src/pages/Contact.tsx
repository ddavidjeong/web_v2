import React from "react";
import { ThemeProvider } from "../components/ThemeContext";
import { Mask } from "../components/Mask";

const Contact = () => {
  return (
    <ThemeProvider>
      <Mask></Mask>
      <div> About Me</div>
    </ThemeProvider>
  );
};

export default Contact;
