import { cn } from '@/lib/utils';
import { FC } from 'react';

interface CrownIconProps {
  className?: string;
}

const CrownIcon: FC<CrownIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'size-5 h-4 w-4 flex-none fill-lightHeading 2xl:h-5 2xl:w-5 dark:fill-calendarScheduleText',
        className
      )}
    >
      <path
        d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
        fill="#B9B9B9"
        className='fill-lightHeading dark:fill-calendarScheduleText'
      />
      <path
        d="M20.35 5.52L16.35 8.38C15.82 8.76 15.06 8.53 14.83 7.92L12.94 2.88C12.62 2.01 11.39 2.01 11.07 2.88L9.17001 7.91C8.94001 8.53 8.19001 8.76 7.66001 8.37L3.66001 5.51C2.86001 4.95 1.80001 5.74 2.13001 6.67L6.29001 18.32C6.43001 18.72 6.81001 18.98 7.23001 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67C22.2 5.74 21.14 4.95 20.35 5.52ZM14.5 14.75H9.50001C9.09001 14.75 8.75001 14.41 8.75001 14C8.75001 13.59 9.09001 13.25 9.50001 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
        fill="#B9B9B9"
        className='fill-lightHeading dark:fill-calendarScheduleText'
      />
    </svg>
  );
};

export default CrownIcon;
