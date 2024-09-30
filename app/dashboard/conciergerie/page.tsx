import ConciergerieCard from '@/components/cards/conciergerie-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import StarIcon from '@/components/svg-icons/star-icon';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { IoIosSend } from 'react-icons/io';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="dark:gradiant-bg relative space-y-6 rounded-[20px] border-none p-4 dark:bg-custom-radial dark:shadow-custom">
            <div className="flex w-full items-center gap-x-2">
              <StarIcon />
              <h2 className="font-poppins text-xs text-lightHeading lg:text-sm dark:text-calendarScheduleText">
                Retrouvez-nous aussi ici !
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              <ConciergerieCard />
              <ConciergerieCard />
              <ConciergerieCard />
              <ConciergerieCard />
            </div>
          </div>
          <div className="mt-10 flex h-[calc(100vh-28rem)] w-full items-end rounded-2xl bg-custom-radial-light p-4 dark:border-2 dark:border-[#313131] dark:bg-none">
            <div className="relative w-full">
              <Input
                className="z-10 h-auto w-full rounded-xl border-none bg-primary-input-light-radial py-3 font-poppins text-[10px] text-[#4B4B4B] md:text-sm lg:text-base dark:bg-custom-radial dark:text-sidebarNavlinkNormal"
                placeholder="Entrer en contact avec notre service de conciergerie..."
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer">
                <IoIosSend className="h-3 w-3  fill-[#4B4B4B] lg:h-4  lg:w-4 dark:fill-sidebarNavlinkNormal" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
