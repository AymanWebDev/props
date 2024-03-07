import React from "react";

const SingleUser = (props) => {
  const name = props.Ayman;
  return (
    <div>
      <span>{props.id}</span>
      <h1>Single user Name: {name}</h1>
    </div>
  );
};

export default SingleUser;
