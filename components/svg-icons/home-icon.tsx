import { cn } from '@/lib/utils';
import { FC } from 'react';

interface HomeIconProps {
  className?: string;
}

const HomeIcon: FC<HomeIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'ml-3 size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5',
        className
      )}
    >
      <path
        d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.78999 2.92L3.77999 6.83C2.77999 7.61 1.98999 9.21 1.98999 10.47V17.37C1.98999 19.92 4.05999 22 6.60999 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM13 18.75C12 18.75 12.41 18.75 12 18.75C11.59 18.75 11.5 18.75 11 18.75H9C9 18.34 9 16 12 16C15 16 15 18.34 15 18.75H13Z"
        fill="#8B8B8B"
      />
    </svg>
  );
};

export default HomeIcon;
