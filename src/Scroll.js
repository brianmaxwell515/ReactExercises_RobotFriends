import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
  return (
    <div className="scrollbar" id="style-1">
      {props.children}
    </div>
  );
};

export default Scroll;
