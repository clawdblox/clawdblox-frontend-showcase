import { motion, HTMLMotionProps } from 'motion/react';

export const GlassCard = ({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors hover:border-[#05b6f8]/30 hover:bg-white/10 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#05b6f8]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
