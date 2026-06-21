import { memo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

type AnimationVariant = "fadeIn" | "blurInUp" | "slideUp";

const itemVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  },
};

interface TextAnimateProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "p" | "span";
  by?: "word" | "character";
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

function TextAnimateBase({
  children,
  delay = 0,
  duration = 0.3,
  className,
  segmentClassName,
  as: Tag = "h1",
  startOnView = true,
  once = true,
  by = "word",
  animation = "blurInUp",
}: TextAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const shouldAnimate = !startOnView || isInView;

  const segments =
    by === "character" ? children.split("") : children.split(/(\s+)/);

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      className={cn("inline-flex flex-wrap justify-center", className)}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: duration / Math.max(segments.length, 1),
          },
        },
      }}
      aria-label={children}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${segment}-${i}`}
          variants={itemVariants[animation]}
          className={cn(
            "inline-block whitespace-pre",
            segmentClassName
          )}
          aria-hidden={segment.trim() === ""}
        >
          {segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export const TextAnimate = memo(TextAnimateBase);
