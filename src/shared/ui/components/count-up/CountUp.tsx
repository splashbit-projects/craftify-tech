'use client';
import { useEffect, useRef, useState } from 'react';

export const CountUp = ({
  targetNumber,
  prefix = '',
  suffix = '',
}: {
  targetNumber: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const increment = targetNumber / 50;
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    }
  }, [isVisible, count, targetNumber]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
