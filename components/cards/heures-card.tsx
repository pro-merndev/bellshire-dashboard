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
      className="dark:gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none dark:bg-custom-radial dark:shadow-custom bg-custom-radial-light"
      
    >
      <div className="flex w-full justify-between p-5">
        <div className="basis-1/2 space-y-3 xl:space-y-6">
          <div className="flex items-center gap-x-2">
            <Image src={'/clock.svg'} alt="Tether" width={20} height={20} />
            <h2 className="font-poppins text-[9px] dark:text-calendarScheduleText text-dark-bg xl:text-sm">
              Heures disponibles
            </h2>
          </div>
          <h4 className="font-xl font-poppins font-medium xl:text-2xl dark:text-white text-dark-bg">
            10 Heures
          </h4>
        </div>
        <div className="basis-1/2 space-y-4">
          <Button
            variant={'default'}
            className="w-full font-roboto text-[9px] dark:text-lightGray text-white xl:py-3 xl:text-base"
          >
            Réserver maintenant
          </Button>
          <Button
            variant={'secondary'}
            className="w-full font-roboto text-[9px] dark:text-white text-dark-bg xl:py-3 xl:text-base"
          >
            Ajouter des heures
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeuresCard;
