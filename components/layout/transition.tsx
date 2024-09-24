'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function Transition({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname(); // track the current path

  return (
    <div
      key={pathname} // key ensures animations happen on route change
      className={cn(className)}
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}
