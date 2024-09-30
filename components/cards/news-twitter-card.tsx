'use client';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
const NewsTwitterCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="dark:gradiant-bg relative col-span-2 row-span-2 rounded-[20px] border-none dark:bg-custom-radial dark:shadow-custom bg-custom-radial-light"
      layout
      key={'9'}
    >
      <div className="flex w-full justify-between p-5">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-x-2">
            <h6 className="rounded-xl dark:bg-[#85E2FF1A] px-3 py-1 font-inter text-xs dark:text-[#84E0FF] xl:text-sm text-[#3F93AF] bg-[#3272851A]">
              NEWS TWITTER
            </h6>
            <div className="rounded-lg dark:bg-[#575757] p-1 text-black bg-gradient-to-r from-[#C6C6C680] to-[#A6A6A640]">
              <Link
                href={'https://www.bloomberg.com/quote/2202:HK'}
                target="_blank"
              >
                <BsArrowUpRight className="h-4 w-4 xl:h-6 xl:w-6 fill-" />
              </Link>
            </div>
          </div>
          <h2 className="font-poppins text-base font-medium md:text-lg xl:text-2xl">
            China Vanke’s Sales Slump Worsens After Debt Cracks Show Up
          </h2>
          <p className="font-poppins text-xs dark:text-paragraph text-lightHeading xl:text-sm">
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

export default NewsTwitterCard;
