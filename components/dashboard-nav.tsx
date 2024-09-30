'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

interface DashboardNavProps {
  navItems: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  navItems,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  if (!navItems?.length) {
    return null;
  }

  // console.log('isActive', isMobileNav, isMinimized);

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {navItems.map((navItem, idx) => {
          return (
            <div key={idx}>
              <h6
                className={cn(
                  'mb-4 border-t pt-4 font-poppins text-sm font-medium text-lightHeading 2xl:text-base dark:text-sidebarHeading',
                  idx === 0 ? 'w-full' : 'md:w-2/3'
                )}
                style={{
                  borderImage:
                    'linear-gradient(270deg, #0E0E0E 0%, #222222 100%) 1'
                }}
              >
                {navItem.headTitle}
              </h6>
              {navItem.items.map((item, index) => {
                return (
                  item.href && (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.disabled ? '/' : item.href}
                          className={cn(
                            'flex items-center gap-2 overflow-hidden rounded-md py-2 text-xs font-medium 2xl:text-sm dark:hover:bg-custom-radial dark:hover:shadow-custom [&_*]:fill-lightHeading [&_*]:text-lightHeading dark:[&_*]:fill-sidebarNavlinkNormal dark:[&_*]:text-sidebarNavlinkNormal',
                            path === item.href
                              ? 'bg-custom-radial-muted shadow-custom  dark:bg-custom-radial [&_*]:fill-sidebarNavlinkActive [&_*]:text-sidebarNavlinkActive dark:[&_*]:fill-white dark:[&_*]:text-white'
                              : 'transparent',
                            item.disabled && 'cursor-not-allowed opacity-80'
                          )}
                          onClick={() => {
                            if (setOpen) setOpen(false);
                          }}
                        >
                          {item.icon}
                          {isMobileNav || (!isMinimized && !isMobileNav) ? (
                            <span className="mr-2 truncate text-[#8B8B8B]">
                              {item.title}
                            </span>
                          ) : (
                            ''
                          )}
                          {item.endIcon && (
                            <FaChevronRight
                              width={24}
                              height={24}
                              className={`ml-auto mr-2 size-3 flex-none`}
                            />
                          )}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        side="right"
                        sideOffset={8}
                        className={!isMinimized ? 'hidden' : 'inline-block'}
                      >
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  )
                );
              })}
            </div>
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
