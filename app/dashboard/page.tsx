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
            <CurrencyCard
              title="BTC"
              currency={'USD'}
              amount="60,587"
              rateStatus={true}
              rateAmount="5.4"
              color="bg-[#F9C945]"
              iconBgColor="bg-[#F9A54526]"
              icon={
                <Image
                  src={'/bitcoin.svg'}
                  alt="bitcoin"
                  width={17}
                  height={23}
                />
              }
            />
            <CurrencyCard
              title="ETH"
              currency={'ETH'}
              amount="12.135"
              rateStatus={false}
              rateAmount="2.7"
              color="bg-[#4563F9]"
              iconBgColor="bg-[#748BFF26]"
              icon={
                <Image
                  src={'/ethereum.svg'}
                  alt="ethereum"
                  width={17}
                  height={23}
                />
              }
            />
            <CurrencyCard
              title="EUROSD"
              currency={'EUROSD'}
              amount="0.6578"
              rateStatus={true}
              rateAmount="5.4"
              color="bg-[#43C5A2]"
              iconBgColor="bg-[#43C5A21A]"
              icon={
                <Image
                  src={'/tether.svg'}
                  alt="Tether"
                  width={23}
                  height={29}
                />
              }
            />
            <CurrencyCard
              title="USDT"
              currency={'ETH'}
              amount="12.135"
              rateStatus={true}
              rateAmount="5.4"
              color="bg-[#43C5A2]"
              iconBgColor="bg-[#43C5A21A]"
              icon={
                <Image
                  src={'/tether.svg'}
                  alt="Tether"
                  width={23}
                  height={29}
                />
              }
            />
            <div
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full justify-between p-5">
                <div className="basis-1/2 space-y-6">
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
                <div className="basis-1/2 space-y-4">
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
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full justify-between p-5">
                <div className="basis-1/2 space-y-6">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={'/crown.svg'}
                      alt="Tether"
                      width={20}
                      height={20}
                    />
                    <h2 className="font-poppins text-sm text-[#B9B9B9]">
                      Membership actuel
                    </h2>
                  </div>
                  <h4 className="font-poppins text-2xl font-medium md:text-[32px]">
                    Prestige
                  </h4>
                </div>
                <div className="basis-1/2 space-y-4">
                  <Button
                    className="h-auto w-full rounded-full py-3 font-roboto text-white"
                    type="submit"
                    style={{
                      background:
                        'linear-gradient(90deg, #949494 0%, #191919 100%)'
                    }}
                  >
                    Gestion membership
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
            <div
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full justify-between p-5">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-x-2">
                    <h6 className="rounded-xl bg-[#FFD0851A] px-3 py-1 font-inter text-sm text-[#FFE284]">
                      NEWS TRADITIONNEL
                    </h6>
                    <div className="rounded-lg bg-[#575757] p-1 text-black">
                      <BsArrowUpRight size={24} />
                    </div>
                  </div>
                  <h2 className="font-poppins font-medium md:text-2xl">
                    China Vanke’s Sales Slump Worsens After Debt Cracks Show Up
                  </h2>
                  <p className="font-poppins text-sm text-[#8A8A8A]">
                    <Link
                      href={'https://www.bloomberg.com/quote/2202:HK'}
                      target="_blank"
                      className="underline"
                    >
                      China Vanke Co.
                    </Link>
                    ’s sales slump worsened in August amid concerns about the
                    developer’s ability to repay 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-09-02/china-vanke-debt-cracks-exposed-after-first-loss-in-20-years'
                      }
                      target="_blank"
                      className="underline"
                    >
                      debt
                    </Link>
                    . Contracted sales declined 24% from a year earlier to 17.24
                    billion yuan ($2.4 billion), widening from a 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-08-06/china-vanke-sales-slump-extends-adding-to-debt-woes'
                      }
                      target="_blank"
                      className="underline"
                    >
                      13% slide
                    </Link>
                     in July, the company said in a statement on Friday.
                    Transactions shrank 10% on month.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full justify-between p-5">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-x-2">
                    <h6 className="rounded-xl bg-[#85E2FF1A] px-3 py-1 font-inter text-sm text-[#84E0FF]">
                      NEWS TWITTER
                    </h6>
                    <div className="rounded-lg bg-[#575757] p-1 text-black">
                      <BsArrowUpRight size={24} />
                    </div>
                  </div>
                  <h2 className="font-poppins font-medium md:text-2xl">
                    China Vanke’s Sales Slump Worsens After Debt Cracks Show Up
                  </h2>
                  <p className="font-poppins text-sm text-[#8A8A8A]">
                    <Link
                      href={'https://www.bloomberg.com/quote/2202:HK'}
                      target="_blank"
                      className="underline"
                    >
                      China Vanke Co.
                    </Link>
                    ’s sales slump worsened in August amid concerns about the
                    developer’s ability to repay 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-09-02/china-vanke-debt-cracks-exposed-after-first-loss-in-20-years'
                      }
                      target="_blank"
                      className="underline"
                    >
                      debt
                    </Link>
                    . Contracted sales declined 24% from a year earlier to 17.24
                    billion yuan ($2.4 billion), widening from a 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-08-06/china-vanke-sales-slump-extends-adding-to-debt-woes'
                      }
                      target="_blank"
                      className="underline"
                    >
                      13% slide
                    </Link>
                     in July, the company said in a statement on Friday.
                    Transactions shrank 10% on month.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="gradiant-bg relative col-span-4 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
              style={{
                background:
                  'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
              }}
            >
              <div className="flex w-full justify-between p-5">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="flex items-center gap-x-4">
                      <h6 className="rounded-xl bg-[#FFFFFF1A] px-3 py-1 font-inter text-sm text-white">
                        NEWS BELLSHIRE
                      </h6>
                      <h2 className="font-poppins font-medium md:text-2xl">
                        Profitz est maintenant disponible sur mobile !
                      </h2>
                    </div>
                    <div className="rounded-lg bg-[#575757] p-1 text-black">
                      <BsArrowUpRight size={24} />
                    </div>
                  </div>

                  <p className="font-poppins text-sm text-[#8A8A8A]">
                    <Link
                      href={'https://www.bloomberg.com/quote/2202:HK'}
                      target="_blank"
                      className="underline"
                    >
                      China Vanke Co.
                    </Link>
                    ’s sales slump worsened in August amid concerns about the
                    developer’s ability to repay 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-09-02/china-vanke-debt-cracks-exposed-after-first-loss-in-20-years'
                      }
                      target="_blank"
                      className="underline"
                    >
                      debt
                    </Link>
                    . Contracted sales declined 24% from a year earlier to 17.24
                    billion yuan ($2.4 billion), widening from a 
                    <Link
                      href={
                        'https://www.bloomberg.com/news/articles/2024-08-06/china-vanke-sales-slump-extends-adding-to-debt-woes'
                      }
                      target="_blank"
                      className="underline"
                    >
                      13% slide
                    </Link>
                     in July, the company said in a statement on Friday.
                    Transactions shrank 10% on month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
