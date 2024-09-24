'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeuresCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      layout
      key={'8'}
      className="gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial shadow-custom"
      style={{
        background:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
      }}
    >
      <div className="flex w-full justify-between p-5">
        <div className="basis-1/2 space-y-3 xl:space-y-6">
          <div className="flex items-center gap-x-2">
            <Image src={'/crown.svg'} alt="Tether" width={20} height={20} />
            <h2 className="font-poppins text-[9px] text-[#B9B9B9] xl:text-sm">
              Membership actuel
            </h2>
          </div>
          <h4 className="font-xl font-poppins font-medium xl:text-2xl">
            Prestige
          </h4>
        </div>
        <div className="basis-1/2 space-y-4">
          <Button
            variant={'default'}
            className="w-full rounded-full py-2 font-roboto text-[9px] text-white xl:py-3 xl:text-base"
            style={{
              background: 'linear-gradient(90deg, #949494 0%, #191919 100%)'
            }}
          >
            Gestion membership
          </Button>
          <Button
            variant={'secondary'}
            className="w-full rounded-full py-2 font-roboto text-[9px] text-white xl:py-3 xl:text-base"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
            }}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeuresCard;
