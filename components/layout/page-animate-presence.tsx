'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import FrozenRoute from '../box/fronzen-route';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const PageAnimatePresence = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const paths = pathname.split('/');
  const path = paths[paths.length - 1];

  return (
    <AnimatePresence mode="wait">
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}
      <motion.div key={path} className={cn(className)}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
