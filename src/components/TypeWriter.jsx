import { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed = 55, t }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span style={{ color: t.accent, animation: 'blink 1s infinite' }}>|</span>
    </span>
  );
}