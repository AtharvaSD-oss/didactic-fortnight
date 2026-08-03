import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export const useCounter = (targetNumber, duration = 1500, ref) => {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const steps = 50;
      const stepTime = duration / steps;
      const increment = targetNumber / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber, duration]);

  return count;
};
