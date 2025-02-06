import React from "react";


interface UnderlineRightProps {
  text: string
}

const UnderlineRight: React.FC<UnderlineRightProps> = ({
  text,
}) => {
  return (
     <div className="text_underline"> { text }
     </div>

      
  );
};

export default UnderlineRight;
