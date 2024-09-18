import CurrencyCard from '@/components/cards/currency-card';
import { AreaGraph } from '@/components/charts/area-graph';
import { PieGraph } from '@/components/charts/pie-graph';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import { RecentSales } from '@/components/recent-sales';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <Transition>
          <div className="space-y-4">
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
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              <AreaGraph />
            </div>
            <div className="col-span-4 md:col-span-3">
              <PieGraph />
            </div>
            <div className="col-span-4"></div>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
