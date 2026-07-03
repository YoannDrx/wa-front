import { motion, useReducedMotion } from "motion/react";

export default function RevealGroup({ children, className = "", childClassName = "", as = "div", stagger = 0.08, distance = 24 }) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: shouldReduceMotion ? 0 : stagger } },
      }}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              className={childClassName}
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : distance, scale: shouldReduceMotion ? 1 : 0.985 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: shouldReduceMotion ? 0.01 : 0.68, ease: [0.16, 1, 0.3, 1] } },
              }}>
              {child}
            </motion.div>
          ))
        : children}
    </Component>
  );
}
