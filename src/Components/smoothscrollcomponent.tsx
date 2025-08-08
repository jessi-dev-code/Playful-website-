import { useRef, useState, useCallback, useLayoutEffect } from "react";
import type { ReactNode } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Resize observer
  const resizePageHeight = useCallback(() => {
    if (scrollRef.current) {
      const height = scrollRef.current.scrollHeight;
      setPageHeight(height);
    }
  }, []);

  useLayoutEffect(() => {
    resizePageHeight(); // initial call
    const resizeObserver = new ResizeObserver(resizePageHeight);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const spring = useSpring(transform, {
    damping: 30,
    mass: 0.2,
    stiffness: 80,
  });

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} aria-hidden />
    </>
  );
};

export default SmoothScroll;
