'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CurrencyCardProps {
  id: number;
  title: string;
  currency: string;
  amount: string;
  rateStatus: boolean;
  rateAmount: string;
  icon: any;
  color: string;
  iconBgColor: string;
}

const CurrencyCard = (props: CurrencyCardProps) => {
  const {
    id,
    title,
    color,
    currency,
    amount,
    rateAmount,
    rateStatus,
    icon,
    iconBgColor
  } = props;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      layout
      className="col-span-2 lg:col-span-1"
    >
      <Card
        className="gradiant-bg relative rounded-[20px] border-none bg-custom-radial shadow-custom"
        style={{
          background:
            'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
        }}
      >
        <div className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-x-2">
              <Separator
                orientation="vertical"
                className={cn(`h-6 w-1 rounded-full`, color)}
              />
              <CardTitle className="font-poppins text-xs font-medium text-[#B9B9B9] lg:text-sm">
                {title} Quote{' '}
              </CardTitle>
            </div>
            <div
              className={cn(
                `relative z-0 flex h-10 w-10 items-center justify-center rounded-full`,
                iconBgColor
              )}
            >
              {icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-x-1 font-poppins">
              <p className="text-lg font-medium lg:text-xl xl:text-3xl">
                ${amount}
              </p>
              <span className="text-sm text-[#B9B9B9] xl:text-base">
                {currency}
              </span>
            </div>
            <Button
              className={cn(
                'mt-2 h-auto rounded-full py-1 font-inter text-xs font-medium xl:text-sm',
                rateStatus
                  ? 'bg-[#85FFD81A] text-[#1DCA93]'
                  : 'bg-[#FF85851A] text-[#FF6E6E]'
              )}
              variant={'secondary'}
            >
              {rateStatus ? '+' : '-'}
              {rateAmount}%
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default CurrencyCard;
