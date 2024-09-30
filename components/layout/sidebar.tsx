'use client';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative hidden h-screen flex-none transition-[width] duration-500 md:block`,
        // `border-r bg-[#121212]`,
        !isMinimized ? 'w-56 2xl:w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pb-2 md:block">
        <Link href={'/dashboard'} className={cn('flex items-center gap-x-1 2xl:gap-x-2')}>
          <Image
            src={'/white-logo.svg'}
            alt="white-logo"
            className="mr-1 2xl:mr-2 w-7 h-7 2xl:h-10 2xl:w-10"
            width={40}
            height={40}
          />
          {!isMinimized && (
            <span className="text-base 2xl:text-xl font-medium dark:text-heading text-dark-bg">
              Bellshire Mansory
            </span>
          )}
        </Link>
      </div>
      <div className="space-y-4">
        <div className="px-3 2xl:py-2">
          <div className="mt-1 space-y-1">
            <DashboardNav navItems={navItems()} />
          </div>
        </div>
      </div>
    </aside>
  );
}
