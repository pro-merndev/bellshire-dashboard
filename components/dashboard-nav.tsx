'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
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
          // const Icon = Icons[item.icon || 'arrowRight'];

          return (
            <div className="" key={idx}>
              <h6
                className="mb-4 border-t pt-6 font-poppins text-sm font-medium text-muted md:w-2/3 2xl:pt-8 2xl:text-base"
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
                      <TooltipTrigger asChild >
                        <Link
                          href={item.disabled ? '/' : item.href}
                          className={cn(
                            'flex items-center gap-2 overflow-hidden rounded-md py-2 text-xs font-medium hover:bg-custom-radial hover:shadow-custom 2xl:text-sm',
                            path === item.href
                              ? 'bg-custom-radial shadow-custom'
                              : 'transparent',
                            item.disabled && 'cursor-not-allowed opacity-80'
                          )}
                          onClick={() => {
                            if (setOpen) setOpen(false);
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={20}
                            height={20}
                            className={`ml-3 size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5`}
                          />
                          {isMobileNav || (!isMinimized && !isMobileNav) ? (
                            <span className="mr-2 truncate">{item.title}</span>
                          ) : (
                            ''
                          )}
                          {item.endIcon && (
                            <Image
                              src={"/chevron-right.svg"}
                              alt={item.title}
                              width={20}
                              height={20}
                              className={`size-3 flex-none ml-auto mr-2`}
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
