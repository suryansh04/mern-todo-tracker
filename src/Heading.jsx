import React from "react";

const Heading = ({ children }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{children}</h1>
    </div>
  );
};

export default Heading;
