import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter = ({ text, speed = 150, className }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    // Aseguramos que el efecto solo se ejecute una vez.
    if (index.current > 0) return;

    const intervalId = setInterval(() => {
      if (index.current < text.length) {
        setDisplayText((prev) => prev + text[index.current]);
        index.current++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  // Agregamos un cursor parpadeante al final con CSS
  return <span className={`${className} after:content-['|'] after:ml-1 after:animate-blink`}>{displayText}</span>;
};

export default Typewriter;