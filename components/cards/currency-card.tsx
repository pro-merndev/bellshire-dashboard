'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CurrencyCardProps {
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
      key={title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
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
              <CardTitle className="font-poppins text-sm font-medium text-[#B9B9B9]">
                {title} Quote{' '}
              </CardTitle>
            </div>
            <div
              className={cn(
                `flex h-10 w-10 items-center justify-center rounded-full`,
                iconBgColor
              )}
            >
              {icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-x-1 font-poppins">
              <p className="text-3xl font-medium">${amount}</p>
              <span className="text-base text-[#B9B9B9]">{currency}</span>
            </div>
            <Button
              className={cn(
                'mt-2 h-auto rounded-full py-1 font-inter text-sm font-medium',
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
