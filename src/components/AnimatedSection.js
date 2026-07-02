import { motion, useReducedMotion } from "motion/react";

const directionOffsets = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: -42, y: 0 },
  right: { x: 42, y: 0 },
  none: { x: 0, y: 0 },
};

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  amount = 0.18,
  once = true,
  as = "div",
  duration = 0.82,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as;
  const offset = shouldReduceMotion ? directionOffsets.none : directionOffsets[direction] || directionOffsets.up;

  return (
    <Component
      {...props}
      className={["overflow-x-clip", className].filter(Boolean).join(" ")}>
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, x: offset.x, y: offset.y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once, amount }}
        transition={{ duration: shouldReduceMotion ? 0.01 : duration, delay, ease: [0.16, 1, 0.3, 1] }}>
        {children}
      </motion.div>
    </Component>
  );
}
