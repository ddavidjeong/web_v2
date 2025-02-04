import React from "react";
import './Underline.css'


interface UnderlineProps {
  text: string
}

const Underline: React.FC<UnderlineProps> = ({
  text,
}) => {
  return (
     <div className="text_underline"> { text }
     </div>

      
  );
};

export default Underline;
