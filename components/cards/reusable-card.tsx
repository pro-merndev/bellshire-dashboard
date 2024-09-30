'use client';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ReusableCardProps {
  title: string;
  subtitle?: string;
  mainText: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  icon: any;
  customStyles?: string;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  mainText,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  icon,
  customStyles = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className={`dark:gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom ${customStyles}`}
    >
      <div className="flex w-full justify-between p-5">
        <div className="basis-1/2 space-y-3 xl:space-y-6">
          <div className="flex items-center gap-x-2">
            {icon}
            <h2 className="font-poppins text-[9px] text-dark-bg xl:text-sm dark:text-calendarScheduleText">
              {title}
            </h2>
          </div>
          <h4 className="font-xl font-poppins font-medium text-dark-bg xl:text-2xl dark:text-white">
            {mainText}
          </h4>
        </div>
        <div className="basis-1/2 space-y-4">
          <Button
            variant={'default'}
            className="w-full font-roboto text-[9px] text-white xl:py-3 xl:text-base dark:text-lightGray"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </Button>
          <Button
            variant={'secondary'}
            className="w-full font-roboto text-[9px] text-dark-bg xl:py-3 xl:text-base dark:text-white"
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReusableCard;
