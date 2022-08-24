import React, { Component } from "react";

function Word(props) {
  const { wordsets } = props;

  const { _id, par1 } = wordsets;

  return (
    <div className="p-0">
      <div className="text-base text-black bg-white">{par1}</div>
    </div>
  );
}

export default Word;
