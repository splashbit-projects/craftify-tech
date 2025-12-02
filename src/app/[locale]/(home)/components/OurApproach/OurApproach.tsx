'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './OurApproach.module.scss';

export const OurApproach = () => {
  const t = useTranslations('ourApproach');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      icon: '/images/home/our-approach/icon-1.svg',
      title: t('itemTitle1', { fallback: 'Assess' }),
      text: t('itemText1', {
        fallback:
          'We evaluate your infrastructure, workflows, and governance posture to pinpoint risk and complexity.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-2.svg',
      title: t('itemTitle2', { fallback: 'Assemble' }),
      text: t('itemText2', {
        fallback:
          'We bring in domain specialists – architects, engineers, analysts – matched precisely to your challenge.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-3.svg',
      title: t('itemTitle3', { fallback: 'Integrate' }),
      text: t('itemText3', {
        fallback:
          'We align people, processes, and technology into a unified, resilient security architecture.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-4.svg',
      title: t('itemTitle4', { fallback: 'Validate' }),
      text: t('itemText4', {
        fallback:
          'We measure outcomes against recognized frameworks to ensure lasting compliance and performance.',
      }),
    },
  ];

  const texts = [
    t('text1', {
      fallback: "We don't sell predefined packages — we assemble the exact expertise your case demands.",
    }),
    t('text2', {
      fallback: 'One-time and ongoing solutions — built to solve real problems, not fit into templates.',
    }),
    t('text3', {
      fallback:
        'Specialized cybersecurity expertise that is accessible, measurable, and tailored to your environment.',
    }),
  ];

  useEffect(() => {
    const stickyTop = 80; // top value from CSS

    const handleScroll = () => {
      if (!containerRef.current) return;

      // Check each image to see which one is currently at the sticky position
      imageRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // Check if image is at sticky position (top: 80px)
          // Account for the fact that sticky elements stick at top: 80px
          if (rect.top <= stickyTop + 30 && rect.top >= stickyTop - 30) {
            setActiveImageIndex(index);
          }
        }
      });
    };

    // Use IntersectionObserver with custom logic for sticky elements
    const observers = imageRefs.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              // Check if the image is at or near the sticky position
              if (rect.top <= stickyTop + 50 && rect.top >= stickyTop - 50) {
                setActiveImageIndex(index);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: `-${stickyTop}px 0px -50% 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(ref.current);
      return observer;
    });

    // Scroll listener for more precise tracking
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <section className={styles.our_approach}>
      <div className={'_container'}>
        <div className={styles.our_approach__content} ref={containerRef}>
          <div className={styles.our_approach__col_1}>
            <div ref={imageRefs[0]}>
              <Image
                src="/images/home/our-approach/our-approach-1.png"
                alt="our approach bg"
                width={555}
                height={655}
              />
            </div>
            <div ref={imageRefs[1]}>
              <Image
                src="/images/home/our-approach/our-approach-2.png"
                alt="our approach bg"
                width={555}
                height={655}
              />
            </div>
            <div ref={imageRefs[2]}>
              <Image
                src="/images/home/our-approach/our-approach-3.png"
                alt="our approach bg"
                width={555}
                height={655}
              />
            </div>
          </div>
          <div className={styles.our_approach__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', { fallback: 'Our Approach' })}
            </motion.h2>
            <div className={styles.textContainer}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeImageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.text}
                >
                  {texts[activeImageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className={styles.our_approach__howWeWork}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('howWeWorkTitle', { fallback: 'How We Work' })}
          </motion.h2>
        </div>
        <div className={styles.our_approach__items}>
          {items.map((item) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.our_approach__item}
              key={item.title}
            >
              <Image
                src="/images/topLeft.svg"
                alt="top left corner"
                width={20}
                height={20}
                className={styles.top_left}
              />
              <Image
                src="/images/topRight.svg"
                alt="top right corner"
                width={20}
                height={20}
                className={styles.top_right}
              />
              <Image
                src="/images/bottomLeft.svg"
                alt="bottom left corner"
                width={20}
                height={20}
                className={styles.bottom_left}
              />
              <Image
                src="/images/bottomRight.svg"
                alt="bottom right corner"
                width={20}
                height={20}
                className={styles.bottom_right}
              />
              <Image src={item.icon} alt={item.title} width={32} height={32} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
