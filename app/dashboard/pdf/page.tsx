import CalendarCard from '@/components/cards/calendar-card';
import CurrencyCard from '@/components/cards/currency-card';
import PdfCard from '@/components/cards/pdf-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
            <PdfCard title='Cours N°1'/>
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
