'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface PDFCardProps {
  title: string;
}

const PdfCard = (props: PDFCardProps) => {
  const { title } = props;

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={'/dashboard/pdf/pdf-details'}>
        <Card className="dark:gradiant-bg relative rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
          <div className="w-full space-y-6 p-6">
            <Image
              src={'/pdf-preview.png'}
              alt="Pdf Preview"
              width={210}
              height={100}
              className="w-full"
            />
            <h4 className="font-poppins text-base text-white">{title}</h4>
            <div className="space-y-4">
              <Button
                className="h-auto w-full rounded-xl py-3 font-roboto dark:text-white text-lightHeading"
                variant={'secondary'}
              >
                Preview
              </Button>
              <Button
                variant={'default'}
                className="h-auto w-full rounded-xl py-3 font-roboto text-white "
              >
                Télécharger
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PdfCard;
