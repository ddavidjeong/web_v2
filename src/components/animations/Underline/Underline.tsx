import React from "react";
import "./Underline.css"; // for hover effects


interface TextSlideInProps {
  text: string
}

const Underline: React.FC<TextSlideInProps> = ({
  text,
}) => {
  return (
    <div className="patterns">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
      </pattern>  
        <style>
     @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style>
      
    </defs>
              
    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
     
    
   
 <text x="50%" y="60%"  text-anchor="middle"  >
   Hello
 </text>
 </svg>
</div>
      
  );
};

export default Underline;
