import CalendarCard from '@/components/cards/calendar-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import ClockIcon from '@/components/svg-icons/clock-icon';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
              <CalendarCard />
            </div>
            <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
              <div className="flex h-full w-full flex-col justify-between gap-4 p-5">
                <div className="space-y-6">
                  <div className="flex items-center gap-x-2">
                    <ClockIcon />
                    <h2 className="font-poppins text-sm text-lightHeading dark:text-calendarScheduleText">
                      Heures disponibles
                    </h2>
                  </div>
                  <h4 className="font-poppins text-2xl font-medium text-lightHeading md:text-[32px] dark:text-white">
                    10 Heures
                  </h4>
                </div>
                <div className="space-y-4">
                  <Button
                    variant={'default'}
                    className="h-auto w-full rounded-full py-3 font-roboto text-white"
                  >
                    Réserver maintenant
                  </Button>
                  <Button
                    variant={'secondary'}
                    className="h-auto w-full rounded-full py-3 font-roboto text-lightHeading dark:text-white"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
