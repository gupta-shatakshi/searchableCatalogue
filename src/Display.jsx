import React, { useState } from "react";

const Display = (props) => {
  const [text, setText] = useState({ visibility: "hidden" });
  const applyStyle = () => {
    setText({ visibility: "visible" });
  };
  const deleteStyle = () => {
    setText({ visibility: "hidden" });
  };
  return (
    <div
      className="content"
      onMouseEnter={applyStyle}
      onMouseLeave={deleteStyle}
    >
      <img
        className="all-image"
        src={props.image}
        alt={` ${props.name}'s Colour `}
      />
      <h3 className="secondHeading" style={{ visibility: text.visibility }}>
        {`${props.name} ${props.codename}`}
      </h3>
    </div>
  );
};

export default Display;
