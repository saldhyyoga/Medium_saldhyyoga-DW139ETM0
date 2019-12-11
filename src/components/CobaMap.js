import React from "react";

export default function CobaMap() {
  const elements = ["one", "two", "three"];
  return (
    <div>
      <ul>
        {elements.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
