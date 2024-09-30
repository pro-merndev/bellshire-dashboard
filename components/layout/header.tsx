import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Image from 'next/image';
import NotificationIcon from '../svg-icons/notification-icon';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="items-center justify-between px-4 py-4 md:flex lg:py-7">
        <div className="hidden pl-6 md:block">
          <h5 className="font-poppins text-dark-bg dark:text-white">
            Hey, Thomas
          </h5>
          <p className="dark:text-muted font-poppins text-sm text-lightHeading">
            Saturday, September 16, 2024
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className={cn('block md:!hidden')}>
            <MobileSidebar />
          </div>
          <div className="flex items-center gap-2">
            <NotificationIcon className="h-6 w-6 cursor-pointer" />
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
