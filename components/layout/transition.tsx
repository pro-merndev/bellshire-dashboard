'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function Transition({
  children
}: {
  children: ReactNode;
}) {
  const pathname = usePathname(); // track the current path

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // key ensures animations happen on route change
        initial={{ opacity: 0, y: -50 }} // initial state for animation (fade up)
        animate={{ opacity: 1, y: 0 }} // animate to this state
        exit={{ opacity: 0, y: 50 }} // exit animation (fade down)
        transition={{ duration: 0.5 }} // control animation speed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
