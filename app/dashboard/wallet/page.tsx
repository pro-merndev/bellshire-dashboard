'use client';

import CurrencyCard from '@/components/cards/currency-card';
import { AreaGraph } from '@/components/charts/area-graph';
import { PieGraph } from '@/components/charts/pie-graph';
import PageAnimatePresence from '@/components/layout/page-animate-presence';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const currencyData = [
  {
    id: 5,
    title: 'BTC',
    currency: 'USD',
    amount: '60,587',
    rateStatus: true,
    rateAmount: '5.4',
    color: 'bg-[#F9C945]',
    iconBgColor: 'bg-[#F9A54526]',
    icon: <Image src={'/bitcoin.svg'} alt="bitcoin" width={17} height={23} />
  },
  {
    id: 6,
    title: 'ETH',
    currency: 'ETH',
    amount: '12.135',
    rateStatus: false,
    rateAmount: '2.7',
    color: 'bg-[#4563F9]',
    iconBgColor: 'bg-[#748BFF26]',
    icon: <Image src={'/ethereum.svg'} alt="ethereum" width={17} height={23} />
  },
  {
    id: 7,
    title: 'EUROSD',
    currency: 'EUROSD',
    amount: '0.6578',
    rateStatus: true,
    rateAmount: '5.4',
    color: 'bg-[#43C5A2]',
    iconBgColor: 'bg-[#43C5A21A]',
    icon: (
      <div className="relative h-full w-full">
        <Image
          src={'/flag-2.svg'}
          alt="Tether"
          width={16}
          height={16}
          className="absolute right-2 top-2 z-10"
        />
        <Image
          src={'/flag-1.svg'}
          alt="Tether"
          width={16}
          height={16}
          className="absolute bottom-2 left-2 z-10"
        />
      </div>
    )
  },
  {
    id: 8,
    title: 'USDT',
    currency: 'ETH',
    amount: '12.135',
    rateStatus: true,
    rateAmount: '5.4',
    color: 'bg-[#43C5A2]',
    iconBgColor: 'bg-[#43C5A21A]',
    icon: <Image src={'/tether.svg'} alt="Tether" width={23} height={29} />
  }
];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2 pb-20">
        <div className="space-y-4">
          <PageAnimatePresence className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {currencyData.map((currency) => (
              <CurrencyCard
                id={currency.id}
                key={currency.id}
                title={currency.title}
                currency={currency.currency}
                amount={currency.amount}
                rateStatus={currency.rateStatus}
                rateAmount={currency.rateAmount}
                color={currency.color}
                iconBgColor={currency.iconBgColor}
                icon={currency.icon}
              />
            ))}
            <motion.div
              key={'1'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="h-full w-full space-y-10 p-5">
                <div className="space-y-6">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/graph.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Évolution compte
                    </h2>
                  </div>
                </div>
                <div>
                  <AreaGraph />
                </div>
              </div>
            </motion.div>
            <motion.div
              key={'2'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex h-full w-full flex-col gap-x-8 p-5 md:flex-row">
                <div className="flex basis-full flex-col justify-between gap-4 md:basis-1/2">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/favorite-chart.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Top3 détentions du portefeuille
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span className="h-3 w-3 rounded-full bg-[#F3C222]" />
                        <h5 className="font-poppins text-base font-medium text-[#A1A1A1]">
                          BTC
                        </h5>
                      </div>
                      <h5 className="font-poppins text-base font-medium text-[#9291A5]">
                        $34,540
                      </h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span className="h-3 w-3 rounded-full bg-[#4563F9]" />
                        <h5 className="font-poppins text-base font-medium text-[#A1A1A1]">
                          ETH
                        </h5>
                      </div>
                      <h5 className="font-poppins text-base font-medium text-[#9291A5]">
                        $157,000
                      </h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span className="h-3 w-3 rounded-full bg-[#F3C222]" />
                        <h5 className="font-poppins text-base font-medium text-[#A1A1A1]">
                          BTC
                        </h5>
                      </div>
                      <h5 className="font-poppins text-base font-medium text-[#9291A5]">
                        $34,540
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="basis-full md:basis-1/2">
                  <PieGraph />
                </div>
              </div>
            </motion.div>
            <motion.div
              key={'3'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full flex-col justify-between gap-4 p-5 md:flex-row">
                <div className="basis-1/2 space-y-6">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/empty-wallet.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      balance actuel
                    </h2>
                  </div>
                  <h4 className="font-poppins text-2xl font-medium md:text-[32px]">
                    $ 314.478,09{' '}
                    <span className="text-base font-normal">USD</span>
                  </h4>
                </div>
                <div className="basis-1/2 space-y-4">
                  <Button
                    variant={'default'}
                    className="h-auto w-full  py-3 font-roboto text-white"
                    // style={{
                    //   background:
                    //     'linear-gradient(90deg, #949494 0%, #191919 100%)'
                    // }}
                  >
                    Dépôt
                  </Button>
                  <Button
                    variant={'secondary'}
                    className="h-auto w-full  py-3 font-roboto text-white"
                    // style={{
                    //   background:
                    //     'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
                    // }}
                  >
                    Retrait
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key={'4'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full flex-col justify-between gap-4 p-5 md:flex-row">
                <div className="basis-1/2 space-y-6">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/empty-wallet.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Balance disponible
                    </h2>
                  </div>
                  <h4 className="font-poppins text-2xl font-medium md:text-[32px]">
                    $ 112.988,12{' '}
                    <span className="text-base font-normal">USD</span>
                  </h4>
                </div>
                <div className="basis-1/2 space-y-4">
                  <Button
                    variant={'default'}
                    className="h-auto w-full rounded-xl py-3 font-roboto text-white"
                    // style={{
                    //   background:
                    //     'linear-gradient(90deg, #949494 0%, #191919 100%)'
                    // }}
                  >
                    Dépôt
                  </Button>
                  <Button
                    variant={'secondary'}
                    className="h-auto w-full rounded-xl py-3 font-roboto text-white"
                    // style={{
                    //   background:
                    //     'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
                    // }}
                  >
                    Retrait
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key={'5'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="w-full p-5">
                <div>
                  <div className="mb-4 flex items-center gap-x-2">
                    <Image
                      src={'/notification-status.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Historique des dépôts
                    </h2>
                  </div>
                  <p className="font-poppins text-sm font-medium text-[#B9B9B9]">
                    SEPTEMBRE 2024
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div
                        className={cn(
                          `flex h-10 w-10 items-center justify-center rounded-full bg-[#748BFF26]`
                        )}
                      >
                        <Image
                          src={'/ethereum.svg'}
                          alt="ethereum"
                          width={17}
                          height={23}
                        />
                      </div>
                      <div>
                        <h5 className="font-poppins text-base font-medium text-white">
                          ETH déposé
                        </h5>
                        <p className="font-poppins text-xs font-medium text-[#B9B9B9]">
                          14 septembre 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins text-sm text-[#1DCA93]">
                        +99€
                      </p>
                      <p className="font-poppins text-sm text-[#B9B9B9]">
                        +0.04 ETH
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div
                        className={cn(
                          `flex h-10 w-10 items-center justify-center rounded-full bg-[#F9A54526] `
                        )}
                      >
                        <Image
                          src={'/bitcoin.svg'}
                          alt="bitcoin"
                          width={17}
                          height={23}
                        />
                      </div>
                      <div>
                        <h5 className="font-poppins text-base font-medium text-white">
                          BTC déposé
                        </h5>
                        <p className="font-poppins text-xs font-medium text-[#B9B9B9]">
                          04 septembre 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins text-sm text-[#1DCA93]">
                        +99€
                      </p>
                      <p className="font-poppins text-sm text-[#B9B9B9]">
                        +0.04 BTC
                      </p>
                    </div>
                  </div>
                  <p className="mt-10 font-poppins text-sm font-medium text-[#B9B9B9]">
                    AOUT 2024
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              key={'6'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              layout
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="w-full p-5">
                <div>
                  <div className="mb-4 flex items-center gap-x-2">
                    <Image
                      src={'/notification-status.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Historique des dépôts
                    </h2>
                  </div>
                  <p className="font-poppins text-sm font-medium text-[#B9B9B9]">
                    SEPTEMBRE 2024
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div
                        className={cn(
                          `flex h-10 w-10 items-center justify-center rounded-full bg-[#748BFF26]`
                        )}
                      >
                        <Image
                          src={'/ethereum.svg'}
                          alt="ethereum"
                          width={17}
                          height={23}
                        />
                      </div>
                      <div>
                        <h5 className="font-poppins text-base font-medium text-white">
                          ETH déposé
                        </h5>
                        <p className="font-poppins text-xs font-medium text-[#B9B9B9]">
                          14 septembre 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins text-sm text-[#FF6E6E]">
                        +99€
                      </p>
                      <p className="font-poppins text-sm text-[#B9B9B9]">
                        +0.04 ETH
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div
                        className={cn(
                          `flex h-10 w-10 items-center justify-center rounded-full bg-[#F9A54526] `
                        )}
                      >
                        <Image
                          src={'/bitcoin.svg'}
                          alt="bitcoin"
                          width={17}
                          height={23}
                        />
                      </div>
                      <div>
                        <h5 className="font-poppins text-base font-medium text-white">
                          BTC déposé
                        </h5>
                        <p className="font-poppins text-xs font-medium text-[#B9B9B9]">
                          04 septembre 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins text-sm text-[#FF6E6E]">
                        +99€
                      </p>
                      <p className="font-poppins text-sm text-[#B9B9B9]">
                        +0.04 BTC
                      </p>
                    </div>
                  </div>
                  <p className="mt-10 font-poppins text-sm font-medium text-[#B9B9B9]">
                    AOUT 2024
                  </p>
                </div>
              </div>
            </motion.div>
          </PageAnimatePresence>
        </div>
      </div>
    </PageContainer>
  );
}
