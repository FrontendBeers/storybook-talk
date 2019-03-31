import { useEffect, useRef, useState } from 'react';
import COLORS from './Colors';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export function useBlink(initialColor = COLORS.PINK, delay = 600) {
  const [color, setColor] = useState(initialColor);

  useInterval(() => {
    setColor(color === initialColor ? COLORS.BLACK : initialColor);
  }, delay);

  return color;
}

export default { useInterval, useBlink };
