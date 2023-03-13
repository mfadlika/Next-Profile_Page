import React from "react";

export default function Eyes() {
  return (
    <div className="eyes-box scale-50">
      <div className="eyes-holder scale-150">
        <svg className="eyes" height="400" width="300">
          <rect
            className="rect1"
            width="20"
            height="64"
            x="30"
            y="95"
            rx="8"
            style={{ fill: "rgb(255, 255, 255)", stroke: "rgb(0,0,0)" }}
          />
          <rect
            className="rect2"
            width="20"
            height="64"
            x="140"
            y="70"
            rx="8"
            style={{ fill: "rgb(255, 255, 255)", stroke: "rgb(0,0,0)" }}
          />
          <rect
            className="rect3"
            width="20"
            height="64"
            x="250"
            y="95"
            rx="8"
            style={{ fill: "rgb(255, 255, 255)", stroke: "rgb(0,0,0)" }}
          />
          <ellipse
            cx="150"
            cy="250"
            rx="137.5"
            ry="87.5"
            style={{ fill: "white", stroke: "black", strokeWidth: "2" }}
          />
          <circle className="circle" cx="150" cy="250" r="50" />
        </svg>
      </div>
    </div>
  );
}
