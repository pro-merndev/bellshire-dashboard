import { format } from 'date-fns';
import Image from 'next/image';
import { Calendar } from '../ui/calendar';
import CalendarIcon from '../svg-icons/calendar-icon';
import { Calendar2 } from '../ui/calendar2';

const CalendarCard = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between p-5 md:flex-row">
      <div className="basis-1/2 space-y-6">
        <div className="flex gap-x-2">
          <CalendarIcon className="md:h-5 md:w-5 xl:h-6 xl:w-6"/>
          <h2 className="font-poppins text-xs text-lightHeading md:text-[8px] md:leading-3 xl:text-sm xl:leading-5  dark:text-calendarScheduleText">
            Calendrier des rendez-vous
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <h6 className="mb-1 font-poppins text-base font-medium text-lightHeading lg:text-xs xl:text-xl dark:text-white">
              {format(new Date(), 'eeee')}
            </h6>
            <h2 className="font-poppins text-xl font-medium text-lightHeading lg:text-base xl:text-4xl dark:text-white">
              {format(new Date(), 'd')}
            </h2>
          </div>
          <div className="space-y-4">
            <div className="inline-flex h-auto space-x-2 rounded-xl bg-custom-radial px-2 py-2 font-roboto text-lightHeading dark:text-calendarScheduleText">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF444433]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF5F5F]"></span>
              </span>
              <span className="text-[10px] md:leading-3 lg:text-[8px] xl:text-sm xl:leading-5">
                [CALL] Vendredi 13 Septembre
              </span>
            </div>
            <div className="inline-flex h-auto space-x-2 rounded-xl bg-custom-radial px-2 py-2 font-roboto text-lightHeading dark:text-calendarScheduleText">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#95959533]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#8E8E8E]"></span>
              </span>
              <span className="text-[10px] md:leading-3 lg:text-[8px]  xl:text-sm xl:leading-5">
                [CALL] Vendredi 20 Septembre
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 space-y-4">
        <Calendar
          showOutsideDays={false}
          className="[&>div>div]:w-full"
          selected={[new Date(2024, 9, 11), new Date(2024, 9, 18)]}
        />
        {/* <Calendar2
          showOutsideDays={false}
          className="[&>div>div]:w-full"
          selected={[new Date(2024, 8, 13), new Date(2024, 8, 20)]}
        /> */}
      </div>
    </div>
  );
};

export default CalendarCard;
