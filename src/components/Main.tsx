import React from "react";

interface MainProps {
  data: object | null;
}

export default function Main({ data }: MainProps) {
  return (
    <div className="imgContainer">
      <img src={data?.url} alt="mars-demo-pic" className="bgImage" />
    </div>
  );
}
