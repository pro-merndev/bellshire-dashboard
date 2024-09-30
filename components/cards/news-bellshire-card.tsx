'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const NewsBellshireCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="dark:gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none bg-custom-radial-light lg:col-span-4 xl:col-span-4 dark:bg-custom-radial dark:shadow-custom"
      // style={{
      //   background:
      //     'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
      // }}
      layout
      key={'10'}
    >
      <div className="flex w-full justify-between p-5">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-4">
              <h6 className="rounded-xl bg-[#B3B3B31A] px-3 py-1 font-inter text-xs text-grey xl:text-sm dark:bg-[#FFFFFF1A] dark:text-white">
                NEWS BELLSHIRE
              </h6>
              <h2 className="font-poppins text-base font-medium md:text-lg xl:text-2xl">
                Profitz est maintenant disponible sur mobile !
              </h2>
            </div>
            <div className="rounded-lg dark:bg-[#575757] p-1 bg-gradient-to-r from-[#C6C6C680] to-[#A6A6A640]">
              <Link
                href={'https://www.bloomberg.com/quote/2202:HK'}
                target="_blank"
              >
                <BsArrowUpRight className="h-4 w-4 xl:h-6 xl:w-6" />
              </Link>
            </div>
          </div>
          <p className="font-poppins text-xs text-lightHeading xl:text-sm dark:text-paragraph">
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
            . Contracted sales declined 24% from a year earlier to 17.24 billion
            yuan ($2.4 billion), widening from a 
            <Link
              href={
                'https://www.bloomberg.com/news/articles/2024-08-06/china-vanke-sales-slump-extends-adding-to-debt-woes'
              }
              target="_blank"
              className="underline"
            >
              13% slide
            </Link>
             in July, the company said in a statement on Friday. Transactions
            shrank 10% on month.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsBellshireCard;
