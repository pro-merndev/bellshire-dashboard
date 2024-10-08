import { cn } from '@/lib/utils';
import { FC } from 'react';

interface StarIconProps {
  className?: string;
}

const StarIcon: FC<StarIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5', className)}
    >
      <path
        d="M15.3899 5.20997L16.7999 8.02997C16.9899 8.41997 17.4999 8.78997 17.9299 8.86997L20.4799 9.28997C22.1099 9.55997 22.4899 10.74 21.3199 11.92L19.3299 13.91C18.9999 14.24 18.8099 14.89 18.9199 15.36L19.4899 17.82C19.9399 19.76 18.8999 20.52 17.1899 19.5L14.7999 18.08C14.3699 17.82 13.6499 17.82 13.2199 18.08L10.8299 19.5C9.11994 20.51 8.07994 19.76 8.52994 17.82L9.09994 15.36C9.18994 14.88 8.99994 14.23 8.66994 13.9L6.67994 11.91C5.50994 10.74 5.88994 9.55997 7.51994 9.27997L10.0699 8.85997C10.4999 8.78997 11.0099 8.40997 11.1999 8.01997L12.6099 5.19997C13.3799 3.67997 14.6199 3.67997 15.3899 5.20997Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default StarIcon;
