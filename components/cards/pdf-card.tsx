'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <Card
        className="gradiant-bg relative rounded-[20px] border-none bg-custom-radial shadow-custom"
        style={{
          background:
            'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
        }}
      >
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
              className="h-auto w-full rounded-xl py-3 font-roboto text-white"
              type="submit"
              style={{
                background:
                  'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
              }}
            >
              Preview
            </Button>
            <Button
              className="h-auto w-full rounded-xl py-3 font-roboto text-white "
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #949494 0%, #191919 100%)'
              }}
            >
              Télécharger
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PdfCard;
