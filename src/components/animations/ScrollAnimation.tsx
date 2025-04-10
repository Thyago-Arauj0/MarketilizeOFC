"use client";

import { ReactNode, useEffect, useState, useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  animateIn?: string;
  animateOut?: string;
  rootMargin?: string;
}

export const ScrollAnimation = ({
  children,
  threshold = 0.2,
  className = '',
  animateIn = 'animate-fade-in-up',
  animateOut = '',
  rootMargin = '0px'
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const prevYRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.y;
        const isScrollingUp = currentY > prevYRef.current;
        prevYRef.current = currentY;

        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          if (animateOut && isScrollingUp) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, rootMargin, animateOut]);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? animateIn : animateOut}`}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
    >
      {children}
    </div>
  );
};