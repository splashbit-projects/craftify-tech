'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './VerticalGraph.module.scss';

const STEP_DELAY = 20;

export const VerticalGraph = ({ text, percentage }: { text: string; percentage: number }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnimatedRef = useRef(false);

  const startAnimation = useCallback(() => {
    const safePercentage = Math.max(0, Math.min(percentage, 100));

    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }

    setCurrentPercentage(0);

    if (safePercentage === 0) {
      return;
    }

    animationRef.current = setInterval(() => {
      setCurrentPercentage((prev) => {
        const nextValue = Math.min(prev + 1, safePercentage);

        if (nextValue === safePercentage && animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }

        return nextValue;
      });
    }, STEP_DELAY);
  }, [percentage]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <div ref={containerRef} className={styles.percentege_graph}>
      <div className={styles.percentege_graph__content}>
        <div className={styles.percentege_graph__col}>
          <div
            className={styles.percentege_graph__col__item}
            style={{ height: `${currentPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.percentege_graph__value}>{text}</div>
    </div>
  );
};
