"use client";

import { ReactNode, useEffect, useState, useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  distance?: string;
  duration?: string;
  rootMargin?: string;
}

export const ScrollAnimation = ({
  children,
  threshold = 0.2,
  className = '',
  distance = '20px',
  duration = '0.6s',
  rootMargin = '0px'
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        transition: `opacity ${duration} ease-out, transform ${duration} ease-out`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};