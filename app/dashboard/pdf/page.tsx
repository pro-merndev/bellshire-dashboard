import PdfCard from '@/components/cards/pdf-card';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';

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
