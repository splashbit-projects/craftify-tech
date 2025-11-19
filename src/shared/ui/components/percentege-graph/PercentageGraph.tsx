'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './PercentageGraph.module.scss';

const TOTAL_ITEMS = 20;
const STEP_DELAY = 80;

export const PercentageGraph = ({ percentage }: { percentage: number }) => {
  const [activeItems, setActiveItems] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnimatedRef = useRef(false);

  const startAnimation = useCallback(() => {
    const safePercentage = Math.max(0, Math.min(percentage, 100));
    const targetItems = Math.round((safePercentage / 100) * TOTAL_ITEMS);

    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }

    setActiveItems(0);

    if (targetItems === 0) {
      return;
    }

    animationRef.current = setInterval(() => {
      setActiveItems((prev) => {
        const nextValue = Math.min(prev + 1, targetItems);

        if (nextValue === targetItems && animationRef.current) {
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
      <div className={styles.percentege_graph__col}>
        {Array.from({ length: TOTAL_ITEMS }).map((_, index) => {
          const reverseIndex = TOTAL_ITEMS - index;
          const isActive = reverseIndex <= activeItems;

          return (
            <div
              key={index}
              className={`${styles.percentege_graph__col__item} ${
                isActive ? styles['active'] : ''
              }`}
            ></div>
          );
        })}
      </div>
      <div className={styles.percentege_graph__value}>{percentage}%</div>
    </div>
  );
};
