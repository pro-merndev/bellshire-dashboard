import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="md:flex items-center justify-between px-4 py-4">
        <div className="hidden pl-6 md:block">
          <h5 className="font-poppins text-white">Hey, Thomas</h5>
          <p className="font-poppins text-sm text-muted">
            Saturday, September 16, 2024
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className={cn('block lg:!hidden')}>
            <MobileSidebar />
          </div>
          <div className="flex items-center gap-2">
            <UserNav />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
