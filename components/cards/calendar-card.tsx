import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';

const CalendarCard = () => {
  return (
    <div className="flex h-full w-full justify-between p-5">
      <div className="basis-1/2 space-y-6">
        <div className="flex gap-x-2">
          <Image src={'/calendar.svg'} alt="Tether" width={24} height={24} />
          <h2 className="font-poppins text-sm text-[#B9B9B9]">
            Calendrier des rendez-vous
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <h6 className="mb-1 font-poppins text-xl font-medium">
              {format(new Date(), 'eeee')}
            </h6>
            <h2 className="font-poppins text-4xl font-medium">
              {format(new Date(), 'd')}
            </h2>
          </div>
          <div className="space-y-4">
            <Button className="h-auto space-x-2 rounded-xl bg-custom-radial px-2 py-2 font-roboto text-white">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF444433]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF5F5F]"></span>
              </span>
              <span>[CALL] Vendredi 13 Septembre</span>
            </Button>
            <Button className="h-auto space-x-2 rounded-xl bg-custom-radial px-2 py-2 font-roboto text-white">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#95959533]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#8E8E8E]"></span>
              </span>
              <span>[CALL] Vendredi 20 Septembre</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="basis-1/2 space-y-4">
        <Calendar
          showOutsideDays={false}
          className="[&>div>div]:w-full"
          selected={[new Date(2024, 8, 13), new Date(2024, 8, 20)]}
        />
      </div>
    </div>
  );
};

export default CalendarCard;
