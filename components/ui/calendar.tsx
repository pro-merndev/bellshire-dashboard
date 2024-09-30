'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const formatWeekdayName = (weekDay: Date) => {
    if (weekDay) {
      const firstLetter = format(weekDay, 'EEEE', { locale: fr }).charAt(0);
      return firstLetter;
    }
    return ''; // Or return a default value if weekDay is null or undefined
  };

  return (
    <DayPicker
      formatters={{
        formatWeekdayName // Override weekdays with French initials
      }}
      disableNavigation
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        tbody: 'w-full',
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-base xl:text-xl text-left font-poppins font-medium w-full',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex gap-x-3',
        head_cell:
          'text-lightHeading dark:text-calendarScheduleText rounded-md w-5 md:w-4 xl:w-8 font-poppins font-medium text-sm md:text-xs uppercase',
        row: 'flex gap-x-3 w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-xs xl:text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          // buttonVariants({ variant: 'ghost' }),
          'w-5 h-5 md:w-4 md:h-4 xl:h-8 xl:w-8 p-0 font-medium font-poppins aria-selected:opacity-100 hover:rounded-full hover:bg-[#FFFFFF1A] text-xs flex items-center justify-center'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'text-[#FF5F5F]',
        day_today: 'bg-[#FFFFFF1A] text-accent-foreground !rounded-full',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
