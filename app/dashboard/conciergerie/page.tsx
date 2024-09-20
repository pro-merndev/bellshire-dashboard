import ConciergerieCard from '@/components/cards/conciergerie-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { IoIosSend } from 'react-icons/io';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div
            className="gradiant-bg relative space-y-6 rounded-[20px] border-none bg-custom-radial p-4 shadow-custom"
            style={{
              background:
                'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
            }}
          >
            <div className="flex w-full items-center gap-x-2">
              <Image src={'/star.svg'} alt="Tether" width={20} height={20} />
              <h2 className="font-poppins text-sm text-[#B9B9B9]">
                Retrouvez-nous aussi ici !
              </h2>
            </div>
            <div className="grid w-full grid-cols-4 gap-x-10">
              <ConciergerieCard />
              <ConciergerieCard />
              <ConciergerieCard />
              <ConciergerieCard />
            </div>
          </div>
          <div
            className="mt-10 flex h-screen w-full items-end rounded-2xl border-2 border-[#313131] p-4"
            style={{ height: 'calc(100vh - 16rem)' }}
          >
            <div className="relative w-full">
              <Input
                className="z-10 h-auto w-full rounded-xl border-none py-3 font-poppins text-base text-[#8B8B8B]"
                style={{
                  background:
                    'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
                }}
                placeholder="Entrer en contact avec notre service de conciergerie..."
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                <IoIosSend className="text-[#8B8B8B]" size={18} />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
