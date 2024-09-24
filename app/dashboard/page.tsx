'use client';
import { motion } from 'framer-motion';

import CalendarCard from '@/components/cards/calendar-card';
import CurrencyCard from '@/components/cards/currency-card';
import HeuresCard from '@/components/cards/heures-card';
import MembershipCard from '@/components/cards/membership-card';
import NewsBellshireCard from '@/components/cards/news-bellshire-card';
import NewsTraditionalCard from '@/components/cards/news-traditional-card';
import NewsTwitterCard from '@/components/cards/news-twitter-card';
import PageAnimatePresence from '@/components/layout/page-animate-presence';
import PageContainer from '@/components/layout/page-container';
import Image from 'next/image';

const currencyData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
      <div className="pb-20">
        <PageAnimatePresence className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 xl:gap-10">
          {currencyData.map((currency, index) => (
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
          <HeuresCard />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            layout
            key={'7'}
            className="gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial shadow-custom"
            style={{
              background:
                'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
            }}
          >
            <CalendarCard />
          </motion.div>
          <MembershipCard />
          <NewsTraditionalCard />
          <NewsTwitterCard />
          <NewsBellshireCard />
        </PageAnimatePresence>
      </div>
    </PageContainer>
  );
}
