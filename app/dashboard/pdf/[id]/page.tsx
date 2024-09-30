import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import PDFPeview from '@/components/pdf-preview';
import Back from '@/components/ui/back';
import Link from 'next/link';
import { HiOutlineDownload } from 'react-icons/hi';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="flex justify-between">
            <div>
              <Back />
            </div>
            <Link
              href={'/gant-chart.pdf'}
              download="downloaded.pdf"
              className="flex items-center gap-x-3"
            >
              <p className="font-poppins">Télécharger</p>
              <div className="rounded-lg bg-white p-[5px]">
                <HiOutlineDownload size={16} color="#000" />
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <PDFPeview />
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
