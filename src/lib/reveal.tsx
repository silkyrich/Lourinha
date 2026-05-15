import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const defaults: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}

export function Reveal({
  children,
  delay = 0,
  variants = defaults,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  variants?: Variants
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'span' | 'li'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
