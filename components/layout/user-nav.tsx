'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
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

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="gradiant-bg relative h-auto rounded-[20px] bg-custom-radial py-2 shadow-custom focus-visible:ring-0 px-3"
            style={{}}
          >
            <div className="flex w-full gap-x-2">
              <div>
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={session?.user?.image ?? ''}
                    alt={session?.user?.name ?? ''}
                  />
                  <AvatarFallback>
                    {/* {session?.user?.name?.[0]} */}A
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <h6 className="font-poppins text-base font-medium">Thomas</h6>
                <p className="font-poppins text-xs text-muted">
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
