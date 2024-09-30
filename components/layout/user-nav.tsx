'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
export function UserNav() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="dark:gradiant-bg relative h-auto rounded-2xl bg-custom-radial-light px-3 py-1 focus-visible:ring-0 dark:bg-custom-radial dark:shadow-custom">
            <div className="flex items-center w-full gap-x-2">
              <div>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={(session as any)?.user?.image ?? ''}
                    alt={(session as any)?.user?.name ?? ''}
                  />
                  <AvatarFallback className='text-white'>
                    {/* {session?.user?.name?.[0]} */}A
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <h6 className="font-poppins text-base font-medium text-lightHeading dark:text-white">
                  Thomas
                </h6>
                <p className="font-poppins text-xs text-lightHeading dark:text-muted">
                  38.0 h d’appel restant
                </p>
              </div>
              <div>
                <Image
                  src="/chevron-up-down.svg"
                  alt="Icon"
                  width={12}
                  height={35}
                />
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {/* <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
