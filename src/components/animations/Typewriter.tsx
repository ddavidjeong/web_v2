import React, { useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps extends PropsWithChildren<{}> {}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ children }) => {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);

  // Function to recursively extract text from React node children
  const extractText = (children: ReactNode): string => {
    let text = '';
    React.Children.forEach(children, child => {
      if (typeof child === 'string') {
        text += child;
      } else if (React.isValidElement(child) && child.props) {
        text += extractText(child.props.children);
      }
    });
    return text;
  };

  useEffect(() => {
    let index = 0;
    let textIndex = 0;
    let timer: number;

    const textBlocks: string[] = React.Children.map(children, child => extractText(child))?.filter(text => text.length > 0) ?? [];

    const typeNextChar = () => {
      if (textIndex < textBlocks.length) {
        const text = textBlocks[textIndex];
        if (index < text.length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[textIndex] = (newTexts[textIndex] || '') + text.charAt(index);
            return newTexts;
          });
          index++;
        } else {
          textIndex++;
          index = 0;
        }
        timer = window.setTimeout(typeNextChar, 100);
      }
    };

    typeNextChar();

    return () => {
      window.clearTimeout(timer);
    };
  }, [children]);  // Dependency on children to re-run when children change

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedTexts.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </motion.div>
  );
};

export default TypewriterEffect;
