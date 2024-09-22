import CalendarCard from '@/components/cards/calendar-card';
import CurrencyCard from '@/components/cards/currency-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div
              className="gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <CalendarCard />
            </div>
            <div
              className="gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full flex-col justify-between p-5 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/clock.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Heures disponibles
                    </h2>
                  </div>
                  <h4 className="font-poppins text-2xl font-medium md:text-[32px]">
                    10 Heures
                  </h4>
                </div>
                <div className="space-y-4">
                  <Button
                    className="h-auto w-full rounded-full py-3 font-roboto text-white"
                    type="submit"
                    style={{
                      background:
                        'linear-gradient(90deg, #949494 0%, #191919 100%)'
                    }}
                  >
                    Réserver maintenant
                  </Button>
                  <Button
                    className="h-auto w-full rounded-full py-3 font-roboto text-white"
                    type="submit"
                    style={{
                      background:
                        'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
                    }}
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
