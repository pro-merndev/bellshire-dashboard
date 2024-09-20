import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import PDFPeview from '@/components/pdf-preview';
import { FaChevronLeft } from 'react-icons/fa6';
import { HiOutlineDownload } from 'react-icons/hi';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <div className="rounded-lg bg-white p-[5px]">
                <FaChevronLeft size={16} color="#000" />
              </div>
              <p className="font-poppins">Fermer preview</p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="font-poppins">Télécharger</p>
              <div className="rounded-lg bg-white p-[5px]">
                <HiOutlineDownload size={16} color="#000" />
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <PDFPeview />
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
