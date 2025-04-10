"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface DisplayedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  id?: string
  onComplete?: () => void
  delay?: number
  speed?: number
}

export default function DisplayedText({
  text,
  className = "",
  style = {},
  id = "",
  onComplete,
  delay = 0,
  speed = 50,
}: DisplayedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        startTyping()
      }, delay)
      return () => clearTimeout(delayTimeout)
    } else {
      startTyping()
    }
  }, [])

  const startTyping = () => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (onComplete && currentIndex === text.length) {
      onComplete()
    }
  }

  useEffect(() => {
    startTyping()
  }, [currentIndex])

  return (
    <div className={className} style={style} id={id}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}


// "use client";

// import { useEffect, useState, useRef } from "react";

// type DisplayedTextProps = {
//   text: string;
//   onComplete?: () => void;
// } & React.HTMLAttributes<HTMLParagraphElement>;

// export default function DisplayedText({ text, onComplete, ...rest }: DisplayedTextProps) {
//   const [displayedArray, setDisplayedArray] = useState<string[]>([]);
//   const hasStarted = useRef(false); // garante que só roda uma vez

//   useEffect(() => {
//     if (hasStarted.current) return;
//     hasStarted.current = true;

//     const chars = text.split("");
//     setDisplayedArray([]); 

//     let currentIndex = -1; 

//     const interval = setInterval(() => {
//       if (currentIndex === chars.length) {
//         clearInterval(interval);
//         onComplete?.();
//         return;
//       }

//       setDisplayedArray((prev) => [...prev, chars[currentIndex]]);
//       currentIndex++;
//     }, 70);

//     return () => clearInterval(interval);
//   }, [text, onComplete]);

//   return (
//     <p {...rest} className={rest.className}>
//       {displayedArray.join("")}
//     </p>
//   );
// }
