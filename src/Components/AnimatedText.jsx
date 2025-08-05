import React, { useEffect, useRef, useState } from 'react';

export const FadeInOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`fade-in-scroll ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setVisibleChars(i + 1);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 750); // Keep cursor for a bit after finishing
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text, startTyping]);

  const typedPart = text.substring(0, visibleChars);
  const untypedPart = text.substring(visibleChars);

  return (
    <span className={className}>
      <span>{typedPart}</span>
      {showCursor && <span className="animate-pulse">|</span>}
      <span style={{ opacity: 0 }}>{untypedPart}</span>
    </span>
  );
};
