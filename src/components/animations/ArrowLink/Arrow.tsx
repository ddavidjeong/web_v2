import React from "react";
import "./arrow.scss";

interface ArrowProps {
  text: string;
}

const Arrow: React.FC<ArrowProps> = ({ text }) => {
  return (
    <div>
      <a href="" className="style-4">
        <span> {text} </span>
        <svg viewBox="-2 -3.5 16 20">
          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          {/* 3 19.5 12.5 12.5 3 6.5 */}
        </svg>
      </a>
    </div>
  );
};

export default Arrow;
